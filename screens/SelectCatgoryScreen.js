//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import SelectCatagoryItem from '../components/select_catagories_components/SelectCatagory';
import { catagoryData } from '../dummyData/DummyData';
import axios from "axios";
// create a component

const SelectCatagoryScreen = ({ navigation }) => {
    const [data, setData] = React.useState([]);

    axios.get("https://api.unsplash.com/collections?client_id=RVkldM1-S7LjslTMp5TDwDyaxEdrnmc47jRWk0Cy7gE").then(res => {
        //console.log(res)
        setData(res);
    }).catch(err => {
        alert(err)
    }).finally(() => {
        // console.log("finally")
    })

    return (
        <SafeAreaView style={styles.safeAreacontainer}>
            <Text style={styles.title}>What kind of category are you
                interested in?</Text>
            <View style={styles.container}>
                <FlatList
                    data={data.data}
                    numColumns={3}
                    renderItem={(item) => <SelectCatagoryItem item={item.item} />}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {

                    navigation.navigate('Home');
                }}
            >
                <Text style={styles.buttonText}>GET STARTED</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    safeAreacontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#242148',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

        justifyContent: "center",
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#242148',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: "space-around",
        justifyContent: "center",
    },
    title: {
        color: "#fff",
        fontSize: 26,
        fontWeight: "400",
        textAlign: "center",
        marginTop: 80,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#B83AF3",
        width: "100%",
        paddingVertical: 10

    },
    buttonText: {
        textAlign: "center",
        fontSize: 20,
        color: "#fff",
        fontWeight: "400",

    }

});

//make this component available to the app
export default SelectCatagoryScreen;
