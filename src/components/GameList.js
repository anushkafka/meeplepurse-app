import React, { Component } from "react";
import { Text, View } from "react-native";
import xml2js from "react-native-xml2js";

export default class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfGames: []
    };
  }

  componentWillMount = () => {
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
  };

  renderGames = () => {
    if (this.state.listOfGames.length === 0) {
      return <Text>Loading...</Text>;
    } else {
      return this.state.listOfGames.map((gameObject, index) => (
        <Text key={index}>{gameObject.name[0]._}</Text>
      ));
    }
  };

  render() {
    return <View>{this.renderGames()}</View>;
  }
}
