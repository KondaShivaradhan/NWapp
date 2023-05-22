import { Text, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './MainScreen';
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
export default function Profile({navigation}) {
    return (
        <>
            <TopNav navigation={navigation}></TopNav>
            <View>
                <Text>
                    This is profile Page same for all
                </Text>

            </View>
            <BottomNav navigation={navigation}></BottomNav>
        </>
    )
}