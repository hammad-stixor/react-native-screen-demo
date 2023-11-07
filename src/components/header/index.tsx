import { FC } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import BallBgIcon from "../../assets/svg/ball-bg-icon.svg";
import { scale } from "../../utils/guidelines";
import { colors } from "../../theme";

export const Header: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ballContainer}>
        <BallBgIcon />
        <Image
          style={styles.ballBgImage}
          source={require("../../assets/imgs/ball-img.png")}
        />
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Terrain de basket</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    top: scale(-4),
    left: scale(6),
  },
  ballContainer: {
    zIndex: 1,
    width: scale(68),

    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ballBgImage: {
    position: "absolute",
    right: scale(2),
    top: scale(10),
    width: scale(62),
    height: scale(62),
  },
  headingContainer: {
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    position: "absolute",
    width: "93%",
    backgroundColor: colors.white,
    paddingLeft: scale(20),
    paddingVertical: scale(5),
    flex: 1,
    borderRadius: scale(50),
  },
  headingText: {
    left: scale(60),
    fontSize: scale(24),
    fontWeight: "500",
  },
});
