import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";

import Bookmarked from "./app/components/Bookmarked";

import StartScreen from "./app/screens/StartScreen";
import GenresScreen from "./app/screens/GenresScreen";
import FilterScreen from "./app/screens/FilterScreen";
import GenreMoviesScreen from "./app/screens/GenreMoviesScreen";
import MovieInfoScreen from './app/screens/MovieInfoScreen';
import FilteredMoviesScreen from "./app/screens/FilteredMoviesScreen"


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

const filtertab = StackNavigator({
  filters: {
    screen: FilterScreen,
    navigationOptions: {
      header: null
    }
  },
  filteredmovies: {
    screen: FilteredMoviesScreen,
    navigationOptions: {
      header: null
    }
  },
  filteredmovieinfo: {
    screen: MovieInfoScreen,
    navigationOptions: {
      header: null
    }
  },
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
      screen: filtertab,
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
