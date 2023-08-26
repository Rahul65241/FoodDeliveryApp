import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <LinearGradient
                colors={['#2E2B69', 'orange', 'red', '#2A12CC']}
                style={styles.linearGradient}>
                <Text style={styles.title}> Login <Text style={styles.title2}>Screen</Text></Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email"
                        placeholderTextColor="white"
                        autoComplete='off'
                        onChangeText={text => setEmail(text)} />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="white"
                        onChangeText={text => setPassword(text)} />
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.loginBtn}>
                    <Text style={styles.loginText}>LOGIN INTO ACCOUNT</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.signup}>Signup</Text>
                </TouchableOpacity>
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
    title: {
        fontWeight: "bold",
        fontSize: 50,
        color: "black",
        marginBottom: 40,
    },
    title2: {
        fontWeight: "bold",
        fontSize: 50,
        color: "white",
        marginBottom: 40,
    },
    inputView: {
        width: "80%",
        backgroundColor: "#525252",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white",
    },
    forgot: {
        color: "white",
        fontSize: 11
    },
    signup: {
        color: "white",
        fontSize: 13,
        marginTop:5
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color:'white',
        fontWeight:'bold',
        fontSize:15
    },
    linearGradient: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
