import { Text, View } from "react-native";
import MainScreen from './MainScreen';
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
export default function Submission({navigation}) {
    return (
        <>
            <TopNav navigation={navigation}></TopNav>
            <View>
                <Text>
                    This is Submission Details Screen
                </Text>

            </View>
            <BottomNav navigation={navigation}></BottomNav>
        </>
    )
}