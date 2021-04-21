import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { White, Grey } from "../resources/constants/colors";
import {
  EmailAddress,
  Password,
  LoginNow,
  ForgotPassword,
  OR,
  SignUp,
} from "../resources/constants/strings";

const InstagramLoginScreen = () => {
  return (
    <View style={{ marginHorizontal: 16, flex: 1 }}>
      <View
        style={{
          marginTop: 150,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: White,
            fontSize: 50,
          }}
        >
          Login
        </Text>
      </View>
      <View style={{ backgroundColor: "transparent" }}>
        <TextInput
          style={{ backgroundColor: "rgba(0,0,0,0.15)" }}
          mode="outlined"
          placeholder={EmailAddress}
          theme={{
            colors: { primary: White, text: White, placeholder: White },
          }}
        ></TextInput>
      </View>
      <View style={{ backgroundColor: "transparent" }}>
        <TextInput
          style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
          mode="outlined"
          placeholder={Password}
          right={
            <TextInput.Icon
              name="remove-red-eye"
              color={White}
              onPress={() => {}}
            />
          }
          theme={{
            colors: { primary: White, text: White, placeholder: White },
          }}
        ></TextInput>
      </View>
      <View style={{ marginTop: 16 }}>
        <Button
          mode="outlined"
          style={{ borderColor: Grey, padding: 16, justifyContent: "center" }}
          color={Grey}
          onPress={() => console.log("Login Now Pressed.")}
        >
          {LoginNow}
        </Button>
      </View>
      <View style={{ marginTop: 16 }}>
        <Button
          mode="text"
          color={White}
          onPress={() => console.log("Forgot Password Pressed.")}
        >
          {ForgotPassword}
        </Button>
      </View>
      <View
        style={{
          marginTop: 16,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: White,
            flex: 1,
            height: 1,
          }}
        ></View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ color: White }}>{OR}</Text>
        </View>
        <View
          style={{
            backgroundColor: White,
            flex: 1,
            height: 1,
          }}
        ></View>
      </View>
      <View style={{ flex: 1, marginTop: 16 }}>
        <Button
          mode="text"
          color={White}
          style={{ padding: 16 }}
          onPress={() => console.log("Forgot Password Pressed.")}
        >
          {SignUp}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default InstagramLoginScreen;
