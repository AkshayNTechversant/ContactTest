import React from 'react';
import { View, Text, Button , StyleSheet } from 'react-native';
import { mainAppBackgroundColor } from '../constants/Colors';

const Profile :React.FC=({

})=>{
    return(
        <View style={styles.mainContainer}>
            <Text>Profile</Text>
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

export default Profile;