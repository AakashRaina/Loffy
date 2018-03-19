import React from "react";
import {
  Text,
  View,
  StyleSheet,
  NetInfo,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
  ToastAndroid
} from "react-native";
import Header from "../components/Header";
import CardView from "../components/CardView.js";
import {
  Card,
  CardItem,
  Thumbnail,
  Button,
  Left,
  Right,
  Body
} from "native-base";
import { Icon, Rating } from "react-native-elements";
import Toast, { DURATION } from 'react-native-easy-toast';

export default class MovieInfoScreen extends React.Component {
  constructor(props) {
    super(props);

    const { params } = this.props.navigation.state;

    this.state = {
      movie: params.item
    };

    this.bookmarked = this.bookmarked.bind(this);
  }

  bookmarked(movie) {
    this.storeMovie(movie);
  }

  async storeMovie(movie) {

    let keysArray = [];
    try {
      await AsyncStorage.getAllKeys()
        .then((keys) => keysArray = keys)
        .then(() => console.log(keysArray))

    } catch (error) {
      console.log(error);
    }

    // if not found, bookmark it //
    if (keysArray.indexOf(movie.id.toString()) === -1) {
      try {
        await AsyncStorage.setItem(movie.id.toString(), JSON.stringify(movie), function () {
          ToastAndroid.show('Bookmarked', ToastAndroid.SHORT);
        });
      } catch (error) {
        console.log(error);
      }
    }
    else {
      await AsyncStorage.removeItem(movie.id.toString())
        .then(() => {
          ToastAndroid.show('Removed Bookmark', ToastAndroid.SHORT);
        })
    }


  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header title={this.state.movie.title} />
        </View>

        <View style={styles.cardcontainer}>
          <CardView {...this.state} bookmarkClick={this.bookmarked} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1 / 5
  },
  cardcontainer: {
    flex: 4 / 5
  },
  ratingtext: {
    fontSize: 20,
    padding: 5
  }
});
