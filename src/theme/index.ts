import * as React from "react";
import {ColorValue} from "react-native";
import colors from "./colors";


export interface Theme {
  primary: ColorValue;
  secondary: ColorValue;
  // The color for the main background of your interface.
  background: ColorValue;
  border: ColorValue;
}

export const defaultTheme: Theme = {
  primary: colors.brand.primary,
  secondary: colors.brand.secondary,
  background: colors.mono.white,
  border: colors.gray.accent,
};

export const ThemeContext = React.createContext(defaultTheme);

export function useTheme() {
  const theme = React.useContext(ThemeContext);
  return theme;
}
