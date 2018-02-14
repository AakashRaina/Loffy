import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Icon, Rating } from "react-native-elements";
import {
    Card,
    CardItem,
    Thumbnail,
    Button,
    Left,
    Right,
    Body
} from "native-base";

const CardView = props => {

    const { release_date, vote_average, overview } = props.movie

    return (
        <View style={styles.container} >
            <Card>
                <CardItem>
                    <Left>
                        <Icon name="movie" />
                        <Body>
                            <Text note>{release_date}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text style={styles.ratingtext}>{overview}</Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Left>
                        <Rating
                            showRating
                            type="star"
                            fractions={1}
                            ratingCount={10}
                            startingValue={vote_average}
                            imageSize={20}
                        />
                    </Left>
                    <Right>
                        <Icon name="bookmark" />
                    </Right>
                </CardItem>
            </Card>
        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    ratingtext: {
        fontSize: 20,
        padding: 5
    }
})

export default CardView;