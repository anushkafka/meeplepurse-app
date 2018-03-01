import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  AlertIOS
} from "react-native";
import firebase from "firebase";
import ProgressCircle from "react-native-progress-circle";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      budget: "0",
      totalSpending: 0
    };
  }

  componentWillMount() {
    firebase
      .database()
      .ref("users/123/savedGames")
      .on("value", snapshot => {
        const allGames = snapshot.val();

        const gamesArray = Object.values(allGames);

        let totalSpending = 0;

        gamesArray.forEach(game => {
          totalSpending = Number(totalSpending) + Number(game.price);
        });

        this.setState({
          totalSpending: totalSpending
        });
      });

    firebase
      .database()
      .ref("users/123/budget")
      .on("value", snapshot => {
        this.setState({
          budget: snapshot.val() || "0"
        });
      });
  }

  handleEnterBudgetPress = () => {
    AlertIOS.prompt("Enter you budget", null, budget => {
      // save to firebase
      firebase
        .database()
        .ref("users/123/budget")
        .set(budget)
        .then(console.log)
        .catch(console.log);

      this.setState({
        budget: budget
      });
    });
  };

  render() {
    let percent = 0;

    if (Number(this.state.budget) > 0 && this.state.totalSpending > 0) {
      percent = this.state.totalSpending / this.state.budget * 100;
    }

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Your current budget is ${this.state.budget}</Text>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: "lightseagreen",
            marginBottom: 10
          }}
          onPress={this.handleEnterBudgetPress}
        >
          <Text style={{ fontSize: 16, color: "white" }}>Edit Budget</Text>
        </TouchableOpacity>
        <ProgressCircle
          percent={percent}
          radius={100}
          borderWidth={15}
          color="lightseagreen"
          shadowColor="#999"
          bgColor="#fff"
        >
          <Text style={{ fontSize: 18 }}>{percent.toFixed(0)}%</Text>
        </ProgressCircle>
        <View />
      </View>
    );
  }
}
