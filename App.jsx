import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home.jsx';
import Login from './src/pages/Login.jsx';
import Releases from './src/pages/Releases.jsx';
import Categories from './src/pages/Categories.jsx';
import MonthEndClosing from './src/pages/MonthEndClosing.jsx';


import { enableScreens } from 'react-native-screens';
enableScreens();


const Stack = createStackNavigator();
const newScreen = (name, component, options) => {
  return <Stack.Screen name={name} component={component} options={options} />
}

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {newScreen(Home.name, Home.screen, Home.config)}
        {newScreen(Login.name, Login.screen, Login.config)}
        {newScreen(Releases.name, Releases.screen, Releases.config)}
        {newScreen(Categories.name, Categories.screen, Categories.config)}
        {newScreen(MonthEndClosing.name, MonthEndClosing.screen, MonthEndClosing.config)}
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
