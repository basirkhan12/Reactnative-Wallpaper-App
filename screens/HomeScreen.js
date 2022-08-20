//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import HomeScrennTop from '../components/homeScreeComponents/HomeScreenTop';
import WallpaperCollection from '../components/homeScreeComponents/WallpaperCollection';
import FontAwesome from '@expo/vector-icons';
import axios from 'axios';
import { useSelector } from 'react-redux';

// create a component

const HomeScreen = ({ navigation }) => {
    const [data, setData] = React.useState([]);
    //const data2 = useSelector((store) => store.selectCatagory.items)




    axios.get('https://api.unsplash.com/collections/?client_id=RVkldM1-S7LjslTMp5TDwDyaxEdrnmc47jRWk0Cy7gE').then(responses => {

        setData(responses);
    }
    ).catch(err => {
        alert(err)
    })




    return (
        <View style={styles.mainContainer}>
            <HomeScrennTop navigation={navigation} />
            <View style={styles.secondRow}>

                <FlatList
                    data={data.data}
                    renderItem={({ item }) => <WallpaperCollection data={item} navigation={navigation} />} />


            </View>


        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    secondRow: {
        flex: 1,
    }


});

//make this component available to the app
export default HomeScreen;
