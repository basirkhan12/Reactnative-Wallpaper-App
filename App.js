import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
//import 'react-native-gesture-handler';
import ReactNavigation from './ReactNavigation';
import store from './store/configureStore';





export default function App() {
  const myStore = store();
  return (
    <Provider store={myStore}>
      <ReactNavigation />
    </Provider>
  );
}




