import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, Pressable, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home({navigation}) {
    return (
        <>
            <LinearGradient
                colors={['#2E2B69', 'orange', 'red', '#2A12CC']}
                style={styles.linearGradient}>
                <MaterialCommunityIcons name="food" size={90} color="white" />
                <Text style={styles.head}>FOOD <Text style={styles.head2}>DELIVERY</Text></Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttontext}>Continue</Text>
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
    head: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'black',
        fontStyle: 'italic'
    },
    head2: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'white',
        fontStyle: 'italic'
    },
    linearGradient: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        position: 'absolute',
        bottom: 50,
        width: '85%',
        height: '5%',
        backgroundColor: '#00FFFF',
        borderRadius: 8
    },
    buttontext: {
        flex: 1,
        color: 'black',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: 'center',
        position: 'relative',
        marginTop: 5
    }
});
