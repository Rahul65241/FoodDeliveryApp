import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, Dimensions, TextInput, TouchableOpacity, Pressable } from 'react-native';
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
            <Pressable onPress={() => navigation.navigate('RegularAccount')} style={{ backgroundColor: '#525252', width: '12%', height: '15%', marginTop: 40, borderRadius: 15, marginLeft: 10 }}>
                    <MaterialCommunityIcons name="chevron-left" size={50} color={'white'} />
                </Pressable>
                <Text style={styles.head}>ABOUT US</Text>
                <View style={styles.format}>
                <Text style={styles.menu}>
                    Welcome to food delivery App.Here you can can order your favourite 
                    food from wide range of selection and at very affordable price.
                     Get the best deal from your home.Don't miss this chance to get best offer.
                </Text>
                </View>
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
        marginTop: 10,
        textAlign: 'center'
    },
    format: {
        flex:1,
        marginTop: 5,
        marginLeft: 10,
        backgroundColor: 'purple',
        opacity:0.7,
        borderRadius: 12,
        width: '95%',
    },
    menu: {
        fontSize: 15,
        width:'90%',
        textAlign:'justify',
        color: 'white',
        marginBottom: 25,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 20
    }

});
