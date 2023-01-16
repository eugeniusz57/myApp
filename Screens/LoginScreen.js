import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFokusKeyBoard, setIsFokusKeyBoard] = useState();
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Login</Text>

      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
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
    marginBottom: 32,
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
    paddingTop: 32,
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
});
