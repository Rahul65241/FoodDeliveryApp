import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function Cart({ navigation }) {
    return (
        <LinearGradient
            colors={['#2E2B69', 'orange', 'red', '#2A12CC']}
            style={styles.linearGradient}>
            <ScrollView>
                <Text style={styles.head}>Cart</Text>
                <View style={styles.format}>
                    
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
        marginTop: 70,
    },
    format: {
        flex:1,
        marginTop: 35,
        marginLeft: 10,
        backgroundColor: 'purple',
        opacity:0.7,
        borderRadius: 12,
        width: '95%',
    },

});
