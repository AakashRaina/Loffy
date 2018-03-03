import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Picker,
    PickerItem,
    TextInput
} from "react-native";
import { Icon } from "react-native-elements";
import { withNavigation } from 'react-navigation';

class FilterCardView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            genres: [],
            yearPicker: [],
            genrePicker: [],
            selectedYear: "",
            selectedGenre: "",
            selectedRating: 0,
            movieList: []
        };
    }

    years = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];

    // picker items //
    yearItems = [];
    genreItems = [];

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=8b51b25335ed94c74571c812120a6c73")
            .then(response => response.json())
            .then(data => this.setState({ genres: data.genres }, function () {

                // To get the genre names for genre picker items //
                for (var i = 0; i < this.state.genres.length; i++) {
                    s = this.state.genres[i];
                    this.genreItems.push(<Picker.Item key={i} value={s.id} label={s.name} />);
                }

                // To get the years for years picker item //
                for (var i = 0; i < this.years.length; i++) {
                    s = this.years[i];
                    sLabel = s.toString();
                    this.yearItems.push(<Picker.Item key={i} value={s} label={sLabel} />);
                }

                this.setState({
                    yearPicker: this.yearItems,
                    genrePicker: this.genreItems
                })
            }))
    }

    getfilterMovies() {

        urlString =
            "https://api.themoviedb.org/3/discover/movie?api_key=8b51b25335ed94c74571c812120a6c73&language=en-US" +
            "&" +
            "&primary_release_year=" +
            this.state.selectedYear +
            "&" +
            "vote_count.gte=" +
            this.state.selectedRating +
            "&" +
            "with_genres=" +
            this.state.selectedGenre;

        fetch(urlString)
            .then(response => response.json())
            .then(data => this.setState({
                movieList: data.results
            }, function () {
                this.props.navigation.navigate("filteredmovies", { movieList: this.state.movieList })
            }))
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>Year</Text>
                    <Picker
                        mode="dialog"
                        selectedValue={this.state.selectedYear}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ selectedYear: itemValue })}
                    >
                        {this.state.yearPicker}
                    </Picker>
                </View>

                <View>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>Genre</Text>
                    <Picker
                        mode="dialog"
                        selectedValue={this.state.selectedGenre}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ selectedGenre: itemValue })}
                    >
                        {this.state.genrePicker}
                    </Picker>
                </View>

                <View>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>Rating</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Only Numeric"
                        keyboardType="numeric"
                        onChangeText={text => this.setState({ selectedRating: text })}
                    />
                </View>

                <View>
                    <Icon
                        raised
                        name="search"
                        type="font-awesome"
                        onPress={() => this.getfilterMovies()}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-around'
    }
});

export default withNavigation(FilterCardView);