import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function RegularAccount({ navigation }) {
    return (
        <LinearGradient
        colors={['#2E2B69', 'orange', 'red', '#2A12CC']}
        style={styles.linearGradient}>
            <ScrollView>
            <Text style={{marginTop:70, marginLeft:15, fontWeight:'bold', fontSize:30, color:'cyan'}}>USER MENU</Text>
            <View style={styles.format}>
                <Text onPress={() => navigation.navigate('Dashboard')} style={styles.menu}>Home</Text>
                <Text onPress={() => navigation.navigate('Profile')} style={styles.menu}>Profile</Text>
                <Text onPress={() => navigation.navigate('Cart')} style={styles.menu}>Cart</Text>
                <Text style={styles.menu}>Orders</Text>
                <Text onPress={() => navigation.navigate('About')} style={styles.menu}>About Us</Text>
                <Text onPress={() => navigation.navigate('Home')} style={styles.menu}>Exit</Text>
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
    format: {
        marginTop: 10,
        marginLeft: 10,
        backgroundColor:'#525252',
        borderRadius:8,
        width:'92%',
        height:height*0.8,
    },
    menu: {
        fontSize: 20,
        color: 'white',
        marginBottom: 25,
        fontWeight: 'bold',
        marginLeft:15,
        marginTop:10
    }

});
