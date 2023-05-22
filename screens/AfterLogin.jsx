import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Navbar from './components/Navbar';
import MainScreen from './MainScreen';
import CustomeDrawer from './components/CustomeDrawer';
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
import config from '../config.json'
export default function AfterLogin({ route }) {
    const { uemail } = route.params;
    const myObject = { key1: uemail, key2: 'value2' };
    const [selectedTab, setSelectedTab] = useState('MainScreen');
    return (
        <>
            <Drawer.Navigator drawerContent={(props,uemail)=><CustomeDrawer cage={myObject.key1}  {...props}></CustomeDrawer>} initialRouteName="MainScreen">
                <Drawer.Screen name="MainScreen" options={{ title: 'Home', headerShown: true }}>
                    {(props) => <MainScreen {...props}  myObject={myObject} />}
                </Drawer.Screen>
                {/* <Drawer.Screen name="MainScreen" options={{ title: 'Home', headerShown: true }} initialParams={{ myObject }} component={MainScreen} /> */}
                <Drawer.Screen name="Profile" options={{ title: 'Profile', headerShown: true }} component={Profile} />
            </Drawer.Navigator>

        </>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


