import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import { Pressable } from 'react-native';


export default function Address({ navigation }) {

    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');
    const [ value, setValue ] = useState('1')

    const AddAddress = () => {
        return(
        <>
        <View style={styles.inputView}>
        <TextInput
            style={styles.inputText}
            placeholder="Address 1"
            placeholderTextColor="white"
            autoComplete='off'
            onChangeText={text => setAddress1(text)} />
    </View>
    <View style={styles.inputView}>
        <TextInput
            style={styles.inputText}
            placeholder="Address 2"
            placeholderTextColor="white"
            autoComplete='off'
            onChangeText={text => setAddress2(text)} />
    </View>
    <View style={styles.inputView}>
        <TextInput
            style={styles.inputText}
            placeholder="City"
            placeholderTextColor="white"
            autoComplete='off'
            onChangeText={text => setCity(text)} />
    </View>
    <View style={styles.inputView}>
        <TextInput
            style={styles.inputText}
            placeholder="Zip Code"
            placeholderTextColor="white"
            autoComplete='off'
            keyboardType='numeric'
            onChangeText={text => setZip(text)} />
    </View>
    <View style={styles.inputView}>
        <TextInput
            style={styles.inputText}
            placeholder="Country"
            placeholderTextColor="white"
            onChangeText={text => setCountry(text)} />
    </View>

    <Pressable onPress={() => { navigation.navigate('RegularAccount'), alert('Address Added Successfully') }} style={styles.button}>
        <Text style={styles.buttontext}>Submit</Text>
    </Pressable>
        </>
        )
    }


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
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 45, marginTop: width * 0.09, fontWeight: 'bold' }}>RK</Text>

                    </View>
                    <Text style={styles.user}>Rahul Kumar{"\n"}Patna, Bihar{"\n"}{"\n"}Food Lover😊😊</Text>
                </View>
                {value=='1'?
                <>
                <Pressable>
                <View style={styles.ViewButton}>
                    <Text>
                        View Saved Addresses
                    </Text>
                </View>
                </Pressable>
                <Pressable onPress={()=>setValue('0')}>
                <View style={styles.ViewButton2}>
                    <Text>
                        Add New Address
                    </Text>
                </View>
                </Pressable></>
                :
                <AddAddress></AddAddress>}


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
    inputView: {
        width: "80%",
        backgroundColor: "#525252",
        borderRadius: 25,
        height: 50,
        justifyContent: "center",
        padding: 20,
        alignSelf: 'center',
        marginTop: width * 0.08
    },
    inputText: {
        height: 50,
        color: "white",
    },
    format: {
        flex: 1,
        marginTop: 35,
        marginLeft: 10,
        backgroundColor: 'purple',
        opacity: 0.7,
        borderRadius: 12,
        width: '95%',
    },
    button: {
        flex: 1,
        backgroundColor: '#2196F3',
        width: '80%',
        marginLeft: 38,
        marginTop: width * 0.13,
        height: height * 0.07,
    },
    buttontext: {
        textAlign: 'center',
        marginTop: height * 0.013,
        color: 'white',
        fontWeight: 'bold'
    },
    menu: {
        fontSize: 20,
        color: 'white',
        marginBottom: 25,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 20
    },
    ViewButton:
    {
        alignSelf: 'center',
        marginTop: width * 0.3,
        backgroundColor: '#2196F3',
        width: width * 0.5,
        height: height * 0.04,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:8
    },
    ViewButton2:
    {
        alignSelf: 'center',
        marginTop: width * 0.1,
        backgroundColor: '#2196F3',
        width: width * 0.5,
        height: height * 0.04,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:8
    }

});
