import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.headcontainer}>
        <Text style={styles.headerText}>Loffy</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headcontainer: {
    flex: 1 / 5,
    backgroundColor: "#ff8c00",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    color: "white",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 25
  }
});
