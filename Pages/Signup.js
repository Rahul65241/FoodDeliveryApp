import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import axios from "axios";


export default function Signup({ navigation }) {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        if (name == "") {
            return alert('Please Enter Your Full Name')
        }
        if (username == "") {
            return alert('Please Set Your Username')
        }
        if (phone == "") {
            return alert('Please Enter Your Phone Number')
        }
        if (email == "") {
            return alert('Please Enter Your Email Address')
        }
        if (password == "") {
            return alert('Please Set Your Password')
        }

        let data = new FormData();
        data.append('name', name);
        data.append('username', username);
        data.append('contact', phone);
        data.append('email', email);
        data.append('password', password);

        axios({
          method: 'POST',
          url: 'http://localhost/Food%20Delivery/register.php',
          //data: data,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
          },
    
    
        })

          .then(function (response) {
            // console.log("response", response);
            if (response.data.status_code == 1) {
               alert(response.data.message)
    
            }
            else {
              alert("Invalid Phone Number Please Enter Valid Mobile number ")
            }
          })
          .catch(function (response) {
            console.log("error response 88", response);
    
          });
      }

    const onRegister = async () => {
        console.log('hello');
        if (name == "") {
            return alert('Please Enter Your Full Name')
        }
        if (username == "") {
            return alert('Please Set Your Username')
        }
        if (phone == "") {
            return alert('Please Enter Your Phone Number')
        }
        if (email == "") {
            return alert('Please Enter Your Email Address')
        }
        if (password == "") {
            return alert('Please Set Your Password')
        }
        let data2 = new FormData();
        data2.append('name', name);
        data2.append('username', username);
        data2.append('contact', phone);
        data2.append('email', email);
        data2.append('password', password);
        console.log(data2);
        try {
            const { data } = await axios({
                method: 'POST',
                url: 'http://10.0.2.2/Food%20Delivery/register.php',
                data: data2,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(data);
            alert(data.message)

        } catch (err) {
            console.log("195", err);
            if (err.response.status === 404) {
                console.log('Resource could not be found!');
            }

        }
    };

    return (
        <>
            <LinearGradient
                colors={['#2E2B69', 'orange', 'red', '#2A12CC']}
                style={styles.linearGradient}>
                <Text style={styles.title}>Signup <Text style={styles.title2}>Screen</Text></Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Name"
                        placeholderTextColor="white"
                        autoComplete='off'
                        onChangeText={text => setName(text)} />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Username"
                        placeholderTextColor="white"
                        autoComplete='off'
                        onChangeText={text => setUsername(text)} />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Contact Number"
                        placeholderTextColor="white"
                        autoComplete='off'
                        maxLength={10}
                        keyboardType='numeric'
                        onChangeText={text => setPhone(text)} />
                </View>
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
                <TouchableOpacity onPress={()=>onRegister()}
                    style={styles.loginBtn}>
                    <Text style={styles.loginText}>CREATE AN ACCOUNT</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.signup}>Back to Login</Text>
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
    signup: {
        color: "white",
        fontSize: 13,
        marginTop: 5
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
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    linearGradient: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
