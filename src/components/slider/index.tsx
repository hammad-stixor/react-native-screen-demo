/* eslint-disable @typescript-eslint/ban-ts-comment */

import { Alert, Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Slider from "react-native-slide-to-unlock";
import { scale } from "../../utils/guidelines";
import { colors } from "../../theme";

export const SliderComp = () => {
  return (
    <View style={styles.container}>
      {/* @ts-ignore */}
      <Slider
        onEndReached={() => Alert.alert("Attention", "onEndReached!")}
        containerStyle={styles.containerStyles}
        sliderElement={
          <View style={styles.slideIconContainer}>
            <Image
              style={styles.slideIcon}
              source={require("../../assets/imgs/slide-icon-img.png")}
            />
          </View>
        }
      >
        <Text style={styles.text}>Créer une activité ici !</Text>
      </Slider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  containerStyles: {
    margin: 8,
    backgroundColor: colors.primary,
    borderRadius: scale(30),
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
  },
  slideIconContainer: {
    backgroundColor: colors.white,
    width: 50,
    height: 50,
    borderRadius: scale(30),
    margin: scale(5),
    justifyContent: "center",
    alignItems: "center",
  },
  slideIcon: {
    width: scale(25),
    height: scale(25),
  },
  text: {
    color: colors.white,
    fontSize: scale(17),
    fontWeight: "700",
  },
});
