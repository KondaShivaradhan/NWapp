import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { View, StyleSheet, Image, Switch } from 'react-native';
import axios from "axios";
import config from '../../config.json'
import { Button, Icon } from '@rneui/themed';

import { Text } from '@rneui/themed';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const CustomeDrawer = (props) => {
    const Ud = props.Udetails
    const Rdata = props.rewData
    const type = props.type
    const [isDarkMode, setIsDarkMode] = useState(false);
    const handleToggleSwitch = () => {
        setIsDarkMode(!isDarkMode);
    };
    const items = [['Home', 'home', `${(type=='rew')?'RewMainScreen':'MainScreen'}`], [`${(type=='rew')?'My Assigned papers':'My Submissions'}`, 'article', 'Profile'], ['Profile', 'person', 'Profile'], ['Settings', 'settings', 'Profile'], ['About', 'info', 'Profile']]
    const [Udetails, setUdetails] = useState(JSON.stringify(Ud));
    function Captilizer(str) {
       return str.charAt(0).toUpperCase() + str.slice(1)
    }
    function Parser(field) {
        // console.log(JSON.parse(Ud)[field]);
        // (type=='rew')?Rdata:Ud
        if (type == 'rew') {
            return `${(Rdata)[field]}`

        }
        else {
            return `${JSON.parse(Ud)[field]}`

        }
    }
    return (
        <DrawerContentScrollView style={styles.container} {...props}>
            <View style={{ gap: 10, justifyContent: 'center', flexDirection: 'row', marginTop: 10, marginBottom: 20, alignSelf: 'center' }}>
                <View>
                    <Image source={{ uri: "https://cdn4.iconfinder.com/data/icons/green-shopper/1068/user.png" }} style={{ width: 70, height: 70 }} ></Image>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold' }}>{Captilizer(Parser('lastName'))} {Captilizer(Parser('firstName'))}</Text>
                    <Text>{Parser('email')}</Text>
                </View>
            </View>
            {items.map((i, index) => (
                <DrawerItem key={index} style={styles.drawerItem}
                    label={() => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name={i[1]} size={25} color="#089b2d" />

                            <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: 'bold' }}>{i[0]}</Text>
                        </View>
                    )}

                    onPress={() => props.navigation.navigate(i[2])}
                />
            ))}
           
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
        // flexGrow: 1,
        backgroundColor: '#FFFFFF',
        paddingVertical: 10
        // paddingHorizontal: 10,
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
        // marginBottom: 10,
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
