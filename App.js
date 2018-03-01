import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import Header from "./src/components/Header";
import GameList from "./src/components/GameList";

import {} from "./src/reducers";

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyArkbu5UGAZN2iN9FE_iclQHeIiioRfzdY",
      authDomain: "bounce-app1.firebaseapp.com",
      databaseURL: "https://bounce-app1.firebaseio.com",
      projectId: "bounce-app1",
      storageBucket: "bounce-app1.appspot.com",
      messagingSenderId: "938832348564"
    });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Add Game" />
        <GameList />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
