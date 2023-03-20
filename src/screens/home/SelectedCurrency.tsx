import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {Feather} from "@expo/vector-icons";
import sizes from "../../theme/sizes";
import colors from "../../theme/colors";

const SelectedCurrency = ({title, currency, withArrow = false}: any) => {
  return (
    <View style={styles.selectedCurrency}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.currencyDetails}>
        <Image
          style={styles.currencyImage}
          source={{uri: `https://res.cloudinary.com/dng7cvpds/image/upload/v1679211841/flags/${currency.image}`}}
        />
        <Text style={styles.currencyName}>{currency.key}</Text>
        {withArrow && <Feather name="chevron-down" size={24} color="white"/>}
      </View>
    </View>);
};

export default SelectedCurrency;
const styles = StyleSheet.create({
  selectedCurrency: {
    height: sizes.inputHeight.lg,
    width: 130,
    backgroundColor: colors.brand.primary,
    borderRadius: sizes.borderRadius.md,
    marginRight: -sizes.spacing.sm,
    zIndex: 2,
    padding: sizes.spacing.md,
    justifyContent: "space-between"
  },
  title: {fontSize: sizes.text.sm, color: colors.mono.white},
  currencyDetails: {flexDirection: "row", gap: sizes.spacing.sm, alignItems: "flex-end"},
  currencyImage: {width: 35, height: 20},
  currencyName: {color: colors.mono.white, fontWeight: "600"},
});
