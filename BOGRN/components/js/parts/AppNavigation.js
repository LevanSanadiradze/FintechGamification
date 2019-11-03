import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

import BadgeIco from "../../assets/icons/badgeIco.png";
import ProfileIco from "../../assets/icons/profileIco.png";
import PlusIco from "../../assets/icons/plusIco.png";

export default function AppNavigation({ navigation }) {
  return (
    <View style={styles.navigationContainer}>
      <TouchableOpacity
        title={"შესვლა"}
        onPress={() => navigation.navigate("Home")}
      >
        <Image style={styles.navigationItemBadge} source={BadgeIco} />
      </TouchableOpacity>
      <TouchableOpacity
        title={"შესვლა"}
        onPress={() => navigation.navigate("Home")}
      >
        <Image style={styles.navigationItemPlus} source={PlusIco} />
      </TouchableOpacity>
      <TouchableOpacity
        title={"შესვლა"}
        onPress={() => navigation.navigate("Home")}
      >
        <Image style={styles.navigationItemProfile} source={ProfileIco} />
      </TouchableOpacity>
    </View>
  );
}

const screenWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 50,
    position: "absolute",
    bottom: 0,
    zIndex: 10,
    backgroundColor: "white"
  },
  navigationItemBadge: {
    height: 30,
    width: 30
  },
  navigationItemPlus: {
    height: 30,
    width: 30
  },
  navigationItemProfile: {
    height: 25,
    width: 25
  }
});
