import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function Profile({ navigation }) {
    return (
        <LinearGradient
        colors={['#2E2B69', 'orange', 'red', '#2A12CC']}
        style={styles.linearGradient}>
            <ScrollView>
            <Text style={styles.head}>User Profile</Text>
            <Text style={styles.menu}>Name: Rahul Kumar</Text>
            <Text style={styles.menu}>Email: abc@gmail.com</Text>
            <Text style={styles.menu}>Contact Number: 0 1 2 3 4 - 5 6 7 8 9</Text>

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
    head:{
        fontSize: 25,
        color: 'white',
        marginBottom: 25,
        fontWeight: 'bold',
        marginLeft:15,
        marginTop:70
    },
    menu: {
        fontSize: 20,
        color: 'white',
        marginBottom: 25,
        fontWeight: 'bold',
        marginLeft:15,
        marginTop:30
    }

});
