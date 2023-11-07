import { FC } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { scale } from "../../utils/guidelines";
import { colors } from "../../theme";

type ImageCardItemProps = {
  id: string;
  url: ImageSourcePropType;
};

export const ImageCardItem: FC<ImageCardItemProps> = ({ url }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image style={styles.cardImg} source={url} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: scale(134),
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.29,
    shadowRadius: 3.65,
    elevation: 7,
    borderRadius: scale(25),
  },
  cardImg: {
    borderRadius: scale(25),
    width: scale(150),
    height: scale(130),
    resizeMode: "cover",
    borderColor: "white",
    borderWidth: 3,
  },
});
