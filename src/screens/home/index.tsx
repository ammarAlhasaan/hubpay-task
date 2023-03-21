import React, {useEffect, useState} from "react";
import {Alert, StyleSheet, View} from "react-native";
import Dropdown from "../../components/dropdown";
import Input from "../../components/Input";
import sizes from "../../theme/sizes";
import rateDataObject from "../../new.json";
import SelectedCurrency from "./SelectedCurrency";
import TimeLine from "./TimeLine";
import Button from "../../components/Button";
import colors from "../../theme/colors";
import Note from "./Note";
import {DropdownItemType} from "../../components/dropdown/type";


const BASE_CURRENCY: DropdownItemType = {key: "AED", label: "AED", image: "ae.png"};
const addDecimal = (num: any) => {
  if (Number(num) % 1 !== 0) {
    return num.toFixed(2);
  }
  return num;
};
const Home = () => {
  const [inputChange, setInputChange] = useState({input: "", value: ""});
  const [sendAmount, setSendAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [receiveAmount, setReceiveAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState<DropdownItemType>({key: "", label: "", image: ""});
  const [exchangeRate, setExchangeRate] = useState("");
  const [rateDropdownOptions, setRateDropdownOptions] = useState<DropdownItemType[]>([{key: "", label: "", image: ""}]);
  const [rateData, setRateData] = useState<any>(undefined);

  useEffect(() => {
    // convert to a map object better performance
    const rateDataMap = new Map(Object.entries(rateDataObject));
    setRateData(rateDataMap);
    const rateDropdown: any = [];
    for (const [key, value] of rateDataMap) {
      rateDropdown.push({key, label: key, image: value.flag});
    }
    setRateDropdownOptions(rateDropdown);
    setExchangeRate(rateDataMap?.get(BASE_CURRENCY?.key)?.end_rate.toString() || "");
  }, []);

  useEffect(() => {
    if (!selectedCurrency?.key) {
      return;
    }
    if (inputChange.input === "sendAmount") {
      const val = Number(inputChange.value) * Number(exchangeRate);
      setReceiveAmount(addDecimal(val)?.toString());
    } else if (inputChange.input === "receiveAmount") {
      const val = Number(inputChange.value) / Number(exchangeRate);
      setSendAmount(addDecimal(val)?.toString());
    }

  }, [inputChange]);
  
  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row"}}>
        <SelectedCurrency title="You send exactly" currency={BASE_CURRENCY}/>
        <Input
          style={styles.input}
          onChangeText={(text) => {
            setInputChange({input: "sendAmount", value: text});
            setSendAmount(text);
          }}
          value={sendAmount}
          keyboardType="numeric"
          placeholder="0.00"
        />
      </View>
      <TimeLine fromCurrency={BASE_CURRENCY.key} toCurrency={selectedCurrency.key} exchangeRate={exchangeRate}/>
      <View style={{flexDirection: "row"}}>
        <Dropdown
          options={rateDropdownOptions}
          selected={rateDropdownOptions[0]}
          onSelect={(selectedItem: any) => {
            if (!rateData) {
              return;
            }
            setSendAmount("");
            setReceiveAmount("");
            const exchangeRateValue = rateData?.get(selectedItem?.key)?.end_rate;
            setExchangeRate(exchangeRateValue);
            setSelectedCurrency(selectedItem);
          }}
          triggerComponent={
            <SelectedCurrency title="Recipient gets" currency={selectedCurrency} withArrow/>
          }/>
        <Input
          style={styles.input}
          onChangeText={(text) => {
            setInputChange({input: "receiveAmount", value: text});
            setReceiveAmount(text);
          }}
          value={receiveAmount}
          keyboardType="numeric"
          placeholder="0.00"
        />
      </View>

      <Note/>
      <View style={{padding: sizes.spacing.md, flex: 1, justifyContent: "flex-end"}}>
        <Button
          text="Start transfer"
          loading={loading}
          color={colors.blue.primary}
          disabled={sendAmount === "0" || !sendAmount}
          onPress={() => {
            // api call
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              Alert.alert("Thanks for using Hubpay, your request has been sent successfully.");
            }, 1000);
          }}/>
      </View>

    </View>);
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: sizes.spacing.lg
  },
  input: {
    flex: 1,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeftWidth: 0,
    paddingHorizontal: sizes.spacing.md,
    textAlign: "right",
    fontSize: sizes.text.lg,
    zIndex: 1
  },
});
