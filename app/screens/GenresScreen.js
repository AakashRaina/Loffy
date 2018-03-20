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

import PageContentContainer from "../components/PageContentContainer"
class GenresScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <PageContentContainer
          url="https://api.themoviedb.org/3/genre/movie/list?api_key=8b51b25335ed94c74571c812120a6c73"
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