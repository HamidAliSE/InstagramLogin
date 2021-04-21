import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Provider as PaperProvider } from "react-native-paper";
import { BlueDark, Purple } from "./resources/constants/colors";
import InstagramLoginScreen from "./screens/InstagramLoginScreen";
import DummyScreen from "./screens/DummyScreen";

const App = () => {
  return (
    <PaperProvider settings={{ icon: (props) => <Icon {...props} /> }}>
      <View style={styles.screen}>
        {/* <LinearGradient style={{ flex: 1 }} colors={[BlueDark, Purple]}>
          <InstagramLoginScreen />
        </LinearGradient> */}
        <DummyScreen />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
