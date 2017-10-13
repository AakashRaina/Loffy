import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View style={styles.headcontainer} />;
  }
}

const styles = StyleSheet.create({
  headcontainer: {
    flex: 1 / 5,
    backgroundColor: "#ff8c00"
  }
});
