//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import { FontAwesome } from "@expo/vector-icons"

// create a component
const HomeScrennTop = ({ navigation }) => {
    return (
        <ImageBackground source={{ uri: "https://source.unsplash.com/random/500x500?v1" }} style={styles.imageBackground}>
            <View style={styles.overlayView} />
            <View style={{ alignContent: "center", justifyContent: "center", width: "100%" }}>
                <Text style={styles.title}>Premium Access</Text>
                <TouchableOpacity
                    style={styles.button} >
                    <Text style={styles.buttonText}>Discover</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => { navigation.navigate("SeclectCatagory") }}
                style={styles.Backbtn} >
                <FontAwesome name="angle-left" style={styles.Backicon} />
            </TouchableOpacity>
        </ImageBackground>
    );
};

// define your styles
const styles = StyleSheet.create({
    imageBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: "space-around",
        justifyContent: "center",
        height: 300,

    },
    title: {
        color: "#fff",
        fontSize: 26,
        fontWeight: "400",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 10,
    },
    button: {

        width: 130,
        paddingVertical: 10,
        backgroundColor: "#B83AF3",
        alignSelf: "center",
        borderRadius: 50,
        marginTop: 20,

    },
    buttonText: {
        textAlign: "center",
        fontSize: 20,
        color: "#fff",
        fontWeight: "400",

    },
    overlayView: {
        height: 300,
        width: "100%",
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',

    },
    Backicon: {
        color: "#fff",
        fontSize: 50,
    },
    Backbtn: {
        position: "absolute",
        top: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 10,
        left: 10,
    }
});

//make this component available to the app
export default HomeScrennTop;




/test-ilias-blabla/
    / testblabla /
    /test2611/
    / en / testblabla - engels /
    /en/test2611 /
    /mokumflex-reserveren-landelijk-noord/
    / mokumflex - reserveren - driemond /
    /en/mokumflex - reservation - landelijk - noord /
    /en/mokumflex - reservation - driemond /
    /reserveren/
    / en / make - a - reservation /
    /vluchtnummer/
    / madame /
    /rolls/
    / rolstoeltaxi - reserveren /
    /en/wheelchair - taxi - reservation /
    /taxi-amsterdam/
    / rotterdam - taxi /
    /en/number /
    /covid-taxi-reserveren/
    / en / covid - taxi - reservation /
    /vaxi-taxi/
    / en / vaxi - taxi - reservation /
    /vrouwentaxi-reserveren/
    / en / female - taxi - reservation /