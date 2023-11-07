import { FC } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { HomeScreen } from "./src/screens";
import { colors } from "./src/theme";

const App: FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});

export default App;
