/**
 * @format
 */

import { AppRegistry } from "react-native";
import { PaperProvider } from "react-native-paper";
import { paperTheme } from "./src/theme";
import { name as appName } from "./app.json";

import App from "./App";

const Main = () => {
  return (
    <PaperProvider theme={paperTheme}>
      <App />
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
