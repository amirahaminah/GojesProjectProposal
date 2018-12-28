//App.js
import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";
import CalcScreen from "./CalcScreen";
import FoodListScreen from "./FoodListScreen";
import DietTipsScreen from "./DietTipsScreen";
import PedometerScreen from "./PedometerScreen";
import FoodScannerScreen from "./FoodScannerScreen";




const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Calculate: CalcScreen,
    FoodList: FoodListScreen,
    DietTips: DietTipsScreen,
    Pedometer: PedometerScreen,
    FoodScanner: FoodScannerScreen
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);


export default class App extends Component {
  render() {
    return (
       <AppContainer />
    
    );
  }
}





