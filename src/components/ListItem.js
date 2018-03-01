import React, { Component } from "react";
import { Text } from "react-native";
import CardSection from "./CardSection";

export default class ListItem extends Component {
  render() {
    return (
      <CardSection>
        <Text>{this.props.children.item.name[0]._}</Text>
        <Text>{this.props.children.item.yearpublished}</Text>
      </CardSection>
    );
  }
}

const style = {
  cardSectionContainer: {
    flex: 1,
    flexDirection: "row"
  }
};
