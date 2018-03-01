import React, { Component } from "react";
import { Text, View, ListView, FlatList } from "react-native";
import xml2js from "react-native-xml2js";
import ListItem from "./ListItem";

export default class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfGames: []
    };
  }

  componentWillMount = () => {
    // fetch data from API
    var parser = new xml2js.Parser();
    fetch("https://www.boardgamegeek.com/xmlapi/search?search=sushi+go").then(
      response => {
        parser.parseString(response._bodyText, (err, result) => {
          this.setState({
            listOfGames: result.boardgames.boardgame
          });
        });
      }
    );

    // feed result to listview DS
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.state.listOfGames);
  };

  // renderGames = () => {
  //   if (this.state.listOfGames.length === 0) {
  //     return <Text>Loading...</Text>;
  //   } else {
  //     return this.state.listOfGames.map((gameObject, index) => (
  //       <Text key={index}>{gameObject.name[0]._}</Text>
  //     ));
  //   }
  // };

  renderRow = game => {
    return <ListItem>{game}</ListItem>;
  };

  render() {
    // return <View>{this.renderGames()}</View>;
    return (
      <FlatList data={this.state.listOfGames} renderItem={this.renderRow} />
    );
  }
}
