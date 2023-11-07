import { FC } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { scale } from "../../utils/guidelines";
import { colors } from "../../theme";

export const SocialButtons: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Modifier / Signaler</Text>
      <View style={styles.btnContainers}>
        <Image
          style={styles.img}
          source={require("../../assets/imgs/chat-icon-img.png")}
        />
        <Image
          style={styles.img}
          source={require("../../assets/imgs/address-icon-img.png")}
        />
        <Image
          style={styles.img}
          source={require("../../assets/imgs/share-icon-img.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: scale(20),
  },
  text: {
    textAlign: "center",
    color: colors.grey,
    fontSize: scale(18),
    fontWeight: "600",
  },
  btnContainers: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: scale(90),
    height: scale(90),
    resizeMode: "contain",
  },
});
