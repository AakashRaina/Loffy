import React, { PureComponent } from 'react';
import { View, Text, NetInfo, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

function MiniOfflineSign() {
    return (
        <View style={styles.offlineContainer}>
            <Text style={styles.offlineText}>No Internet Connection</Text>
        </View>
    );
}

class OfflineNotice extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isConnected: true
        };
    }

    componentDidMount() {
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
    }

    handleConnectivityChange = isConnected => {
        if (isConnected) {
            this.setState({ isConnected }, function () {
                console.log(this.state.isConnected)
            });
        } else {
            this.setState({ isConnected }, function () {
                console.log(this.state.isConnected)
            });
        }
    };

    render() {
        if (!this.state.isConnected) {
            return <MiniOfflineSign />;
        }
        return null;
    }
}

const styles = StyleSheet.create({
    offlineContainer: {
        backgroundColor: '#0000ff',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    offlineText: { color: '#fff' }
});

export default OfflineNotice;