import React, { Component } from "react";
import { Text, View } from "react-native";
import CardSection from "./CardSection";

export default class CollectionItem extends Component {
  render() {
    return (
      <CardSection>
        <Text>{this.props.game.item.name}</Text>
      </CardSection>
    );
  }
}
