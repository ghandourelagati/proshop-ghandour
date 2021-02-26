import React from "react";
import { View, Text } from "react-native";
import { Header } from "react-native-elements";
import { Zocial, Ionicons } from "@expo/vector-icons";

const MyHeader = () => {
  return (
    <Header
      leftComponent={
        <Zocial reverse raised name="cart" size={24} color="white" />
      }
      centerComponent={{ text: "PROSHOP", style: { color: "#fff" } }}
      rightComponent={
        <Ionicons reverse raised name="person" size={24} color="white" />
      }
    />
  );
};

export default MyHeader;
