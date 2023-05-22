import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { View, StyleSheet, Image, Switch } from 'react-native';
import axios from "axios";
import config from '../../config.json'
import { Icon, Button } from '@rneui/themed';
import { Text } from '@rneui/themed';

const CustomeDrawer = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggleSwitch = () => {
        setIsDarkMode(!isDarkMode);
    };
    const [Udetails, setUdetails] = useState([]);
    const get = async () => {
        const requestBody = {
            email: props.cage,
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
        // const response = await fetch(`https://${config.RenderIP}/api/getDetails`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(requestBody),
        // });

        // const json = await response.json();
    }
    try {
        get()
    }
    catch (e) {

    }
    function Parser(field) {
        console.log(JSON.parse(Udetails)[field]);
        return `${JSON.parse(Udetails)[field]}`
    }
    return (
        <DrawerContentScrollView style={styles.container} {...props}>
            <View style={{ display: 'flex', justifyContent: 'center', alignSelf: 'center' }}>
                <Image source={{ uri: "https://cdn4.iconfinder.com/data/icons/green-shopper/1068/user.png" }} style={{ width: 70, height: 70 }} ></Image>
                {Udetails.length > 0 && <>
                    <Text style={{ textAlign: 'center' }}>{Parser('lastName')} </Text>
                    <Text>{Parser('firstName')}</Text>

                </>
                }
            </View>

            <DrawerItem style={styles.drawerItem}
                label="Home"

                onPress={() => props.navigation.navigate('MainScreen')}
            />
            <DrawerItem style={styles.drawerItem}
                label="My Submissions"

                onPress={() => props.navigation.navigate('MainScreen')}
            />
            <DrawerItem style={styles.drawerItem}
                label="Settings"

                onPress={() => props.navigation.navigate('Profile')}
            /><DrawerItem style={styles.drawerItem}
                label="About"

                onPress={() => props.navigation.navigate('Profile')}
            />
            <View style={styles.switchContainer}>
                <Text style={styles.switchText}>Dark Mode</Text>
                <Switch
                    value={isDarkMode}
                    onValueChange={handleToggleSwitch}
                    thumbColor={isDarkMode ? '#FFFFFF' : '#000000'}
                    trackColor={{ false: '#CCCCCC', true: '#999999' }}
                />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                {/* <Button radius={'lg'} type="solid" color="green" >
                    About 
                    <Icon style={{marginLeft:5}} name="car" color="white" />
                </Button> */}
                <Button radius={'lg'} type="solid" onPress={() => { props.navigation.navigate('Login') }} color="error" >
                    Logout
                    <Icon style={{ marginLeft: 5 }} name="logout" color="white" />
                </Button>
            </View>


            {/* <DrawerItemList {...props}/> */}
        </DrawerContentScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    darkContainer: {
        backgroundColor: '#000000',
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    switchText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    drawerItem: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000000',
    },
    drawerItemL: {
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: 'red',
        marginBottom: 10,
        color: 'white',
    },
});

export default CustomeDrawer;
