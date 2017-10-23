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

export default class Genres extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isConnected: "",
      genres: []
    };
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

  // Event handler for NetInfo //
  handleConnectionChange = connectionInfo => {
    this.setState({
      isConnected: connectionInfo.type
    });
    console.log(connectionInfo.type);
  };

  navigateToGenreMovies(item) {
    this.props.navigation.navigate("genremovies", {
      genreId: item.id,
      genreName: item.name
    });
  }

  componentWillMount() {
    this.getGenres();
  }

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
        <Header title="Loffy" />
        <View style={styles.genreslist}>
          <FlatList
            data={this.state.genres}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.navigateToGenreMovies(item)}
              >
                <ListItem
                  key={item.id}
                  title={item.name}
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
  genreslist: {
    flex: 4 / 5
  }
});
