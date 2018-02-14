import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";

import StartScreen from "./app/screens/StartScreen";
import GenresScreen from "./app/screens/GenresScreen";
import Filter from "./app/components/Filter";
import Bookmarked from "./app/components/Bookmarked";
import GenreMoviesScreen from "./app/screens/GenreMoviesScreen";
import MovieInfoScreen from './app/screens/MovieInfoScreen';

import { Icon } from "react-native-elements";

const genretab = StackNavigator({
  genres: {
    screen: GenresScreen,
    navigationOptions: {
      header: null
    }
  },
  genremovies: {
    screen: GenreMoviesScreen,
    navigationOptions: {
      header: null
    }
  },
  movieinfo: {
    screen: MovieInfoScreen,
    navigationOptions: {
      header: null
    }
  }
});

const hometab = TabNavigator(
  {
    genres: {
      screen: genretab,
      navigationOptions: {
        header: null
      }
    },
    filter: {
      screen: Filter,
      navigationOptions: {
        header: null
      }
    },
    bookmarked: {
      screen: Bookmarked,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    tabBarPosition: "bottom",
    scrollEnabled: "true",
    tabBarOptions: {
      activeTintColor: "white",
      labelStyle: {
        fontSize: 13,
        fontWeight: "bold"
      },
      style: {
        backgroundColor: "#ff8c00"
      },
      indicatorStyle: {
        backgroundColor: "white"
      }
    }
  }
);

export const Root = StackNavigator({
  start: {
    screen: StartScreen,
    navigationOptions: {
      header: null
    }
  },
  home: {
    screen: hometab
  }
});
