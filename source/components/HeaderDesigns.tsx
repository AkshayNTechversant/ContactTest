import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DefaultFont } from '../constants/fontFamily';

const HomeHeader: React.FC = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textStyle}>Home</Text>
        </View>
    );
}
const AddContact: React.FC = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textStyle}>Add Contact</Text>
        </View>
    );
}
const ProfileHeader: React.FC = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textStyle}>Profile</Text>
        </View>
    );
}
const ForgotHeader: React.FC = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textStyle}>Forgot PassWord</Text>
        </View>
    );
}
const SignUpHeader: React.FC = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textStyle}>Register</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        height: hp('7%'),
        width: wp('100%'),
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color:'#00a32e',
        fontSize:20,
        fontWeight:'bold',
        fontFamily: DefaultFont,
    }
})

export {HomeHeader,AddContact,ProfileHeader,ForgotHeader,SignUpHeader};