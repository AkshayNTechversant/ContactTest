import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigation';

const Router: React.FC = ({

}) => {
    return (
        <NavigationContainer>
       <StackNavigator/>
       </NavigationContainer>
    );
}

export default Router;