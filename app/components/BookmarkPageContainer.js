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

        this.state = {
            bookmarkedMovies: [],
            keys: []
        }
    }

    componentDidMount() {
        // keep checking for the updates to storage every .5 sec //
        setInterval(() => {
            this.getKeys();
        }, 500)
    }

    async getKeys() {
        try {
            await AsyncStorage.getAllKeys()
                .then(keys => {
                    this.setState({
                        keys: keys
                    }, function () { this.getMovies(keys) })
                });

        } catch (error) {
            console.log(error);
        }
    }

    getMovies(keys) {

        let movies = [];
        keys.map((key) => {

            AsyncStorage.getItem(key)
                .then(item => movies.push(JSON.parse(item)))
                .then(() => {
                    // when all movies have been pushed, only then call setstate //
                    if (movies.length == keys.length) {
                        this.setState({
                            bookmarkedMovies: movies
                        }, function () {
                            console.log(this.state.bookmarkedMovies.length)
                        })
                    }
                })
        })
    }


    render() {
        // means 0 bookmarks //
        if (this.state.keys.length == 0) {
            return (
                <View style={styles.container}>
                    <StatusBar backgroundColor="white" barStyle="dark-content" />
                    <View style={styles.header}>
                        <Header title="Bookmarks" />
                    </View>
                    <View style={styles.msgContainer}>
                        <Text style={styles.noBookmarkMsg}>
                            No Bookmarks Yet!!
                        </Text>
                    </View>
                </View>
            )
        }
        else {
            return (
                <View style={styles.container}>
                    <StatusBar backgroundColor="white" barStyle="dark-content" />
                    <View style={styles.header}>
                        <Header title="Bookmarks" />
                    </View>
                    <View style={styles.genreslist}>
                        {/* means you have bookmarked, but it's loading from storage */}
                        {this.state.bookmarkedMovies.length > 0 ?
                            <DisplayList itemList={this.state.bookmarkedMovies}
                                titleKey="title"
                                navigateTo="bookmarkedMovieInfo"
                                currentScreen="bookmarked"
                            />
                            :
                            <Loader />
                        }
                    </View>

                </View>
            )
        }
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
    },
    msgContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noBookmarkMsg: {
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default BookmarkPageContainer;