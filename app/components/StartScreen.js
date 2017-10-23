import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
const { height, width } = Dimensions.get("window");

export default class StartScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  navigateToHome() {
    this.props.navigation.navigate("home");
  }

  // componentDidMount(){
  //   setTimeout(this.navigateToHome(), 10000)
  // }

  render() {
    return (
      <TouchableOpacity
        style={styles.touchable}
        activeOpacity={0.8}
        onPress={() => this.navigateToHome()}
      >
        <View style={styles.container}>
          <Image source={require("../../assets/loffy.png")} />
          <Text style={styles.text}>Loffy</Text>
          <TouchableOpacity>
            <Text style={styles.credits}>Credits</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 160
  },
  text: {
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 45,
    paddingTop: 20
  },
  touchable: {
    flex: 1
  },
  credits: {
    fontSize: 11,
    marginTop: 200
  }
});
