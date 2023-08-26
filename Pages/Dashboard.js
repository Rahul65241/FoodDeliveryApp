import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function Dashboard({ navigation }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <LinearGradient
                colors={['#2E2B69', 'orange', 'red', '#2A12CC']}
                style={styles.linearGradient}>
                <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                    <MaterialCommunityIcons name="menu" size={30} color="white" style={{ marginTop: width * 0.14, marginLeft: 10 }} />
                    <MaterialCommunityIcons name="shopping-outline" size={30} color="white" style={{ marginTop: width * 0.14, marginRight:10}} />
                </View>
                <Text style={styles.title}>WELCOME TO FOOD DELIVERY</Text>
            </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearGradient: {
        flex: 1
    },
    title:{
        fontWeight:'bold',
        fontSize:width*0.05,
        color:'violet',
        marginTop:25,
        textAlign:'center',
    }

});
