import React from "react";
import {ActivityIndicator, ColorValue, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import sizes from "../../theme/sizes";
import colors from "../../theme/colors";

export type ButtonProps = {
  text: string;
  color?: ColorValue;
  loading?: boolean;
} & TouchableOpacityProps
const Button = ({text, color = colors.brand.primary, loading = false, disabled, ...props}: ButtonProps) => {
  return (<TouchableOpacity
    {...props}
    style={[styles.button, {backgroundColor: disabled ? colors.gray.primary : color}]}
  >
    {!loading ? <Text style={styles.buttonLabel}>{text}</Text> :
      <ActivityIndicator size="small" color={colors.mono.white}/>}
  </TouchableOpacity>);
};

export default Button;
const styles = StyleSheet.create({
  button: {
    borderRadius: sizes.borderRadius.md,
    height: sizes.inputHeight.lg,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonLabel: {
    color: colors.mono.white,
    fontWeight: "600",
    fontSize: sizes.text.md
  }
});
