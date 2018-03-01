import React, { Component } from "react";
import {} from "react-native";
import * as firebase from "firebase";

const Firebase = () => {
  firebase.initializeApp({
    apiKey: "yourkeyhere",
    authDomain: "projName-d0c3e.firebaseapp.com",
    databaseURL: "https://projName-d0c3e.firebaseio.com",
    storageBucket: "projName-d0c3e.appspot.com"
  });
};

export default Firebase;
