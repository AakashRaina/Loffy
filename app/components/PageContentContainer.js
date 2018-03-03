import React from "react";
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    NetInfo,
    ActivityIndicator
} from "react-native";
import Header from "../components/Header";
import DisplayList from "../components/DisplayList"
import Loader from "../components/Loader"


export default class PageContentContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            connectionType: "",
            responseData: []
        };
    }

    handleFirstConnectivityChange = (connectionInfo) => {
        this.setState({ connectionType: connectionInfo.type }, function () {
            console.log(this.state.connectionType)
        })
    }

    componentWillMount() {
        NetInfo.addEventListener(
            'connectionChange',
            this.handleFirstConnectivityChange
        );
    }

    componentWillUnmount() {
        NetInfo.removeEventListener(
            'connectionChange',
            this.handleFirstConnectivityChange
        );
    }

    componentDidMount() {
        fetch(this.props.url)
            .then(response => response.json())
            .then(data => this.setState({ responseData: data[this.props.responseDataKey] }))
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <View style={styles.header}>
                    {this.props.children[0]}
                </View>
                <View style={styles.genreslist}>
                    {this.state.responseData.length > 0 ? React.cloneElement(this.props.children[1], { itemList: this.state.responseData, navigateTo: this.props.navigateTo, titleKey: this.props.titleKey })
                        :
                        <Loader />
                    }
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
    }
});
