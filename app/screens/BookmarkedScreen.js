import React from "react";
import { Text, View, StyleSheet, AsyncStorage } from "react-native";
import BookmarkPageContainer from "../components/BookmarkPageContainer";
import Header from "../components/Header";

class BookmarkedScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <BookmarkPageContainer>
          <Header title="Bookmarks" />
        </BookmarkPageContainer>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BookmarkedScreen;
