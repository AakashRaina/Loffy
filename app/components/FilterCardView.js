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
import { API_KEY } from "../CONSTANTS";

class FilterCardView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            genres: this.props.itemList,
            yearPicker: [],
            genrePicker: [],
            selectedYear: "",
            selectedGenre: "",
            selectedRating: 0,
            movieList: [],
        };
    }

    years = [];

    // picker items //
    yearItems = [];
    genreItems = [];

    componentDidMount() {

        let currentYear = (new Date()).getFullYear();
        let startYear = currentYear - 10;

        let j = 0;
        while (j <= 10) {
            this.years[j] = startYear;
            startYear++;
            j++;
        }

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
    }

    getfilterMovies() {

        urlString =
            "https://api.themoviedb.org/3/discover/movie?api_key=" + API_KEY + "&language=en-US" +
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
                this.props.navigation.navigate(this.props.navigateTo, { movieList: this.state.movieList })
            }))
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.filterview}>

                    {/* Year Dropdown */}
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

                    {/* Genre Dropdown */}
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

                    {/* Rating Input */}
                    <View style={styles.votesview}>
                        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Rating</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Only Numeric"
                            keyboardType="numeric"
                            onChangeText={text => this.setState({ selectedRating: text })}
                        />
                    </View>

                    {/* Search Button  */}
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
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "space-around"
    },
    filterview: {
        flex: 4 / 5,
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
        height: 30,
        width: 130
    },
    pickerstyle: {
        width: 135
    }
});

export default withNavigation(FilterCardView);