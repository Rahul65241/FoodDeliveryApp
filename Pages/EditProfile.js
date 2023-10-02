import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import { Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function EditProfile({ navigation }) {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');

    const [pickedImagePath, setPickedImagePath] = useState('');

    const showImagePicker = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your photos!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync();

        console.log(result);
        setPickedImagePath(result.uri);

        if (!result.cancelled) {
            setPickedImagePath(result.assets[0].uri);
            console.log(result.uri);
        }
    }

    const openCamera = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your camera!");
            return;
        }

        const result = await ImagePicker.launchCameraAsync();

        console.log(result);
        if (!result.cancelled) {
            setPickedImagePath(result.assets[0].uri);
            console.log(result.uri);
        }
    }

    return (
        <LinearGradient
            colors={['#2E2B69', 'orange', 'red', '#2A12CC']}
            style={styles.linearGradient}>
            <ScrollView>
                <Pressable onPress={() => navigation.navigate('RegularAccount')} style={{ backgroundColor: '#525252', width: '12%', height: '7%', marginTop: 40, borderRadius: 15, marginLeft: 10 }}>
                    <MaterialCommunityIcons name="chevron-left" size={50} color={'white'} />
                </Pressable>
                {pickedImagePath == '' || pickedImagePath == undefined || pickedImagePath == null ?
                    <View style={styles.photoback}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 65, marginTop: width * 0.14, fontWeight: 'bold' }}>RK</Text>
                    </View> :
                    <Image
                        source={{ uri: pickedImagePath }}
                        style={styles.image}
                    />
                }
                <Pressable onPress={openCamera}>
                    <View style={styles.ViewButton}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>
                            Open Camera
                        </Text>
                    </View>
                </Pressable>
                <Pressable onPress={showImagePicker}>
                    <View style={styles.ViewButton}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>
                            Select an Image
                        </Text>
                    </View>
                </Pressable>
                <View style={{ marginLeft: width * 0.09, marginTop: 40 }}>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Full Name"
                            placeholderTextColor="white"
                            autoComplete='off'
                            onChangeText={text => setName(text)} />
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
                    <View style={styles.inputView1}>
                        <TextInput
                            style={styles.inputText}
                            secureTextEntry
                            placeholder="ADD YOUR BIO"
                            multiline
                            number
                            placeholderTextColor="white"
                            onChangeText={text => setBio(text)} />
                    </View>
                </View>
                <Pressable onPress={() => { navigation.navigate('RegularAccount'), alert('Profile Updated Successfully') }} style={styles.button}>
                    <Text style={styles.buttontext}>Update Your Profile</Text>
                </Pressable>

            </ScrollView>
        </LinearGradient >

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
    linearGradient: {
        flex: 1
    },
    photoback: {
        width: 200,
        height: 200,
        borderRadius: 120,
        backgroundColor: '#525252',
        marginTop: 7,
        alignSelf: "center"
    },
    user: {
        marginRight: width * 0.17,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: width * 0.05,
        color: 'white'
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
    inputView: {
        width: "90%",
        backgroundColor: "#525252",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputView1: {
        width: "90%",
        backgroundColor: "#525252",
        marginTop: 5,
        borderRadius: 8,
        height: 100,
        marginBottom: 20,
        justifyContent: "center",
        paddingBottom: 50,
        paddingLeft: 15
    },
    inputText: {
        height: 50,
        color: "white",
    },
    menu: {
        fontSize: 20,
        color: 'white',
        marginBottom: 25,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 20
    },
    button: {
        flex: 1,
        backgroundColor: '#2196F3',
        width: '80%',
        marginLeft: 40,
        marginTop: width * 0.09,
        height: height * 0.06,
        marginBottom: 50
    },
    buttontext: {
        textAlign: 'center',
        marginTop: height * 0.014,
        color: 'white',
        fontWeight: 'bold'
    },
    ViewButton:
    {
        alignSelf: 'center',
        marginTop: width * 0.05,
        backgroundColor: '#2196F3',
        width: width * 0.6,
        height: height * 0.04,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 120,
        backgroundColor: '#525252',
        marginTop: 7,
        alignSelf: "center"
      },
      imageContainer: {
        height: 40, width: 40, borderRadius: 120, borderColor: '#242424', borderWidth: 1
      },

});
