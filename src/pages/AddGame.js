import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import GameList from "./../components/GameList";
import Header from "./../components/Header";

const AddGame = () => {
  return (
    <View>
      {/* <Header headerText="Add Game" /> */}
      <GameList />
    </View>
  );
};

export default AddGame;
