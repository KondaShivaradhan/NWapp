import { Linking, StyleSheet, StatusBar, Text, TextInput, TouchableOpacity, View, ScrollView, ToastAndroid, Animated } from 'react-native';
import styles from './styles';
import { Icon, Image } from '@rneui/themed';
export default function TopNav({ navigation }) {
    return (
        <>
           <StatusBar backgroundColor={'black'}></StatusBar>
            <View style={styles.navbar}>
                <TouchableOpacity style={{zIndex:1000}} onPress={() => { navigation.openDrawer() }}>
                    <Icon size={40} name="menu" color="green" />
                </TouchableOpacity>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={{uri:'https://raw.githubusercontent.com/KondaShivaradhan/cloud/main/nwlogo.png'}}
                    />
                </View>

            </View>
        </>
    )
}
