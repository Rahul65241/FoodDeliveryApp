import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function About({ navigation }) {
    return (
        <LinearGradient
            colors={['#2E2B69', 'orange', 'red', '#2A12CC']}
            style={styles.linearGradient}>
            <ScrollView>
                <Text style={styles.head}>ABOUT US</Text>
                <Text style={styles.menu}>
                    Welcome to food delivery App.Here you can can order your favourite 
                    food from wide range of selection and at very affordable price.
                     Get the best deal from your home.Don't miss this chance to get best offer.

                </Text>
            </ScrollView>
        </LinearGradient >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    linearGradient: {
        flex: 1
    },
    head: {
        fontSize: 25,
        color: 'white',
        marginBottom: 25,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 70,
        textAlign: 'center'
    },
    menu: {
        fontSize: 15,
        width:'90%',
        textAlign:'justify',
        color: 'white',
        marginBottom: 25,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 30
    }

});
