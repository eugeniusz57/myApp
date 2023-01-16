import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

export default function RegistrationScreen() {
  const [email, setEmail] = useState();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [isFokusKeyBoard, setIsFokusKeyBoard] = useState();
  return (
    <View style={styles.form}>
      {/* <View style={styles.fotoBorder}></View> */}
      <Text style={styles.title}>Registration</Text>

      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TextInput style={styles.input} placeholder="Login" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
      </KeyboardAvoidingView>

      <TouchableOpacity activeOpacity={0.8} style={styles.button}>
        <Text style={styles.textButton}>Registration</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
    marginBottom: 33,
  },
  input: {
    height: 50,
    padding: 16,
    marginTop: 16,
    borderColor: "#BDBDBD",
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    borderWidth: 1,
    color: "#212121",
  },
  form: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingHorizontal: 16,
  },
  button: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 43,
    marginBottom: 16,
  },
  textButton: {
    fontWeight: "400",
    fontSize: 16,
    color: "#FFFFFF",
  },
  // fotoBorder: {
  //   top: 0,
  //   left: 0,
  //   borderTopLeftRadius: 16,
  //   borderTopRightRadius: 16,
  //   backgroundColor: "#F6F6F6",
  //   width: 120,
  //   height: 120,
  //   borderColor: "red",
  //   borderWidth: 5,
  // },
});
