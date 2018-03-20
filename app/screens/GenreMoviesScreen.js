import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import Header from "../components/Header";
import DisplayList from "../components/DisplayList"
import { List, ListItem } from "react-native-elements";
import PageContentContainer from "../components/PageContentContainer";
import { API_KEY } from "../CONSTANTS";

export default class GenreMoviesScreen extends React.Component {
  constructor(props) {
    super(props);

    const { params } = this.props.navigation.state;

    this.state = {
      genre: params.item,
      url: ""
    };
  }

  componentDidMount() {

    const fullUrl =
      "https://api.themoviedb.org/3/genre/" +
      this.state.genre.id +
      "/movies?api_key=" + API_KEY;

    this.setState({ url: fullUrl });
  }

  render() {
    return (
      this.state.url.length > 0 && (<View style={styles.container}>
        <PageContentContainer
          url={this.state.url}
          responseDataKey="results"
          navigateTo="movieinfo"
          titleKey="original_title"
        >
          <Header title={this.state.genre.name} />
          <DisplayList />
        </PageContentContainer>
      </View>)
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
