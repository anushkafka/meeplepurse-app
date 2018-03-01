import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  AlertIOS
} from "react-native";
import firebase from "firebase";
import xml2js from "react-native-xml2js";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: null
    };
  }

  componentWillMount() {
    var parser = new xml2js.Parser();
    fetch(
      `https://www.boardgamegeek.com/xmlapi/boardgame/${
        this.props.game.item.$.objectid
      }`
    ).then(response => {
      parser.parseString(response._bodyText, (err, result) => {
        this.setState({
          game: result.boardgames.boardgame[0]
        });
      });
    });

    console.log(this.props.game.item.$.objectid);
  }

  handleSave = () => {
    AlertIOS.prompt("Enter purchased price", null, price => {
      // save to firebase
      console.log({
        image: this.state.game.image[0],
        name: this.state.game.name[0]._,
        price: price,
        111: this.state.game.$.objectid
      });
      firebase
        .database()
        .ref("users/123/savedGames/" + this.state.game.$.objectid)
        .set({
          image: this.state.game.image[0],
          name: this.state.game.name[0]._,
          price: price
        })
        .then(console.log)
        .catch(console.log);
    });
  };

  render() {
    if (!this.state.game) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
      <View style={styles.containerStyle}>
        <View style={styles.contentStyle}>
          <View style={styles.textContainerStyle}>
            <Text style={{ fontSize: 20, marginBottom: 5 }}>
              {this.state.game.name[0]._} {this.state.game.yearpublished[0]}
            </Text>
            <Text>{this.state.game.description[0].substr(0, 150)}...</Text>
          </View>
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: this.state.game.image[0]
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderRadius: 5,
            marginTop: 10,
            fontSize: 20,
            padding: 10,
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={this.handleSave}
        >
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerStyle: {
    padding: 10,
    backgroundColor: "lightseagreen",
    flex: 1,
    flexDirection: "column",
    color: "white"
  },
  contentStyle: {
    flex: 1,
    flexDirection: "row"
  },
  textContainerStyle: {
    flexShrink: 1
  },
  imageContainerStyle: {}
});
