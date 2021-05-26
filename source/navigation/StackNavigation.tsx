import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import TabNavigator from './Tabnavigation';
import ForgotPassword from '../screens/ForgotPassword';

const Stack = createStackNavigator();

const AuthStack: React.FC = ({

}) => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Forgot Password" component={ForgotPassword} options={{ headerShown: false}}/>
      </Stack.Navigator>
    );
}
const Appstack: React.FC = ({

}) => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false}}/>
      </Stack.Navigator>
    );
}

export  {Appstack,AuthStack};