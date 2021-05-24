import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeHeader: React.FC = ({

}) => {
    return (
        <View style={styles.mainContainer}>
            <Text>TYPESCRIPT</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 60,
        width: '100%',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeHeader;