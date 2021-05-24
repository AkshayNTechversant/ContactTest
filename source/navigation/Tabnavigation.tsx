import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllContacts from '../screens/AllContacts';
import Profile from '../screens/Profile';
import EditContacts from '../screens/EditContacts';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = ({

}) => {
    return (
        <Tab.Navigator>
        <Tab.Screen name="Home" component={AllContacts} />
        <Tab.Screen name="Edit Contact" component={EditContacts} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
}

export default TabNavigator;