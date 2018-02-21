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
        <PageContentContainer navigateTo="genremovies" titleKey="name">
          <Header title="Loffy" />
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