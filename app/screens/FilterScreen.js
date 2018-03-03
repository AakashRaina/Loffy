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
import { Icon } from "react-native-elements";



class FilterScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header title="Filter" />
        </View>
        <View style={styles.filter}>
          <FilterCardView />
        </View>
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