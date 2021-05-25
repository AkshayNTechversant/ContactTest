import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMail from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { mainAppBackgroundColor, textInputBackgroundColor } from '../constants/Colors';
import auth from '@react-native-firebase/auth';
import { RouteStackParamList } from '../navigation/RouteParamList';
import { AuthContext } from '../navigation/AuthProvider';

export type SignupProps = {
    email: string,
    password: string,
    navigation: undefined,
}
const SignupScreen: React.FC<SignupProps> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const {register} = useContext(AuthContext);
    const register = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.contentContainer}>
                <View style={styles.inputContainer}>
                    <Icon name='user' size={30} color="#5cd691" />
                    <TextInput
                        placeholder="Username"
                        style={styles.textInputContainer}
                        showSoftInputOnFocus={true}
                        onChangeText={setEmail} />
                </View>
                {/* <View style={{ paddingTop: hp('4%') }}>
                    <View style={styles.inputContainer}>
                        <IconMail name='email' size={30} color="#5cd691" />
                        <TextInput
                            placeholder="Email"
                            style={styles.textInputContainer}
                            showSoftInputOnFocus={true} 
                          
                            />
                    </View>
                </View> */}
                {/* <View style={{ paddingTop: hp('4%') }}>
                    <View style={styles.inputContainer}>
                        <Icon name='mobile-phone' size={30} color="#5cd691" />
                        <TextInput
                            placeholder="Phone Number"
                            style={styles.textInputContainer}
                            showSoftInputOnFocus={true} 
                            />
                    </View>
                </View> */}
                <View style={{ paddingTop: hp('4%') }}>
                    <View style={styles.inputContainer}>
                        <Icon name='lock' size={30} color="#5cd691" />
                        <TextInput
                            placeholder="Password"
                            style={styles.textInputContainer}
                            showSoftInputOnFocus={true}
                            onChangeText={setPassword}
                            secureTextEntry={true} />
                    </View>
                </View>
                <View style={{ paddingTop: hp('4%') }}>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => register()}>
                        <Text style={styles.textStyle}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        height: hp('100%'),
        width: wp('100%'),
        backgroundColor: mainAppBackgroundColor,
        alignItems: 'center'
    },
    contentContainer: {
        height: hp('100%'),
        width: wp('100%'),
        paddingTop: hp('10%'),
        alignItems: 'center'
    },
    backgroundImage: {
        height: 100,
        width: 100,
        resizeMode: 'cover',
    },
    textStyle: {
        fontSize: hp('3%'),
        fontWeight: 'bold',
        color: '#ffff'
    },
    textStyleRegister: {
        fontSize: hp('1.5%'),
        fontWeight: 'bold',
        color: '#ffff'
    },
    textStyleRegisterSignup: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
        color: '#ffff',
        paddingLeft: wp('2%')
    },
    textInputContainer: {
        height: hp('7%'),
        width: wp('80%'),
        paddingLeft: wp('5%'),
        fontSize: hp('3%'),
    },
    inputContainer: {
        height: hp('7%'),
        width: wp('90%'),
        flexDirection: 'row',
        backgroundColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: textInputBackgroundColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        height: hp('7%'),
        width: wp('80%'),
        backgroundColor: '#217a5a',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerNavigation: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SignupScreen;