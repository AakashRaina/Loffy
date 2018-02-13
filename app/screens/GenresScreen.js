import React from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar
} from "react-native";
import Header from "../components/Header";
import DisplayList from "../components/DisplayList"

export default class GenresScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isConnected: "",
      genres: []
    };

    this.navigateToGenreMovies = this.navigateToGenreMovies.bind(this);
  }

  async getGenres() {
    response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=8b51b25335ed94c74571c812120a6c73"
    );

    responseJson = await response.json();
    this.setState({
      genres: responseJson.genres
    });
  }

  navigateToGenreMovies(item) {
    this.props.navigation.navigate("genremovies", {
      genreId: item.id,
      genreName: item.name
    });
  }

  componentDidMount() {
    this.getGenres();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={styles.header}>
          <Header title="Loffy" />
        </View>
        <View style={styles.genreslist}>
          <DisplayList itemList={this.state.genres} onItemPress={this.navigateToGenreMovies} />
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
  genreslist: {
    flex: 4 / 5
  }
});
