import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import { Pressable } from 'react-native';


export default function Profile({ navigation }) {
    return (
        <LinearGradient
        colors={['#2E2B69', 'orange', 'red', '#2A12CC']}
        style={styles.linearGradient}>
            <ScrollView>
            <Pressable onPress={() => navigation.navigate('RegularAccount')} style={{ backgroundColor: '#525252', width: '12%', height: '9%', marginTop: 40, borderRadius: 15, marginLeft: 10 }}>
                    <MaterialCommunityIcons name="chevron-left" size={50} color={'white'} />
                </Pressable>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.photoback}>
                    </View>
                    <Text style={styles.user}>Rahul Kumar{"\n"}Patna, Bihar{"\n"}{"\n"}Food Lover😊😊</Text>
                </View>
                <View style={styles.format}>
            <Text style={styles.menu}>Name: Rahul Kumar</Text>
            <Text style={styles.menu}>Username: Rahul123</Text>
            <Text style={styles.menu}>Email: abc@gmail.com</Text>
            <Text style={styles.menu}>Contact Number: 0 1 2 3 4 - 5 6 7 8 9</Text>
            </View>
            <Pressable onPress={() => navigation.navigate('EditProfile')} style={styles.button}>
                <Text style={styles.buttontext}>Edit Profile</Text>
            </Pressable>

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
    format: {
        flex:1,
        marginTop: 35,
        marginLeft: 10,
        backgroundColor: 'purple',
        opacity:0.7,
        borderRadius: 12,
        width: '95%',
    },
    button:{
        flex:1,
        backgroundColor:'#2196F3',
        width:'95%',
        marginLeft:10,
        marginTop:width*0.09,
        height:height*0.06,
    },
    buttontext:{
        textAlign:'center',
        marginTop:height*0.014,
        color:'white',
        fontWeight:'bold'
    },
    menu: {
        fontSize: 20,
        color: 'white',
        marginBottom: 25,
        fontWeight: 'bold',
        marginLeft:15,
        marginTop:20
    }

});
