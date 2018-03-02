import React, { Component } from "react";
import {} from "react-native";
import { Scene, Router, Tabs } from "react-native-router-flux";
import Profile from "./../pages/Profile";
import AddGame from "./../pages/AddGame";
import Collection from "./../pages/Collection";

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ flex: 1 }}>
      <Scene key="root" tabs={true} labelStyle={{ fontSize: 16, padding: 12 }}>
        <Scene key="addGame" component={AddGame} title="Add Game" initial />
        <Scene key="profile" component={Profile} title="Profile" />
        <Scene key="collection" component={Collection} title="Collection" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
