//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { catagoryData } from '../../dummyData/DummyData';
import { FontAwesome } from '@expo/vector-icons';

// create a component
const WallpaperCollection = ({ data, navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.firstRow}>
                <Text style={styles.catTitle}>{data.title}</Text>
                <Text style={styles.viewall}>View All <FontAwesome name="angle-double-right" style={{ fontSize: 20 }} /></Text>
            </View>

            <FlatList
                data={data.preview_photos}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={(item) => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('SingleWallpaper', { item: item.item, id: data.id })
                    }}>
                        <View>
                            <GetImage url={item.item.urls.regular} />
                        </View>
                    </TouchableOpacity>
                )}
            />

        </View>
    );
};

const GetImage = (props, { navigation }) => {
    //console.log(props)
    return (

        <Image source={{ uri: props.url }}
            style={{ width: 130, height: 180, marginHorizontal: 5 }}
        />

    )

}
// define your styles
const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        marginTop: 2

    },
    firstRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    catTitle: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        padding: 10,
    },
    viewall: {
        fontSize: 20,
        color: "#fff",
        padding: 10,
    }
});

//make this component available to the app
export default WallpaperCollection;
