import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, TouchableOpacity, Alert, TextInput, ToastAndroid } from 'react-native';
import { mainAppBackgroundColor } from '../constants/Colors';
import firestore from '@react-native-firebase/firestore';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const EditContacts: React.FC = ({

}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const addUser = () => {
        firestore()
            .collection('users')
            .add({
                name: name,
                Phone: phone,
            })
            .then(() => {
                ToastAndroid.show("User Added successfully", ToastAndroid.LONG)
                console.log('User added!');
            });
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.centeredView}>
                <View style={styles.centeredView}>
                    <View style={styles.mainView}>
                        <TextInput
                            placeholder="Name"
                            style={styles.textInputContainer}
                            onChangeText={setName} />
                        <View style={{ paddingTop: 20 }}>
                            <TextInput
                                placeholder="Phone Number"
                                style={styles.textInputContainer}
                                onChangeText={setPhone} />
                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => addUser()}
                            >
                                <Text style={styles.textStyle}>Add User</Text>
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

export default EditContacts;