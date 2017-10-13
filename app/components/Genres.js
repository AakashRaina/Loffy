import React from "react";
import { Text, View, StyleSheet, NetInfo } from "react-native";

import { Icon } from "react-native-elements";
import Header from "./Header";

export default class Genres extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isConnected: ""
    };
  }

  // Event handler for NetInfo //
  handleConnectionChange = connectionInfo => {
    this.setState({
      isConnected: connectionInfo.type
    });
    console.log(connectionInfo.type);
  };

  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this.handleConnectionChange
    );
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this.handleConnectionChange
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.isConnected}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey"
  }
});
