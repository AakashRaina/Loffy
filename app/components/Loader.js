import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';

const Loader = props => {

    return (
        <View style={styles.container}>
            <ActivityIndicator size={50} color="#dc143c" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
})

export default Loader;