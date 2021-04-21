import React from "react";
import { View, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Text, TextInput } from "react-native-paper";

import { BlueDark, Purple } from "../resources/constants/colors";
import { Login } from "../resources/constants/strings";

const DummyScreen = () => {
  return (
    <LinearGradient style={styles.screen} colors={[BlueDark, Purple]}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.loginText}>{Login}</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput mode="flat" style={styles.textInputSeparation}></TextInput>
          <TextInput mode="flat"></TextInput>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  loginText: {
    color: "white",
    fontFamily: "sans-serif-thin",
    fontSize: 32,
  },
  screen: {
    flex: 1,
  },
  textContainer: {
    // backgroundColor: "transparent",
    alignItems: "center",
  },
  textInputContainer: {
    paddingVertical: 16,
  },
  textInputSeparation: {
    marginBottom: 16,
  },
});

export default DummyScreen;
