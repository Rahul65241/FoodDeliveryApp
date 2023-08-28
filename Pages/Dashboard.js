import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, Dimensions, TextInput, TouchableOpacity, FlatList, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function Dashboard({ navigation }) {
    const [name, setName] = useState('');
    const [images, setImages] = useState([
        require('../img/4.jpg'),
        require('../img/5.jpg'),
        require('../img/6.jpg'),
    ])

    return (
        <>
            <LinearGradient
                colors={['#2E2B69', 'orange', 'red', '#2A12CC']}
                style={styles.linearGradient}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <MaterialCommunityIcons name="menu" size={30} color="white" style={{ marginTop: width * 0.14, marginLeft: 10 }} />
                        <MaterialCommunityIcons name="shopping-outline" size={30} color="white" style={{ marginTop: width * 0.14, marginRight: 10 }} />
                    </View>
                    <Text style={styles.title}>WELCOME USER!</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Search"
                            autoComplete='off'
                            onChangeText={text => setName(text)} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 15, marginTop: 20 }}>
                            All Categories
                        </Text>
                        <MaterialCommunityIcons name="chevron-double-right" size={34} style={{ marginTop: 15, marginRight: 15 }} />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <FlatList horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            data={images} renderItem={({ item, index }) => {
                                return (
                                    <View style={{ width: width * 0.9, marginLeft: 15, height: height / 3.5, justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                                        <Image source={item}
                                            key={index}
                                            style={{
                                                width: '98%',
                                                height: '100%',
                                                position: 'absolute', top: 5,
                                                borderRadius: 10,
                                            }} />
                                    </View>
                                )
                            }}>
                        </FlatList>
                    </View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 15, marginTop: 20, color: 'white' }}>Order NOW</Text>
                    <ImageBackground
                        source={require('../img/7.jpg')}
                        style={{ width: width * 0.9, height: height * 0.6, marginTop: 20, marginLeft: 15, marginBottom: 20 }}
                    >
                        <View style={{position:'absolute', bottom:0, backgroundColor:'blue', height:height*0.11, width:width*0.9, alignItems:'center'}}>
                            <Text style={{ color:'white', fontWeight: 'bold', fontSize: 20,  }}>CUPCAKES</Text>
                            <Text style={{ color:'white', fontWeight: 'bold', fontSize: 20,  }}>₹ 200 Only</Text>
                            <Text style={{ color:'white', fontWeight: 'bold', fontSize: 20,  }}>CLICK TO ORDER</Text>

                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../img/8.jpg')}
                        style={{ width: width * 0.9, height: height * 0.6, marginTop: 20, marginLeft: 15, marginBottom: 20, }}
                    >
                        <View style={{position:'absolute', bottom:0, backgroundColor:'blue', height:height*0.11, width:width*0.9, alignItems:'center'}}>
                            <Text style={{ color:'white', fontWeight: 'bold', fontSize: 20,  }}>BURGER</Text>
                            <Text style={{ color:'white', fontWeight: 'bold', fontSize: 20,  }}>₹ 250 Only</Text>
                            <Text style={{ color:'white', fontWeight: 'bold', fontSize: 20,  }}>CLICK TO ORDER</Text>
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../img/9.jpg')}
                        style={{ width: width * 0.9, height: height * 0.6, marginTop: 20, marginLeft: 15, marginBottom: 20 }}
                    >
                        <View style={{position:'absolute', bottom:0, backgroundColor:'blue', height:height*0.11, width:width*0.9, alignItems:'center'}}>
                            <Text style={{ color:'white', fontWeight: 'bold', fontSize: 20,  }}>NOODLES</Text>
                            <Text style={{ color:'white', fontWeight: 'bold', fontSize: 20,  }}>₹ 200 Only</Text>
                            <Text style={{ color:'white', fontWeight: 'bold', fontSize: 20,  }}>CLICK TO ORDER</Text>

                        </View>
                    </ImageBackground>
                </ScrollView>
            </LinearGradient >
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
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "90%",
        backgroundColor: "#F6F6F6",
        height: 50,
        borderRadius: 8,
        marginTop: 25,
        alignSelf: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: "black",
    },
    title: {
        fontWeight: 'bold',
        fontSize: width * 0.05,
        color: 'violet',
        marginTop: 25,
        textAlign: 'center',
    }

});
