import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMail from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { mainAppBackgroundColor, mainIconColor, textInputBackgroundColor } from '../constants/Colors';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../navigation/AuthProvider';
import Loader from '../components/Loader';
import { LoginSuccess } from '../constants/Messages';

export type UserProps = {
    userName: string;
    passWord: String;
    navigation: undefined
};
const LoginScreen: React.FC<UserProps> = ({ navigation }) => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loader, setLoader] = useState(false);
    return (
        <View style={styles.mainContainer}>
            <View style={styles.contentContainer}>
                <View style={styles.inputContainer}>
                    <IconMail name='email' size={30} color={mainIconColor} />
                    <TextInput
                        placeholder="E-mail"
                        style={styles.textInputContainer}
                        showSoftInputOnFocus={true}
                        onChangeText={setEmail} />
                </View>
                <View style={{ paddingTop: hp('4%') }}>
                    <View style={styles.inputContainer}>
                        <Icon name='lock' size={30} color={mainIconColor} />
                        <TextInput
                            placeholder="Password"
                            style={styles.textInputContainer}
                            showSoftInputOnFocus={true}
                            secureTextEntry={true}
                            onChangeText={setPassword} />
                    </View>
                </View>
                <View style={{ paddingTop: hp('4%') }}>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => login(email, password)}>
                        <Text style={styles.textStyle}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.registerNavigation}
                        onPress={() => navigation.navigate('Forgot Password')}>
                        <Text style={styles.textStyleRegisterSignup}>Forgot Password </Text>
                    </TouchableOpacity>
                    <View style={styles.registerNavigation}>
                        <Text style={styles.textStyleRegister}>Not a User ? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                            <Text style={styles.textStyleRegisterSignup}>SignUp </Text>
                        </TouchableOpacity>

                    </View>
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
        paddingTop: hp('40%'),
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

export default LoginScreen;