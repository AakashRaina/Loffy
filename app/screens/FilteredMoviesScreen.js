import React from "react";
import {
    Text,
    View,
    StyleSheet
} from "react-native";
import Header from "../components/Header";
import DisplayList from "../components/DisplayList"

class FilteredMoviesScreen extends React.Component {
    constructor(props) {
        super(props);

        const { params } = this.props.navigation.state;

        this.state = {
            movieList: params.movieList
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header title="Filtered Movies" />
                </View>
                <View style={styles.movielist}>
                    <DisplayList itemList={this.state.movieList} titleKey="original_title" navigateTo="filteredmovieinfo" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1 / 4,
    },
    movielist: {
        flex: 4 / 5
    }
});

export default FilteredMoviesScreen;