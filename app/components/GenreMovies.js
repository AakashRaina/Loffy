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
import { List, ListItem } from "react-native-elements";

export default class GenreMovies extends React.Component {
  constructor(props) {
    super(props);

    const { params } = this.props.navigation.state;

    this.state = {
      genreId: params.genreId,
      genreName: params.genreName,
      genreMovies: []
    };
  }

  // Get movies specific to a genre //
  async getGenreMovies() {
    let url =
      "https://api.themoviedb.org/3/genre/" +
      this.state.genreId +
      "/movies?api_key=8b51b25335ed94c74571c812120a6c73";

    response = await fetch(url);

    responseJson = await response.json();

    this.setState({
      genreMovies: responseJson.results
    });
  }

  componentDidMount() {
    this.getGenreMovies();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title={this.state.genreName} />
        <View style={styles.movielist}>
          <FlatList
            data={this.state.genreMovies}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity activeOpacity={0.8}>
                <ListItem
                  key={item.id}
                  title={item.title}
                  chevronColor="#ff8c00"
                />
              </TouchableOpacity>
            )}
          />
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
  movielist: {
    flex: 4 / 5
  }
});
