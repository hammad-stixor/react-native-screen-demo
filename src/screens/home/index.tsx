import { FC } from "react";
import { StyleSheet, View } from "react-native";
import {
  HEADER_HEIGHT,
  SCREEN_HEIGHT,
  STATUSBAR_HEIGHT,
  scale,
} from "../../utils/guidelines";
import { colors } from "../../theme";
import BgTop from "../../assets/svg/bg-top.svg";
import BgBottom from "../../assets/svg/bg-bottom.svg";
import { Header, ImageList, Rating } from "../../components";
import { ProgressBar } from "../../components/progress-bar";
import { Text } from "react-native-paper";
import { SocialButtons } from "../../components/social-buttons";
import { SliderComp } from "../../components/slider";

export const HomeScreen: FC = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <View style={styles.bgTopContainer}>
          <BgTop />
        </View>
        <View>
          <BgBottom width="100%" />
        </View>
      </View>
      <View style={styles.popup}>
        <Header />
        <Rating />
        <ImageList />
        <ProgressBar />

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>Description</Text>
          <Text style={styles.subTitleText}>3 terrains de basket gratuits</Text>
          <Text style={styles.subTitleTextTwo}>Ouvert 24h / 24h</Text>
        </View>

        <SocialButtons />
        <SliderComp />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#f0fdfe",
    marginTop: HEADER_HEIGHT - STATUSBAR_HEIGHT,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  bgTopContainer: {
    alignSelf: "flex-end",
  },
  popup: {
    flex: 1,
    position: "absolute",
    top: scale(0),
    right: scale(15),
    left: scale(15),
    height: SCREEN_HEIGHT - scale(122),
    marginTop: scale(20),
    borderRadius: scale(20),
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  descriptionContainer: {
    paddingHorizontal: scale(20),
    marginTop: scale(30),
  },
  descriptionText: {
    fontSize: scale(24),
    fontWeight: "600",
  },
  subTitleText: {
    color: "#424242",
    fontSize: scale(18),
    fontWeight: "400",
  },
  subTitleTextTwo: {
    color: "#424242",
    fontSize: scale(18),
    fontWeight: "400",
  },
});
