import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

import DropDownIcon from "../../assets/icons/dropDown.png";

export default function CategoryItem({ icon, name, spent, budget, status }) {
  let percentage = (spent / budget) * 100;
  let roundPercentage = Math.round(percentage * 100) / 100;

  return (
    <View style={styles.catItemWrapper}>
      <View style={styles.expenseCat}>
        <View style={styles.expenseItem}>
          <View style={styles.itemInfo}>
            <View style={styles.itemHead}>
              <Image source={icon} />
              <Text style={styles.itemHeadName}>{name}</Text>
            </View>

            <View style={styles.itemStatus}>
              <View style={styles.itemStatusName}>
                <Text>{status}</Text>
                <Text>{roundPercentage}%</Text>
              </View>
              <View style={styles.itemStatusProgress}>
                <View
                  style={{
                    width: `${roundPercentage}%`,
                    backgroundColor: "#dc5d1c",
                    height: 10,
                    borderRadius: 25
                  }}
                ></View>
              </View>
            </View>
          </View>
          <View style={styles.itemDropDown}>
            <Image source={DropDownIcon} />
          </View>
        </View>
      </View>
    </View>
  );
}

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  catItemWrapper: {
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 10,
    width: "90%",
    padding: 10,
    backgroundColor: "rgba(255,255,255, 1)"
  },

  expenseCat: {
    width: "100%",
    alignItems: "center"
  },
  expenseItem: {
    flexDirection: "row"
  },
  itemInfo: {
    width: "80%"
  },
  itemHead: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center"
  },
  itemStatus: {
    marginTop: 10
  },
  itemHeadName: {
    marginLeft: 10
  },
  itemStatusName: {
    marginBottom: 5,
    width: "100%"
  },
  itemStatusProgress: {
    width: "100%",
    height: 10,
    borderRadius: 25,
    backgroundColor: "#dc5d1c",
    opacity: 0.3
  },
  itemStatusProgressInner: {
    height: 10,
    borderRadius: 25
  },
  itemDropDown: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center"
  }
});
