import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView
} from "react-native";

import MainPageHeaderImg from "../assets/mainPageBG.png";

import CatIcon from "../assets/icons/catIconEat.png";
import CosmeticIco from '../assets/icons/cosmetic.png';
import FunIco from '../assets/icons/fun.png';
import Grocery from '../assets/icons/grocery.png';
import Transport from '../assets/icons/transport.png';
import Pay from '../assets/icons/gadasaxadi.png';
import Sakomisio from '../assets/icons/sakomisio.png';
import Health from '../assets/icons/health.png'

import CategoryItem from "./parts/CategoryItem";
import AppNavigation from './parts/AppNavigation';

export default function MainPage({navigation}) {
  return (
    <View style={styles.mainPageContainer}>
      <Image style={styles.mainPageIMG} source={MainPageHeaderImg} />
      <View style={styles.mainPageHeader}>
        <Text>ჩემი დიეტა</Text>
      </View>
      <ScrollView style={styles.mainPageContent}>
        <CategoryItem icon={CatIcon} name={"კვება"} spent={850} budget={1250} status={"მიმდინარე"} />
        <CategoryItem icon={Transport} name={"ტრანსპორტი"} spent={300} budget={300} status={"შესრულებული"} />
        <CategoryItem icon={FunIco} name={"გართობა"} spent={320} budget={300} status={"გადაცდენილი"} />
        <CategoryItem icon={Pay} name={"გადასახადები"} spent={850} budget={900} status={"მიმდინარე"} />
        <CategoryItem icon={Grocery} name={"საყიდლები"} spent={500} budget={1500} status={"მიმდინარე"} />
        <CategoryItem icon={CosmeticIco} name={"თავის მოვლა"} spent={300} budget={700} status={"მიმდინარე"} />
        <CategoryItem icon={Sakomisio} name={"საკომისიო"} spent={300} budget={700} status={"მიმდინარე"} />
        <CategoryItem icon={Health} name={"ჯანმრთელობა"} spent={300} budget={700} status={"მიმდინარე"} />
      </ScrollView>
      <AppNavigation navigation={navigation} />
    </View>
  );
}

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  mainPageContainer: {
    width: screenWidth,
    height: screenHeight,
    position: "relative",
    alignItems: "center",
  },
  mainPageHeader: {
    width: 150,
    height: 40,
    // opacity: 0.7,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 180
  },
  mainPageIMG: {
    width: screenWidth,
    position: "relative",
    top: 0,
  },
  mainPageContent: {
    position: "absolute",
    top: 220,
    bottom: 50,
    paddingTop: 20,
    paddingBottom: 20,
    width: screenWidth,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  }
});
