import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import GameList from "./src/components/GameList";
// import { Provider } from "react-redux";
// import { CreateStore } from "redux";
import {} from "./src/reducers";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Search" />
        <GameList />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
