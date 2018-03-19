import React from "react";
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    NetInfo,
    ActivityIndicator,
    Modal,
    TouchableHighlight,
    AsyncStorage
} from "react-native";
import Header from "../components/Header";
import DisplayList from "../components/DisplayList"
import Loader from "../components/Loader";
import ErrorComponent from "../components/ErrorComponent";

class BookmarkPageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getKeys();
    }

    async getKeys() {
        try {
            AsyncStorage.getAllKeys()
                .then(keys => this.getMovies(keys));

        } catch (error) {
            console.log(error);
        }
    }

    getMovies(keys) {

        let movies = [];
        keys.map((key) => {

            AsyncStorage.getItem(key)
                .then(item => console.log(JSON.parse(item)))
        })
    }


    render() {

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <View style={styles.header}>
                    {this.props.children}
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    header: {
        flex: 1 / 5
    },
    genreslist: {
        flex: 4 / 5
    },
    errorview: {
        flex: 1 / 2,
    }
});

export default BookmarkPageContainer;