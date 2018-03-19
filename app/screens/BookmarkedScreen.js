import React from "react";
import { Text, View, StyleSheet, AsyncStorage } from "react-native";

class BookmarkedScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getKeys();
  }

  async getKeys() {
    try {
      AsyncStorage.getAllKeys()
        .then(keys => this.getMovies(keys));

    } catch (error) {
      console.log(error);
    }
  }

  getMovies(keys) {

    let movies = [];
    keys.map((key) => {

      AsyncStorage.getItem(key)
        .then(item => console.log(JSON.parse(item)))
    })
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

export default BookmarkedScreen;
