import React from "react";
import {StyleSheet, Text, View} from "react-native";
import sizes from "../../theme/sizes";
import colors from "../../theme/colors";
import {Feather} from "@expo/vector-icons";

const TimeLine = ({fromCurrency, toCurrency, exchangeRate}: any) => {
  return (
    <View style={{flexDirection: "row", marginVertical: sizes.spacing.sm, marginStart: sizes.spacing.md}}>
      <View style={styles.dotes}/>
      <View style={styles.grayBox}>
        <View style={styles.exRateBox}>
          <View style={{flexDirection: "row", alignItems: "flex-end",}}>
            <Text style={[styles.mdValue, {fontWeight: "bold"}]}>{`1 `}</Text>
            <Text style={styles.smValue}>{`${fromCurrency} = `}</Text>
            <Text style={styles.mdValue}>{`${toCurrency} `}</Text>
            <Text style={[styles.mdValue, {fontWeight: "bold"}]}>{`${exchangeRate}`}</Text>
          </View>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownValue}>Fees</Text>
            <Feather name="chevron-down" size={20} color={colors.brand.primary}/>
          </View>
        </View>

      </View>
    </View>);
};

export default TimeLine;
const styles = StyleSheet.create({
  dotes: {
    borderStyle: "dashed", borderWidth: 1, borderColor: colors.gray.primary, height: 70, width: 1,
  },
  grayBox: {
    paddingVertical: sizes.spacing.sm,
    paddingStart: sizes.spacing.md,
    flex: 1
  },
  exRateBox: {
    flexDirection: "row",
    borderRadius: sizes.borderRadius.sm,
    backgroundColor: colors.gray.accent,
    flex: 1,
    justifyContent: "space-between",
    padding: sizes.spacing.md,
    alignItems: "center"

  },

  smValue: {
    fontSize: sizes.text.sm
  },
  mdValue: {
    fontSize: sizes.text.sm
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center"
  },
  dropdownValue: {
    color: colors.brand.primary
  }
});
