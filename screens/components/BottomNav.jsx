import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon, Image } from '@rneui/themed';
import { Screen } from 'react-native-screens';
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const screenWidth = Dimensions.get('window').width;


export default function BottomNav({ props,type, navigation }) {
    
    var iniScreen = ""
    if(type=='rew'){
        iniScreen = 'RewMainScreen'
    }
    else{
        iniScreen = 'MainScreen'
    }
    return (
        <View style={styles.bottomNav}>
            <TouchableOpacity style={{ zIndex: 1000 }} onPress={() => { navigation.navigate('MainScreen') }}>
                <Icon size={30} name="home" color="green" />
            </TouchableOpacity>
            <TouchableOpacity style={{ zIndex: 1000 }} onPress={() => { navigation.navigate('Submission') }}>
                <Icon size={30} name="article" color="green" />
            </TouchableOpacity>
            <TouchableOpacity style={{ zIndex: 1000 }} onPress={() => { navigation.navigate('Profile') }}>
                <Icon size={30} name="person" color="green" />
            </TouchableOpacity>
            <TouchableOpacity style={{ zIndex: 1000 }} onPress={() => { navigation.navigate('Profile') }}>
                <Icon size={30} name="settings" color="green" />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-evenly',
        borderTopWidth: 2,
        borderColor: 'green',
        width: screenWidth,
        paddingBottom: 10
    }

});
