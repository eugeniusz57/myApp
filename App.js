import { StyleSheet, View, ImageBackground, Platform } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";

export default function App() {
  console.log(Platform.OS);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./img/photoBG.jpg")}
      >
        <RegistrationScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
    textAlign: "center",
  },
});
