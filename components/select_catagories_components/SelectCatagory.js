//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from "@expo/vector-icons"
import UserPreference from '../../manager/UserPreference';
import { select_catagories } from '../../redux/actions/select-catagory';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';


const SelectCatagoryItem = (props) => {
    const [iconDisplay, setIconDisplay] = useState("none");
    const dispatch = useDispatch();
    const data = useSelector((store) => store.selectCatagory.items)
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    //  let { items, actions } = props;
                    dispatch(select_catagories(props.item.id));
                    // console.log(data)
                    iconDisplay == "none" ? setIconDisplay("flex") : setIconDisplay("none");
                }}>
                <Image source={{ uri: props.item.cover_photo.urls.regular }} style={[styles.image, , { backgroundColor: props.item.cover_photo.color }]} />
                <Text style={styles.title}>{props.item.title}</Text>
                <FontAwesome name="check-circle" style={[styles.icon, { display: iconDisplay }]} />
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: "#fff",
        marginHorizontal: "1.3%",
        width: "30%",
        marginVertical: 10,


    },
    title: {
        fontSize: 16,
        color: '#000',
        padding: 5
    },
    image: {
        width: "100%",
        height: 120,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    icon: {
        color: "#03DE73",
        position: "absolute",
        fontSize: 25,
        right: 4,
        top: 4,

    }
});

const mapStateToProps = state => ({
    items: state.items,
});

const ActionCreators = Object.assign(
    {},
    select_catagories,
);
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(SelectCatagoryItem);
