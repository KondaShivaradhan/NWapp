import Navbar from "./components/Navbar";
import { Button } from '@react-native-material/core';
import Svg, { Path } from 'react-native-svg';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Linking, StyleSheet, StatusBar, Text, TextInput, TouchableOpacity, View, ScrollView, RefreshControl, ToastAndroid, Animated } from 'react-native';
import { Image, Input } from 'react-native-elements';
import { Screen } from 'react-native-screens';
import { ScreenHeight } from '@rneui/base';
import { Formik } from 'formik';
// images
import config from '../config.json'

import { logo } from '../assets/nwlogo.png'
import Foot from './components/Footer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginPage from "./Test";
const Tab = createBottomTabNavigator();

export default function MainScreen({ navigation, myObject }) {
    const uemail = myObject.key1
    const [refreshing, setRefreshing] = useState(false);
    const [Udetails, setUdetails] = useState([]);
    const fetchData = () => {
        // Simulate an asynchronous data fetch
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };

    const onRefresh = () => {
        setRefreshing(true);
        fetchData();
    };

    useEffect(() => {
        fetchData();
    }, []);
    const get = async () => {
        const requestBody = {
            email: uemail,
        };
        await axios.post(`https://${config.RenderIP}/api/getDetails`, requestBody)
            .then(response => {
                // Handle the response data
                console.log(response.data);
                setUdetails(JSON.stringify(response.data))

            })
            .catch(error => {
                // Handle the error
                console.error(error);
            });

    }
    try {
        get()

    } catch (error) {

    }
    function Parser(field) {
        console.log(JSON.parse(Udetails)[field]);
        return `${JSON.parse(Udetails)[field]}`
    }
    return (
        <>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >

                <View style={styles.container}>
                    <View>
                        <View>
                            <Text>ON going Conference</Text>
                            <Text>Related to AI and Bigdata</Text>
                            <Text>open till Augast 26th 2023</Text>
                        </View>
                        {Udetails.length > 0 && <>
                            <Text>{Parser('lastName')}</Text>
                        </>
                        }

                    </View>

                </View>
            </ScrollView>
        </>

    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        color: 'white',
        marginTop: StatusBar.currentHeight
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