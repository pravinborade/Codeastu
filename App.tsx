/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import {ActivityIndicator, SafeAreaView, Text} from 'react-native';

import {Provider, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RecipesScreen from './src/screens/RecipesScreen';
import store from './src/redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginSuccess, logout} from './src/redux/actions';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const checkLoginStatus = async () => {
    const userData = await AsyncStorage.getItem('user');
    if (userData) {
      setLoggedIn(true);
      setLoading(false);
      store.dispatch(loginSuccess(JSON.parse(userData)));
    } else {
      setLoggedIn(false);
      setLoading(false);
      store.dispatch(logout());
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={isLoggedIn ? 'Recipes' : 'Login'}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Recipes" component={RecipesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
