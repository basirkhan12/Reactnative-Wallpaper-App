//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, NativeModules } from 'react-native';
import axios from 'axios';
import Swiper from 'react-native-swiper';
import ManageWallpaper, { TYPE } from 'react-native-manage-wallpaper';


// create a component
const SingleWallpaperScreen = ({ route, navigation }) => {
    const [imageData, setImageData] = useState([]);
    const { item, id } = route.params;

    useEffect(() => {
        axios.get(`https://api.unsplash.com/collections/${id}/photos?client_id=RVkldM1-S7LjslTMp5TDwDyaxEdrnmc47jRWk0Cy7gE`).then(responses => {
            setImageData(responses.data)
            console.log("call")
            return;
        }).catch(err => {
            alert(err)
        })
    }, [])


    return (
        <Swiper loop={false} showsPagination={false}>


            {
                imageData.map(function (item, index) {
                    return (
                        <WallpaperList key={index} item={item} />
                    )
                })
            }


        </Swiper>
    );
};

const WallpaperList = ({ navigation, index, item }) => {
    const [isLoading, setIsLoading] = useState("flex");

    return (
        <View key={index} style={styles.container}>
            <ActivityIndicator size="large" style={{ display: isLoading, position: "absolute", top: "50%" }} />
            <Image
                onLoad={() => {
                    setIsLoading("none")
                    /*  ManageWallpaper.setWallpaper(
                          {
                              uri: 'https://i.pinimg.com/originals/76/5e/1d/765e1dc8cb1cc115fb3b0b39a895fdeb.jpg',
                          },
                          this._callback,
                          TYPE.HOME,
                      );*/

                }}
                source={{ uri: item.urls.full }} style={{
                    height: "100%", width: "100%", resizeMode: 'cover'
                }} />
        </View>)
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default SingleWallpaperScreen;
