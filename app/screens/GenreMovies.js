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
import DisplayList from "../components/DisplayList"
import { List, ListItem } from "react-native-elements";

export default class GenreMovies extends React.Component {
  constructor(props) {
    super(props);

    const { params } = this.props.navigation.state;

    this.state = {
      genre: params.item,
      genreMovies: []
    };
  }

  // Get movies specific to a genre //
  async getGenreMovies() {
    let url =
      "https://api.themoviedb.org/3/genre/" +
      this.state.genre.id +
      "/movies?api_key=8b51b25335ed94c74571c812120a6c73";

    response = await fetch(url);

    responseJson = await response.json();

    this.setState({
      genreMovies: responseJson.results
    }, function () {
      console.log(this.state.genreMovies);
    });
  }

  componentDidMount() {
    this.getGenreMovies();
  }

  navigateToMovieInfo(item) {
    this.props.navigation.navigate("movieinfo", {
      movie: item
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header title={this.state.genre.name} />
        </View>
        <View style={styles.movielist}>
          <DisplayList itemList={this.state.genreMovies} titleKey="original_title" navigateTo="movieinfo" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  header: {
    flex: 1 / 5
  },
  movielist: {
    flex: 4 / 5
  }
});
