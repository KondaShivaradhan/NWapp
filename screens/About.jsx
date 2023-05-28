import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';
import { Image } from '@rneui/themed';
import { ScrollView } from 'react-native-gesture-handler';

const About = ({ navigation, type, Udata, rewData }) => {
    return (
        <>
            <TopNav navigation={navigation}></TopNav>
            <ScrollView>
            <View style={{marginTop:10,flexDirection:'column',justifyContent:'center',alignItems:'center', borderRadius:25,elevation:2}}>
                <Image source={{ uri: 'https://www.mbacentral.org/wp-content/uploads/2020/01/Northwest-Missouri-State-University-logo-2048x647.jpg' }} style={{ height: 100, width: Dimensions.get('screen').width - 30 }}>

                </Image>
            </View>
            <View>
                <Text style={styles.allam}>
                    The NWConference 2023 app aims to provide a convenient platform for researchers to access and view research papers submitted specifically for the NWConference in 2023. By developing this Android app, researchers will have easy access to a centralized repository of conference papers, enhancing their ability to stay updated with the latest research in their respective fields.
                </Text>
                <Text style={styles.allam}>
                    NWConference 2023 app is poised to significantly improve the accessibility, collaboration, and overall experience for researchers attending the conference. By leveraging the power of technology, the app will contribute to the success and growth of the organization and establish a positive reputation within the research community.
                </Text>
            </View>
            </ScrollView>
            <BottomNav navigation={navigation} type={type}></BottomNav>

        </>
    );
}

const styles = StyleSheet.create({
    allam: {
        fontSize: 16,
        padding:15,
        margin: 5,
        textAlign:'justify'
    }
})

export default About;
