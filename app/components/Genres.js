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
        <Header />

        <FlatList
          data={this.state.genres}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <ListItem key={item.id} title={item.name} />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
