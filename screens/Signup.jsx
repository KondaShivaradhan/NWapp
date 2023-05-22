// import { StatusBar } from 'expo-status-bar';
import { Button } from '@react-native-material/core';
import Svg, { Path } from 'react-native-svg';

import { useState } from 'react';
import { Linking, StyleSheet, StatusBar, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { Image, Input } from 'react-native-elements';
import { Screen } from 'react-native-screens';
import { ScreenHeight } from '@rneui/base';
// images
import { logo } from '../assets/nwlogo.png'
import Foot from './components/Footer';
export default function Login({ navigation }) {
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <ScrollView >
                <View style={styles.logoContainer}>
                    <View style={{ borderRadius: 25, padding: 10, backgroundColor: 'white' }}>
                        <Image
                            style={{ height: 50, width: 50 }}
                            // source={{ uri: 'https://logos-download.com/wp-content/uploads/2020/06/Boston_University_Logo.png' }}
                            source={require('../assets/nwlogo.png')}
                        >
                        </Image>
                    </View>
                    <Text style={[styles.title, { marginTop: 10 }]}>NORTHWEST CONFORENCE</Text>
                    <Text style={styles.title}>2023</Text>
                </View>


                <View style={styles.formContainer}>
                    <View style={styles.banner}>
                        <Text style={styles.title}>Register</Text>
                    </View>
                    <Input
                        placeholder="firstName"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                    <Input
                        placeholder="lastName"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                    <Input
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                    <Input
                        placeholder="Areas of Interest"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                    
                    <Input
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <Input
                        placeholder="Confirm Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <View>
                        <Button title="Sign-Up" style={{ alignSelf: "center", marginTop: 10, backgroundColor: 'green' }} />
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text style={{ textAlign: 'center' }}>
                            Already have an account?  <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
                                Login </Text>
                        </Text>
                    </View>
                </View>
                {/* <Svg style={styles.wave} viewBox="0 0 1440 320">
                <Path fill="#fff" d="M0,160L48,138.7C96,117,192,75,288,96C384,117,480,203,576,224C672,245,768,203,864,181.3C960,160,1056,160,1152,186.7C1248,213,1344,267,1392,293.3L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
            </Svg> */}
                <StatusBar style="auto" />
                <Foot></Foot>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#234123',
        backgroundColor: '#2b5a2b',
        color: 'white',
        // marginTop: StatusBar.currentHeight-4

    },
    logoContainer: {
        alignItems: 'center',
        padding: 20,
        marginTop: 50,
    },
    logoText: {
        fontSize: 30,
        color: '#fff',
    },
    formContainer: {
        flex: 1,
        padding: 20,
        minHeight: ScreenHeight - StatusBar.currentHeight,
        maxHeight: ScreenHeight,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 10,
        shadowColor: '#234123', // set shadow color
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 2,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginVertical: 10,
        paddingHorizontal: 10,
    },


    banner: {
        padding: 16,
        width: '100%',
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
    },

    link: {
        color: 'blue',
        textAlign: 'center',
    },

});