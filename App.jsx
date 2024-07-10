import * as React from 'react';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
enableScreens();

import Home from './src/pages/Home.jsx';
import Login from './src/pages/Login.jsx';
import Releases from './src/pages/Releases.jsx';
import Categories from './src/pages/Categories.jsx';
import MonthEndClosing from './src/pages/MonthEndClosing.jsx';


const Stack = createStackNavigator();
const newStackScreen = (name, component, options = {}) => {
  return <Stack.Screen name={name} component={component} options={options} />
}

const Tab = createBottomTabNavigator();
const newTabScreen = (name, component, options = {}) => {
  return <Tab.Screen name={name} component={component} options={options} />
}


function MyTabs() {
  return (
    <Tab.Navigator>
      {newTabScreen(Home.name, Home.screen, Home.config)}
      {newTabScreen(Releases.name, Releases.screen, Releases.config)}
      {newTabScreen(Categories.name, Categories.screen, Categories.config)}
      {newTabScreen(MonthEndClosing.name, MonthEndClosing.screen, MonthEndClosing.config)}
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {newStackScreen('Main', MyTabs, { headerShown: false })}
        {newStackScreen(Login.name, Login.screen, Login.config)}
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
