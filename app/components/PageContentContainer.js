import React from "react";
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    NetInfo,
    ActivityIndicator,
    Modal,
    TouchableHighlight
} from "react-native";
import Header from "../components/Header";
import DisplayList from "../components/DisplayList"
import Loader from "../components/Loader";
import ErrorComponent from "../components/ErrorComponent";


export default class PageContentContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            connectionType: "",
            responseData: [],
            error: null,
            modalVisible: false
        };

        this.modalClose = this.modalClose.bind(this);
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
            .catch(error => this.setState({
                error: "Oops!! Something went wrong!",
                modalVisible: true
            }))
    }

    modalClose(value) {
        this.setState({ modalVisible: value })
    }

    render() {

        if (this.state.error) {
            return (
                <View>
                    <ErrorComponent
                        visibility={this.state.modalVisible}
                        errorValue={this.state.error}
                        onClose={this.modalClose}
                    />
                </View>
            )
        }
        else {
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
