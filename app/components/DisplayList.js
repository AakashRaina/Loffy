import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { List, ListItem } from "react-native-elements";
import { withNavigation } from 'react-navigation';

const DisplayList = props => {

    return (
        <View style={styles.container} >
            <FlatList
                data={props.itemList}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => props.navigation.navigate(props.navigateTo, {
                            item: item,
                            lastScreen: props.currentScreen
                        })}
                    >
                        <ListItem
                            key={item.id}
                            title={item[props.titleKey]}
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

export default withNavigation(DisplayList);

