import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";

import StartScreen from "./app/components/StartScreen";
import Genres from "./app/components/Genres";
import Filter from "./app/components/Filter";
import Bookmarked from "./app/components/Bookmarked";

import { Icon } from "react-native-elements";

const hometab = TabNavigator(
  {
    genres: {
      screen: Genres,
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
