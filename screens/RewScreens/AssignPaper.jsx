import React from 'react';
import {View, StyleSheet} from 'react-native';
import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';

const AssignPaper = ({type, navigation}) => {
    return (
        <>
            <TopNav navigation={navigation}></TopNav>
            <BottomNav navigation={navigation} type={type}></BottomNav>

        </>
    );
}

const styles = StyleSheet.create({

})

export default AssignPaper;
