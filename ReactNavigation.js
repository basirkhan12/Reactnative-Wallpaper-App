//import liraries
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SelectCatagoryScreen from './screens/SelectCatgoryScreen';
import SingleWallpaperScreen from './screens/SingleWallpaperScreen';
import SplashPage from './screens/SplashPage';

// create a component
const ReactNavigation = () => {
    const Stack = createNativeStackNavigator()
    //const Stack = createDrawerNavigator();
    const screenOption = {
        headerShown: false
    }
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='SeclectCatagory'
                screenOptions={screenOption}
            >
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashPage}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="SeclectCatagory"
                    component={SelectCatagoryScreen}
                />
                <Stack.Screen
                    name="SingleWallpaper"
                    component={SingleWallpaperScreen} />


            </Stack.Navigator>

        </NavigationContainer>
    );
};

// define your styles


//make this component available to the app
export default ReactNavigation;
