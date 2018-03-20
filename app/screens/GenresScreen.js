import React from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  NetInfo
} from "react-native";
import Header from "../components/Header";
import DisplayList from "../components/DisplayList"
import { API_KEY } from "../CONSTANTS";

import PageContentContainer from "../components/PageContentContainer"
class GenresScreen extends React.Component {

  render() {

    fullUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY
    return (
      <View style={styles.container}>
        <PageContentContainer
          url={fullUrl}
          responseDataKey="genres"
          navigateTo="genremovies"
          titleKey="name"
        >
          <Header title="Genres" />
          <DisplayList />
        </PageContentContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GenresScreen;