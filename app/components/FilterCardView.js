import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Picker,
    PickerItem,
    TextInput
} from "react-native";

class FilterCardView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            genres: []
        };
    }

    years = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];

    // picker items //
    yearItems = [];
    genreItems = [];

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=8b51b25335ed94c74571c812120a6c73")
            .then(response => response.json())
            .then(data => this.setState({ genres: data.genres }))
    }

    componentDidUpdate() {
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
    }

    render() {
        return (
            <View style={styles.container}>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default FilterCardView;