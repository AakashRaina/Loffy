import React from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  NetInfo
} from "react-native";
import Header from "../components/Header";
import DisplayList from "../components/DisplayList"

import PageContentContainer from "../components/PageContentContainer"
export default class GenresScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      connectionType: "",
      genres: []
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
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=8b51b25335ed94c74571c812120a6c73")
      .then(response => response.json())
      .then(data => this.setState({ genres: data.genres }))
  }

  render() {
    return (
      <View style={styles.container}>
        <PageContentContainer>
          <Header title="Loffy" />
          <DisplayList itemList={this.state.genres} navigateTo="genremovies" titleKey="name" />
        </PageContentContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
