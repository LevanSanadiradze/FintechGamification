import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MainPage() {
  return (
    <View style={styles.mainPageContainer}>
      <Text>MainPage</Text>
    </View>
  );
}

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
    mainPageContainer: {
        width: screenWidth,
        height: screenHeight,
    }
});
