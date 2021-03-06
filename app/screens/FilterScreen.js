import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Picker,
  PickerItem,
  TextInput
} from "react-native";
import Header from "../components/Header";
import FilterCardView from "../components/FilterCardView";
import PageContentContainer from "../components/PageContentContainer"
import { Icon } from "react-native-elements";
import { API_KEY } from "../CONSTANTS";



class FilterScreen extends React.Component {

  render() {
    fullUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY;
    return (
      <View style={styles.container}>
        <PageContentContainer
          url={fullUrl}
          responseDataKey="genres"
          navigateTo="filteredmovies"
        >
          <Header title="Filter" />
          <FilterCardView />
        </PageContentContainer>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    flex: 1 / 5
  },
  filter: {
    flex: 4 / 5
  }
});

export default FilterScreen;