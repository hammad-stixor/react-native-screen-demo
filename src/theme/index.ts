import { DefaultTheme, configureFonts } from "react-native-paper";

export const colors = {
  primary: "#20BAEB",
  secondary: "#F7CC2D",
  dark: "#2D2D2D",
  lightDark: "#424242",
  white: "#FFFFFF",
  lightGrey: "#C2C2C2",
  halfWhite: "#F7CC2D",
  shadowColor: "#000",
  grey: "#C2C2C2",
  darkGrey: "#D8D8D8",
};

export const fontConfig = {
  headlineLarge: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 40,
    lineHeight: 42.6,
    letterSpacing: 0,
  },
};

const baseFont = {
  fontFamily: "Nunito-Regular",
} as const;

const baseVariants = configureFonts({ config: baseFont });

export const paperTheme = {
  ...DefaultTheme,
  ...DefaultTheme.colors,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    secondary: colors.secondary,
    secondaryContainer: colors.white,
  },
  fonts: configureFonts({ config: { ...baseVariants, ...fontConfig } }),
};
