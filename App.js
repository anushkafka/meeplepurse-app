import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import GameList from "./src/components/GameList";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Search" />
        <GameList />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
