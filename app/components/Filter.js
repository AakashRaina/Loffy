import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Picker,
  PickerItem,
  Button
} from "react-native";
import Header from "./Header";

const years = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];
const genres = [];
const rating = 0;

export default class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedYear: 2017,
      selectedGenre: "Action",
      selectedRating: 0
    };
  }

  yearItems = [];
  genreItems = [];

  async getGenres() {
    response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=8b51b25335ed94c74571c812120a6c73"
    );

    responseJson = await response.json();
    genres = responseJson.genres;

    for (var i = 0; i < genres.length; i++) {
      s = genres[i];
      console.log(s.name);
      // sLabel = s.name.toString();
      this.genreItems.push(
        <Picker.Item key={i} value={s.name} label={s.name} />
      );
    }
  }

  componentWillMount() {
    this.getGenres();

    for (var i = 0; i < years.length; i++) {
      s = years[i];
      sLabel = s.toString();
      this.yearItems.push(<Picker.Item key={i} value={s} label={sLabel} />);
    }
  }

  render() {
    return (
      <View style={styles.headcontainer}>
        <Header />
        <View style={styles.filterview}>
          <View style={styles.yearview}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Year</Text>
            <Picker
              mode="dialog"
              selectedValue={this.state.selectedYear}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ selectedYear: itemValue })}
            >
              {this.yearItems}
            </Picker>
          </View>

          <View style={styles.genreview}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Genre</Text>
            <Picker
              mode="dialog"
              selectedValue={this.state.selectedGenre}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ selectedGenre: itemValue })}
            >
              {this.genreItems}
            </Picker>
          </View>

          <View style={styles.votesview}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Rating</Text>
          </View>

          <View style={styles.button} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headcontainer: {
    flex: 1,
    backgroundColor: "white"
  },
  filterview: {
    flex: 4 / 5,
    justifyContent: "space-around"
  },
  yearview: {
    backgroundColor: "red"
  },
  genreview: {
    backgroundColor: "yellow"
  },
  votesview: {
    backgroundColor: "green"
  },
  button: {
    justifyContent: "center",
    alignItems: "center"
  }
});
