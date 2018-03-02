import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import CardSection from "./CardSection";
import Card from "./Card";

export default class ListItem extends Component {
  handlePress = () => {
    this.props.onPress(this.props.game);
  };

  render() {
    const { cardSectionContainer, textStyle } = styles;

    return (
      <TouchableOpacity onPress={this.handlePress}>
        {this.props.selected ? (
          <Card game={this.props.game} />
        ) : (
          <CardSection style={cardSectionContainer}>
            <Text style={textStyle}>{this.props.game.item.name[0]._}</Text>
            {/* <Text style={textStyle}>{this.props.game.item.yearpublished}</Text> */}
          </CardSection>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = {
  cardSectionContainer: {
    flex: 1,
    flexDirection: "row"
  },
  textStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};
