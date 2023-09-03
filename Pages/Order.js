import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, Dimensions, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function Order({ navigation }) {

    const [cake, setCake] = useState(0);
    const [burger, setBurger] = useState(0);
    const [noodle, setNoodle] = useState(0);

    const incrementCountcake = () => {
        setCake(cake + 1);
    };

    const incrementCountburger = () => {
        setBurger(burger + 1);
    };

    const incrementCountnoodle = () => {
        setNoodle(noodle + 1);
    };

    const decrementCountcake = () => {
        setCake(cake - 1);
    };

    const decrementCountburger = () => {
        setBurger(burger - 1);
    };

    const decrementCountnoodle = () => {
        setNoodle(noodle - 1);
    };

    return (
        <LinearGradient
            colors={['#2E2B69', 'orange', 'red', '#2A12CC']}
            style={styles.linearGradient}>
            <ScrollView>
            <Pressable onPress={() => navigation.goBack()} style={{ backgroundColor: '#525252', width: '12%', height: '5%', marginTop: 40, borderRadius: 15, marginLeft: 10 }}>
                    <MaterialCommunityIcons name="chevron-left" size={50} color={'white'} />
                </Pressable>
                <Text style={styles.head}>My Orders</Text>
                <View style={styles.format}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{}}
                            source={require('../img/pancake.jpeg')}
                        />
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginLeft: width * 0.03 }}>
                            PANCAKES{"\n"}{"\n"}{"\n"}{"\n"}{"\n"} <Text></Text>
                        </Text>
                    </View>
                </View>
                <View style={styles.format}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ width: '60%' }}
                            source={require('../img/burger.jpeg')}
                        />
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginLeft: width * 0.03 }}>
                            BURGERS{"\n"}{"\n"}{"\n"}{"\n"}{"\n"} 
                        </Text>
                    </View>
                </View>

                <View style={styles.format}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ width: '60%' }}
                            source={require('../img/noodle.jpeg')}
                        />
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginLeft: width * 0.03 }}>
                            NOODLES{"\n"}{"\n"}{"\n"}{"\n"}{"\n"} 
                        </Text>
                    </View>
                </View>

                <View style={styles.format}>
                    <Text style={{ textAlign:'right', marginTop:10, marginBottom:10, marginRight:15, fontWeight:"bold", fontSize:20}}>Total <Text style={{color:'white'}}>Paid: {(burger*250)+(noodle*200)+(cake*200)}</Text></Text>
                </View>

                {/* <Pressable onPress={() => {navigation.navigate('RegularAccount'), alert('ORDER PLACED SUCCESFULLY')}} style={styles.button}>
                <Text style={styles.buttontext}>ORDER <Text style={{color:'black'}}>NOW</Text></Text>
            </Pressable> */}


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
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 15,
    },
    format: {
        flex: 1,
        marginTop: 35,
        marginLeft: 10,
        backgroundColor: 'purple',
        opacity: 0.7,
        borderRadius: 12,
        width: '95%',
        marginBottom:20
    },
    button:{
        flex:1,
        backgroundColor:'orange',
        width:'90%',
        marginLeft:20,
        marginTop:width*0.09,
        height:height*0.05,
        marginBottom:50
    },
    buttontext:{
        textAlign:'center',
        marginTop:height*0.009,
        color:'white',
        fontWeight:'bold',
        fontSize:20
    },



});
