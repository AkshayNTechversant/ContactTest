import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import AllContacts from '../screens/AllContacts';
import Profile from '../screens/Profile';
import AddContacts from '../screens/AddContacts';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = ({

}) => {
    return (
        <Tab.Navigator  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Add Contact') {
              iconName = focused ? 'phone-square' : 'phone-square' ;
            }
            else if (route.name === 'Profile') {
              iconName = focused ? 'user-circle' : 'user-circle';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={AllContacts} />
        <Tab.Screen name="Add Contact" component={AddContacts} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
}

export default TabNavigator;