import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ToastAndroid } from 'react-native';
import { mainAppBackgroundColor } from '../constants/Colors';
import auth from '@react-native-firebase/auth';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {ForgotHeader} from '../components/HeaderDesigns';

export type forgotProps = {
    email: string,
}
const ForgotPassword: React.FC<forgotProps> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const onSubmitPress = () => {
        if (email !== '') {
            auth()
                .sendPasswordResetEmail(email)
                .then(() => {
                    ToastAndroid.show("Please check your e-mail", ToastAndroid.LONG)
                    navigation.navigate('Login')
                })
                .catch(error => {
                    console.log(error);

                });
        }
        else {
            ToastAndroid.show("Please Enter an E-mail", ToastAndroid.LONG)
        }
    }
    return (
        <View style={styles.mainContainer}>
            <ForgotHeader/>
            <View style={styles.centeredView}>
                <View style={styles.centeredView}>
                    <View style={styles.mainView}>
                        <TextInput
                            placeholder="Email"
                            style={styles.textInputContainer}
                            onChangeText={setEmail} />
                        <View style={{ paddingTop: 20 }}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => onSubmitPress()}
                            >
                                <Text style={styles.textStyle}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: mainAppBackgroundColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    mainView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "#ffff",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    textInputContainer: {
        height: hp('7%'),
        width: wp('80%'),
        backgroundColor: 'lightgreen',
        padding: 10,
        borderRadius: 20,
        fontSize: 15
    }
})

export default ForgotPassword;