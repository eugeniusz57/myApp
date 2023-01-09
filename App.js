import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  Text,
  Button,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./img/photoBG.jpg")}
      >
        <View style={styles.form}>
          <View>
            <Text style={styles.title}>Registretion</Text>
          </View>
          <TextInput style={styles.input} placeholder="Login" />
          <TextInput style={styles.input} placeholder="Email" />
          <View>
            <TextInput style={styles.input} placeholder="Password" />
            <Button title="Learn More" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  title: {
    // fontFamily: "Roboto",
    // fontStyle: "normal",
    // fontWeight: 500,
    fontSize: 30,
    // lineHeight: 35,
    textAlign: "center",
    color: "#212121",
    marginBottom: 33,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
    textAlign: "center",
  },
  input: {
    height: 50,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16,
    borderColor: "#BDBDBD",
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    borderWidth: 1,
    color: "#212121",
  },
  form: {
    marginTop: 263,
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
  },
});
