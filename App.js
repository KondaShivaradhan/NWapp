import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './screens/Signup';
import LoginPage from './screens/Test';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AfterLogin from './screens/AfterLogin';
const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login', headerShown: false }} />
        {/* <Stack.Screen name="test" component={LoginPage} options={{ title: 'Login', headerShown: false }} /> */}
        <Stack.Screen name="signup" component={Signup} options={{ title: 'Registration', headerShown: false }} />
        <Stack.Screen name="afterlog" component={AfterLogin} options={{ title: 'AfterLogin', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
