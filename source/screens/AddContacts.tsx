import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ToastAndroid } from 'react-native';
import { mainAppBackgroundColor } from '../constants/Colors';
import firestore from '@react-native-firebase/firestore';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AddContact } from '../components/HeaderDesigns';
import { AuthContext } from '../navigation/AuthProvider';
import {DefaultFont} from '../constants/fontFamily';

export type addProps = {
    user: string,
    name: string,
    phone: string,
}
const EditContacts: React.FC<addProps> = ({

}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const { user, setUser } = useContext(AuthContext);
    useEffect(() => {
        getUser();
    }, []);
    const getUser = () => {
        firestore()
            .collection('userRegistered')
            .doc(user.uid)
            .get()
            .then((documentSnapshot) => {
                if (documentSnapshot.exists) {
                    console.log('UserData', documentSnapshot.data());
                    setCollectionName(documentSnapshot.data().email)
                }
            })
    }
    const addUser = () => {
        console.log("ID", user.email);
        firestore()
            .collection(user.email)
            .add({
                name: name,
                Phone: phone,
            })
            .then(() => {
                ToastAndroid.show("User Added successfully", ToastAndroid.LONG)
                setName('');
                setPhone('');
                console.log('User added!');
            });
    }
    return (
        <View style={styles.mainContainer}>
            <AddContact />
            <View style={styles.centeredView}>
                <View style={styles.centeredView}>
                    <View style={styles.mainView}>
                        <TextInput
                            placeholder="Name"
                            style={styles.textInputContainer}
                            value={name.toString()}
                            onChangeText={(val)=>setName(val)} />
                        <View style={{ paddingTop: 20 }}>
                            <TextInput
                                placeholder="Phone Number"
                                style={styles.textInputContainer}
                                value={phone.toString()}
                                keyboardType="numeric"
                                onChangeText={(val)=>setPhone(val)} />
                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => addUser()}
                            >
                                <Text numberOfLines={2} style={styles.textStyle}>Add Contact </Text>
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
        textAlign: "center",
        fontFamily: DefaultFont
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontFamily: DefaultFont
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