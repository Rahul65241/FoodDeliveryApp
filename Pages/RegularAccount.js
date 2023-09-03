import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from 'react-native-vector-icons';
import { FontAwesome } from 'react-native-vector-icons';
import { Entypo } from 'react-native-vector-icons';
import { Pressable } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function RegularAccount({ navigation }) {
    return (
        <LinearGradient
            colors={['#2E2B69', 'orange', 'red', '#2A12CC']}
            style={styles.linearGradient}>
            <ScrollView>
                <Pressable onPress={() => navigation.navigate('Dashboard')} style={{ backgroundColor: '#525252', width: '12%', height: '9%', marginTop: 40, borderRadius: 15, marginLeft: 10 }}>
                    <MaterialCommunityIcons name="chevron-left" size={50} color={'white'} />
                </Pressable>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.photoback}>
                        <Text style={{color:'white', textAlign:'center', fontSize:45, marginTop:width*0.09, fontWeight:'bold' }}>RK</Text>
                    </View>
                    <Text style={styles.user}>Rahul Kumar{"\n"}Patna, Bihar{"\n"}{"\n"}Food Lover😊😊</Text>
                </View>

                <View style={styles.format}>
                    <Pressable onPress={() => navigation.navigate('Profile')} style={{ flexDirection: 'row', marginTop: 15 }}>
                        <FontAwesome name="user" size={25} color={'white'} style={{ marginLeft: 10 }} />
                        <Text style={styles.menu}>Personal Info</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Address')} style={{ flexDirection: 'row' }}>
                        <FontAwesome name="address-book" size={25} color={'white'} style={{ marginLeft: 10 }} />
                        <Text style={styles.menu}>Addresses</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Cart')} style={{ flexDirection: 'row' }}>
                        <MaterialCommunityIcons name="shopping-outline" size={27} color={'white'} style={{ marginLeft: 10 }} />
                        <Text style={styles.menu}>Cart</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Cart')} style={{ flexDirection: 'row' }}>
                        <AntDesign name="shoppingcart" size={25} color={'white'} style={{ marginLeft: 10 }} />
                        <Text style={styles.menu}>Orders</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('About')} style={{ flexDirection: 'row' }}>
                        <Entypo name="shop" size={25} color={'white'} style={{ marginLeft: 10 }} />
                        <Text style={styles.menu}>About Us</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Home')} style={{ flexDirection: 'row' }}>
                        <MaterialCommunityIcons name="logout" size={25} color={'white'} style={{ marginLeft: 10 }} />
                        <Text style={styles.menu}>Log Out</Text>
                    </Pressable>
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
        flex:1,
        marginTop: 35,
        marginLeft: 10,
        backgroundColor: 'purple',
        opacity:0.7,
        borderRadius: 12,
        width: '95%',
    },
    photoback: {
        width: 140,
        height: 140,
        borderRadius: 80,
        backgroundColor: '#525252',
        marginLeft: 10,
        marginTop: 10
    },
    user: {
        marginRight: width * 0.17,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: width * 0.05,
        color: 'white'
    },
    menu: {
        fontSize: 16,
        color: 'white',
        marginBottom: 25,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 2,
    }

});
