import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Login() {
    return (
        <>
            <LinearGradient
                colors={['#2E2B69', 'orange', 'red', '#2A12CC']}
                style={styles.linearGradient}>
                    <Text>gcuj</Text>
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
        position:'absolute',
        bottom:50,
        width: '85%',
        height: '5%',
        backgroundColor: '#00FFFF',
        borderRadius:8
    },
    buttontext:{
        flex:1,
        color:'black',
        alignItems: 'center',
        alignContent:'center',
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:20,
        justifyContent:'center',
        position:'relative',
        marginTop:5
    }
});
