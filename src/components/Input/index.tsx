import React from "react";
import {StyleSheet, TextInput, TextInputProps} from "react-native";
import {useTheme} from "../../theme";
import sizes from "../../theme/sizes";


const Input = (props: TextInputProps) => {
  const theme = useTheme();

  return (<TextInput
    {...props}
    style={[styles.input, {borderColor: theme.border}, props.style]}
  />);
};

export default Input;
const styles = StyleSheet.create({
  input: {
    height: sizes.inputHeight.lg,
    borderWidth: 2,
    borderRadius: sizes.borderRadius.md,
  },
});
