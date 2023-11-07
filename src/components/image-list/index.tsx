import { FC } from "react";
import { FlatList, StyleSheet } from "react-native";
import { scale } from "../../utils/guidelines";
import { ImageCardItem } from "../image-card-item";

export const ImageList: FC = () => {
  const imagesData = [
    {
      id: "1",
      url: require("../../assets/imgs/img-1.jpg"),
    },
    {
      id: "2",
      url: require("../../assets/imgs/img-2.jpg"),
    },
    {
      id: "3",
      url: require("../../assets/imgs/img-3.jpg"),
    },
    {
      id: "4",
      url: require("../../assets/imgs/img-4.jpg"),
    },
  ];

  return (
    <FlatList
      horizontal
      style={styles.list}
      contentContainerStyle={styles.listContentContainerStyles}
      showsHorizontalScrollIndicator={false}
      data={imagesData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ImageCardItem id={item.id} url={item.url} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: scale(15),
    flexGrow: 0,
  },
  listContentContainerStyles: {
    marginStart: scale(20),
    gap: scale(12),
  },
});
