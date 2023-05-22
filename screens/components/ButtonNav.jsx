import { Button } from '@react-native-material/core';
import Svg, { Path } from 'react-native-svg';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Linking, StyleSheet, StatusBar, Text, TextInput, TouchableOpacity, View, ScrollView, ToastAndroid, Animated } from 'react-native';
// images
import styles from './styles';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginPage from "../Test";
import Profile from '../Profile';
import MainScreen from '../MainScreen';
const Tab = createBottomTabNavigator();
export default function BottomNav(){
    return (
        <View style={styles.container}>
            {/* <Tab.Navigator>
                <Tab.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            </Tab.Navigator> */}
        </View>
    )
}