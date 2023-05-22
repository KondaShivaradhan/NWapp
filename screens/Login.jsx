// import { StatusBar } from 'expo-status-bar';
import { Button } from '@react-native-material/core';
import Svg, { Path } from 'react-native-svg';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Linking, StyleSheet, StatusBar, Text, TextInput, TouchableOpacity, View, ScrollView, ToastAndroid, Animated } from 'react-native';
import { Image, Input } from 'react-native-elements';
import { Screen } from 'react-native-screens';
import { ScreenHeight } from '@rneui/base';
import { Formik } from 'formik';
import config from '../config.json'

// images
import { logo } from '../assets/nwlogo.png'
import Foot from './components/Footer';
export default function Login({ navigation }) {
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [visible, setVis] = useState(true);
    const [err, seterr] = useState([]);
    const [animation] = useState(new Animated.Value(0));
    const [password, setPassword] = useState('');
    useEffect(() => {
        Animated.timing(animation, {
            toValue: visible ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [visible]);
    const opacity = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });
    function handleLogin() {
        console.log('====================================');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const isValidEmail = (email) => {
            return emailRegex.test(email);
        };
        if (isValidEmail(email)) {

            console.log("Valid Email");
        }
        else {
            var temp = []
            temp.push('eError')
            seterr(temp)
            ToastAndroid.show('Invalid Deatils', ToastAndroid.LONG);
        }
    }
    // Formik
    const initialValues = { email: '', password: '' };
    const onSubmit = async (values) => {
            const requestBody = {
                email: values.email,
                password: values.password
            };
            console.log(config.RenderIP);
            await axios.post(`https://${config.RenderIP}/api/login`, requestBody)
                // await axios.post(`https://backend-ytgo.onrender.com//api/login`, requestBody)
                .then(response => {
                    // Handle the response data
                    console.log(response.data);

                    console.log(response.data.status);
                    if (response.data.status)
                        navigation.navigate('afterlog', { uemail: `${values.email}` })
                    else
                        alert('Auth Failed')
                })
                .catch(error => {
                    // Handle the error
                    console.error(error);
                });
            // const response = await fetch(`http://${config.RenderIP}/api/login`, {
            //     method: 'POST',
            //     headers: {
            //         'mode':'nocors',
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(requestBody),
            // });
            // console.log(response);


        console.log(values);
    };

    const validate = (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Invalid Email';
        }

        if (!values.password) {
            errors.password = 'Invalid Password';
        }

        return errors;
    };
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
                    {/* <Button title="check" onPress={()=>setVis(!visible)}></Button> */}
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.banner}>
                        <Text style={styles.title2}>Login</Text>
                    </View>
                    {/* <Animated.View style={[styles.container, { opacity }]}>
                        <Text style={styles.text}>Shiva</Text>
                    </Animated.View> */}
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
                        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                            <View>
                                <TextInput
                                    style={[errors.email ? styles.err : styles.input]}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    placeholder="Email"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                />
                                {errors.email ? <Text style={styles.error}>{errors.email}</Text> : <Text style={styles.error}></Text>}

                                {/* {errors.email && <Text style={styles.error}>{errors.email}</Text>} */}
                                <TextInput
                                    style={[errors.password ? styles.err : styles.input]}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    placeholder="Password"
                                    secureTextEntry
                                />
                                {errors.password ? <Text style={styles.error}>{errors.password}</Text> : <Text style={styles.error}></Text>}

                                {/* {errors.password && <Text style={styles.error}>{errors.password}</Text>} */}
                                <Button style={{ alignSelf: "center", width: 100, marginTop: 10, backgroundColor: 'green' }} onPress={handleSubmit} title="Login" />
                                {/* <View>
                                    <Button title="Login" onPress={() => handleLogin()} style={{ alignSelf: "center", marginTop: 10, backgroundColor: 'green' }} />
                                </View> */}
                                <View style={{ margin: 10 }}>
                                    <Text style={{ textAlign: 'center' }}>
                                        Don't have an account?  <Text style={styles.link} onPress={() => navigation.navigate('signup')}>
                                            Sign-up! </Text>
                                    </Text>
                                </View>
                            </View>
                        )}
                    </Formik>

                </View>

                <StatusBar style="auto" />
                <Foot></Foot>
            </ScrollView>

        </View>
    );
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#2b5a2b',
        color: 'white',
        // marginTop: StatusBar.currentHeight-4
    },

    logoContainer: {
        alignItems: 'center',
        padding: 20,
        marginTop: 70,
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
        borderBottomWidth: 1,
        borderColor: '#ddd',
        marginVertical: 10,
        paddingHorizontal: 10,

    },

    wave: {
        position: 'absolute',
        bottom: 0,
    },

    banner: {
        padding: 16,
        width: '100%',
    },
    wave: {
        width: '100%', textAlign: 'center', flex: 1,
        padding: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#fff'
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    title2: {
        color: 'green',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
    },

    link: {
        color: 'blue',
        textAlign: 'center',
    },
    err: {
        height: 40,
        borderBottomWidth: 1,
        marginVertical: 10,
        paddingHorizontal: 10,

        borderColor: 'red',
        borderBottomWidth: 1,
        padding: 10,
        color: 'red'
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
});