import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { mainAppBackgroundColor } from '../constants/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ForgotPassword:React.FC=({

})=>{
    return(
        <View style={styles.mainContainer}>
            <Text style={styles.textStyle}>Forgot Password</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor:mainAppBackgroundColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: hp('3%'),
        fontWeight: 'bold',
        color: '#ffff'
    },
})

export default ForgotPassword;