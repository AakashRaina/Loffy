import React from "react";
import {
  Text,
  View,
  StyleSheet,
  NetInfo,
  FlatList,
  TouchableOpacity
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

export default class MovieInfoScreen extends React.Component {
  constructor(props) {
    super(props);

    const { params } = this.props.navigation.state;

    this.state = {
      movie: params.item
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header title={this.state.movie.title} />
        </View>

        <View style={styles.cardcontainer}>
          <CardView {...this.state} />
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
