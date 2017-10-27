import React from "react";
import {
  Text,
  View,
  StyleSheet,
  NetInfo,
  FlatList,
  TouchableOpacity
} from "react-native";
import Header from "./Header";
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

export default class MovieInfo extends React.Component {
  constructor(props) {
    super(props);

    const { params } = this.props.navigation.state;

    this.state = {
      movie: params.movie
    };
  }

  componentDidMount() {
    console.log(this.state.movie);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title={this.state.movie.title} />
        <View style={styles.cardcontainer}>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Icon name="movie" />
                <Body>
                  <Text>{this.state.movie.title}</Text>
                  <Text note>{this.state.movie.release_date}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <TouchableOpacity activeOpacity={0.7}>
                  <Text>Read Overview</Text>
                </TouchableOpacity>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Rating
                  showRating
                  type="star"
                  fractions={1}
                  ratingCount={10}
                  startingValue={this.state.movie.vote_average}
                  imageSize={20}
                />
              </Left>
              <Right>
                <Icon name="bookmark" />
              </Right>
            </CardItem>
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardcontainer: {
    flex: 4 / 5
  },
  ratingtext: {
    fontSize: 20,
    padding: 5
  }
});
