import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Modal,
    TouchableHighlight
} from "react-native";

class ErrorComponent extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Modal
                animationType="fade"
                transparent
                visible={this.props.visibility}
                onRequestClose={() => {
                    alert('Check your Internet Connection');
                }}>
                <View style={styles.modalContainer}>

                    <View style={styles.errorContainer}><Text style={styles.Text}>{this.props.errorValue}</Text></View>

                    <TouchableHighlight
                        onPress={() => this.props.onClose(!this.props.visibility)}>
                        <View style={styles.close}><Text style={styles.Text}>close</Text></View>
                    </TouchableHighlight>

                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 200,
        marginBottom: 400,
    },
    errorContainer: {
        flex: 1 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    close: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text: {
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default ErrorComponent;