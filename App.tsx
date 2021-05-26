import React from 'react';
import { Button, Text, View } from 'react-native';
import Router from './source/navigation/Router';
import {AuthProvider} from './source/navigation/AuthProvider';


const App: React.FC = ({
}) => {
  return (  
    <AuthProvider>
     <Router/>
     </AuthProvider>
  );
};

export default App;