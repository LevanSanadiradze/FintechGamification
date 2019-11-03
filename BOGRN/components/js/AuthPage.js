import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";

import BG from "../assets/bg.png";

export default function AuthPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.background} source={BG} />
      <Text style={styles.appName}>FINHEALTH</Text>
      <Text style={styles.motoText}>
        If you're offered a seat on a rocket ship, don't ask what
      </Text>
      <Text style={styles.motoText}>seat! Just get on.</Text>
      <TouchableOpacity
        style={styles.authBtn}
        title={"შესვლა"}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.authBtnText}>შესვლა</Text>
      </TouchableOpacity>
    </View>
  );
}

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },
  appName: {
    color: "#dc5d1c",
    marginBottom: 10,
    fontSize: 36
  },
  motoText: {
    color: "#78849E",
    marginBottom: 5
  },
  background: {
    position: "absolute",
    resizeMode: "cover",
    width: screenWidth,
    height: screenHeight
  },
  authBtn: {
    width: 150,
    height: 40,
    backgroundColor: "#dc5d1c",
    borderRadius: 5,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  authBtnText: {
    color: "white",
  }
});
