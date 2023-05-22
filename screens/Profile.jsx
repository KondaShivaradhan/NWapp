import { Text, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './MainScreen';
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
export default function Profile() {
    return (
        <>
            <View>
                <Text>
                    This is profile Page
                </Text>
          
            </View>
        </>
    )
}