import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import firebase from "firebase";
import CollectionItem from "./../components/CollectionItem";

export default class Collection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allGames: []
    };
  }

  componentWillMount() {
    firebase
      .database()
      .ref("users/123/savedGames")
      .on("value", snapshot => {
        const allGames = snapshot.val();
        // const gamesArray = Object.values(allGames);

        this.setState({
          allGames: Object.values(allGames)
        });
      });
  }

  renderRow = game => {
    return (
      <CollectionItem
        // selected={game.item.$.objectid === this.state.selectedGameId}
        // onPress={this.handleListItemPress}
        game={game}
      />
    );
  };

  render() {
    return (
      <View>
        <FlatList data={this.state.allGames} renderItem={this.renderRow} />
      </View>
    );
  }
}
