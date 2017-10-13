/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
const { height, width } = Dimensions.get("window");

export default class App extends Component<{}> {
  render() {
    return (
      <TouchableOpacity style={styles.touchable}
        activeOpacity={.8}
      >
        <View style={styles.container}>
          <Image source={require("./assets/loffy.png")} />
          <Text style={styles.text}>Loffy</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 45,
    paddingTop: 20
  },
  touchable: {
    flex: 1
  }
});
