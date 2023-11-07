import { FC } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Avatar, Text } from "react-native-paper";
import { scale } from "../../utils/guidelines";
import { colors } from "../../theme";

export const ProgressBar: FC = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>Champion</Text>
      <View style={styles.progressContainer}>
        <View style={styles.smallImgContainer}>
          <Text style={styles.countText}>2 / 4</Text>
          <View>
            <Avatar.Image
              style={styles.smallImg}
              size={38}
              source={{
                uri: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              }}
            />
            <Image
              style={styles.smallImgBg}
              width={50}
              height={50}
              source={require("../../assets/imgs/progress-bg-img.png")}
            />
          </View>
        </View>
        <View style={styles.largeImgContainer}>
          <Avatar.Image
            style={styles.largeImg}
            size={55}
            source={{
              uri: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            }}
          />
          <Image
            style={styles.largeImgBg}
            width={50}
            height={50}
            source={require("../../assets/imgs/progress-bg-img.png")}
          />
          <View style={styles.capImgContainer}>
            <Image
              style={styles.capImg}
              source={require("../../assets/imgs/cap-icon-img.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: scale(20),
    paddingHorizontal: scale(20),
  },
  text: {
    fontSize: 24,
    color: colors.dark,
    fontWeight: "600",
    marginBottom: scale(10),
  },
  progressContainer: {
    backgroundColor: colors.darkGrey,
    width: "85%",
    height: scale(60),
    borderRadius: scale(10),
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  smallImgContainer: {
    backgroundColor: colors.secondary,
    width: "55%",
    height: scale(60),
    borderRadius: scale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  countText: {
    textAlign: "center",
    flex: 1,
    fontWeight: "bold",
    fontSize: scale(16),
  },
  smallImg: {
    zIndex: 1,
    left: scale(14.5),
    top: scale(0.5),
  },
  smallImgBg: {
    width: scale(58),
    height: scale(58),
    top: scale(-9),
    left: scale(5),
    position: "absolute",
    resizeMode: "contain",
  },
  largeImgContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  largeImg: {
    zIndex: 1,
    left: scale(33.5),
    top: scale(-2),
  },
  largeImgBg: {
    width: scale(90),
    height: scale(90),
    top: scale(-18),
    left: scale(90),
    position: "absolute",
    resizeMode: "contain",
  },
  capImgContainer: {
    zIndex: 1,
  },
  capImg: {
    width: scale(80),
    height: scale(80),
    position: "absolute",
    top: scale(-108),
    left: scale(-45),
  },
});
