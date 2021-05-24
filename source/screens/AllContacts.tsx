import React from 'react';
import { View, Text, Button , StyleSheet } from 'react-native';
import { mainAppBackgroundColor } from '../constants/Colors';

const AllContacts:React.FC=({

})=>{
    return(
        <View style={styles.mainContainer}>
            <Text>All Contacts</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor:mainAppBackgroundColor,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AllContacts;