import React, { useState, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack, Appstack } from './StackNavigation';
import { AuthContext } from '../navigation/AuthProvider';
import auth from '@react-native-firebase/auth';

export type AuthProps = {
    user: string
}
const Router: React.FC<AuthProps> = ({ }) => {
    const [initializing, setInitializing] = useState(true);
    const { user, setUser } = useContext(AuthContext);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
    if (initializing) return null;

    return (
        <NavigationContainer>
            { user ? <Appstack /> : <AuthStack />}
        </NavigationContainer>
    );
}

export default Router;