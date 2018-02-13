import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { List, ListItem } from "react-native-elements";

const DisplayList = props => {

    return (
        <View style={styles.container}>
            <FlatList
                data={props.itemList}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={(item) => props.onItemPress(item)}
                    >
                        <ListItem
                            key={item.id}
                            title={item.name}
                            chevronColor="#ff8c00"
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default DisplayList;

