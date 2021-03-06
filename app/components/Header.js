import React from "react";
import { Text, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import OfflineNotice from "./OfflineNotice";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.headcontainer}>
        <OfflineNotice />
        <Text style={styles.headerText}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headcontainer: {
    flex: 1,
    backgroundColor: "#dc143c",
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

Header.propTypes = {
  title: PropTypes.string.isRequired
};
