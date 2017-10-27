import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Picker,
  PickerItem,
  TextInput
} from "react-native";
import Header from "./Header";
import { Icon } from "react-native-elements";

const years = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];
const genres = [];

export default class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedYear: " ",
      selectedGenre: " ",
      selectedRating: 0,
      movieList: []
    };
  }

  // picker items //
  yearItems = [];
  genreItems = [];

  // Get the genres from the api endpoint //
  async getGenres() {
    response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=8b51b25335ed94c74571c812120a6c73"
    );

    responseJson = await response.json();
    genres = responseJson.genres;

    // To just get the genre names for genre picker items //
    for (var i = 0; i < genres.length; i++) {
      s = genres[i];

      this.genreItems.push(<Picker.Item key={i} value={s.id} label={s.name} />);
    }
  }

  // get movie list based on filters //
  async getfilterMovies() {
    urlString =
      "https://api.themoviedb.org/3/discover/movie?api_key=8b51b25335ed94c74571c812120a6c73" +
      "&" +
      "&primary_release_year=" +
      this.state.selectedYear +
      "&" +
      "vote_count.gte=" +
      this.state.selectedRating +
      "&" +
      "with_genres=" +
      this.state.selectedGenre;

    response = await fetch(urlString);

    responseJson = await response.json();

    this.setState({
      movieList: responseJson.results
    });

    console.log(this.state.movieList);
  }

  componentWillMount() {
    this.getGenres();

    // To get the years for years picker item //
    for (var i = 0; i < years.length; i++) {
      s = years[i];
      sLabel = s.toString();
      this.yearItems.push(<Picker.Item key={i} value={s} label={sLabel} />);
    }
  }

  render() {
    return (
      <View style={styles.headcontainer}>
        <Header title="Loffy" />

        <View style={styles.filterview}>
          <View style={styles.yearview}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Year</Text>
            <Picker
              mode="dialog"
              style={styles.pickerstyle}
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
              style={styles.pickerstyle}
              selectedValue={this.state.selectedGenre}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ selectedGenre: itemValue })}
            >
              {this.genreItems}
            </Picker>
          </View>

          <View style={styles.votesview}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Rating</Text>
            <TextInput
              style={styles.input}
              placeholder={"Only Numeric"}
              keyboardType="numeric"
              onChangeText={text => this.setState({ selectedRating: text })}
            />
          </View>

          <View style={styles.button}>
            <Icon
              raised
              name="search"
              type="font-awesome"
              onPress={() => this.getfilterMovies()}
            />
          </View>
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
    flex: 1 / 3,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  genreview: {
    flex: 1 / 3,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  votesview: {
    flex: 1 / 3,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  button: {
    flex: 1 / 10,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 5
  },
  input: {
    marginTop: 10,
    paddingTop: 1,
    height: 25,
    width: 130
  },
  pickerstyle: {
    width: 135
  }
});
