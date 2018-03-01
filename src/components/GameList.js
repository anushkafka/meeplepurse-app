import React, { Component } from "react";
import {
  Text,
  View,
  ListView,
  FlatList,
  TextInput,
  TouchableOpacity
} from "react-native";
import xml2js from "react-native-xml2js";
import ListItem from "./ListItem";

export default class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfGames: [],
      selectedGameId: null,
      searchItem: ""
    };
  }

  componentWillMount = () => {
    // // fetch data from API
    // var parser = new xml2js.Parser();
    // fetch(
    //   `https://www.boardgamegeek.com/xmlapi/search?search=${encodeURIComponent(
    //     this.state.searchItem
    //   )}`
    // ).then(response => {
    //   parser.parseString(response._bodyText, (err, result) => {
    //     this.setState({
    //       listOfGames: result.boardgames.boardgame
    //     });
    //   });
    // });

    // feed result to listview DS
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.state.listOfGames);
  };

  handleListItemPress = game => {
    this.setState({
      selectedGameId: game.item.$.objectid
    });
  };

  renderRow = game => {
    return (
      <ListItem
        selected={game.item.$.objectid === this.state.selectedGameId}
        onPress={this.handleListItemPress}
        game={game}
      />
    );
  };

  onSearchPress = () => {
    // fetch data from API
    var parser = new xml2js.Parser();
    fetch(
      `https://www.boardgamegeek.com/xmlapi/search?search=${encodeURIComponent(
        this.state.searchItem
      )}`
    ).then(response => {
      parser.parseString(response._bodyText, (err, result) => {
        this.setState({
          listOfGames: result.boardgames.boardgame
        });
      });
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row", maxHeight: 50 }}>
          <TextInput
            style={{
              backgroundColor: "lightgrey",
              flex: 2,
              padding: 5
            }}
            placeholder="Search game..."
            onChangeText={text => this.setState({ searchItem: text })}
            value={this.state.searchItem}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "lightgrey",
              padding: 5,
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={this.onSearchPress}
          >
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexGrow: 1 }}>
          <FlatList
            extraData={this.state.selectedGameId}
            data={this.state.listOfGames}
            renderItem={this.renderRow}
          />
        </View>
      </View>
    );
  }
}
