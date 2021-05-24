import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import TabNavigator from './Tabnavigation';

const Stack = createStackNavigator();

const StackNavigator: React.FC = ({

}) => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    );
}

export default StackNavigator;