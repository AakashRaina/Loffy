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



class FilterScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <PageContentContainer
          url="https://api.themoviedb.org/3/genre/movie/list?api_key=8b51b25335ed94c74571c812120a6c73"
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