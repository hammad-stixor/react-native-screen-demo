import { Dimensions, Platform, StatusBar } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 414;
const guidelineBaseHeight = 896;

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;
export const PLATFORM_IOS = Platform.OS === "ios" ? true : false;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const STATUSBAR_HEIGHT = PLATFORM_IOS ? 10 : StatusBar.currentHeight!;
export const HEADER_HEIGHT = 80;

export const scale = (size: number): number =>
  width > 600
    ? (width / guidelineBaseWidth) * size * 0.61
    : (width / guidelineBaseWidth) * size;

export const scaleVertical = (size: number): number =>
  (height / guidelineBaseHeight) * size;

export const scaleModerate = (size: number, factor = 0.5): number =>
  size + (scale(size) - size) * factor;
