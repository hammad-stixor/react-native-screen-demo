import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { scale } from "../../utils/guidelines";
import IconGroupIcon from "../../assets/svg/icon-group-icon.svg";
import { colors } from "../../theme";

export const Rating: FC = () => {
  return (
    <View style={styles.container}>
      <IconGroupIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: scale(-8),
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    padding: scale(12),
    borderRadius: scale(50),
    marginHorizontal: scale(24),
    zIndex: -1,
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
