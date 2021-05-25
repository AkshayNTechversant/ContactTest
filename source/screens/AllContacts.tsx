import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, Modal, Pressable, Alert, TextInput } from 'react-native';
import { mainAppBackgroundColor } from '../constants/Colors';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconD from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const AllContacts: React.FC = ({ }) => {
    const [users, setUsers] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        subscriber();
    });
    const getData = async () => {
        const userDocuments = await firestore().collection('users').doc(data().id).get();
        console.log(userDocuments);
    };
    const subscriber = () => {
        firestore()
            .collection('users')
            .onSnapshot(docs => {
                let Users = [];
                docs.forEach(doc => {
                    Users.push(doc.data())
                    console.log("ID", doc.data())
                })
                setUsers(Users);
            })
    };
    const editUser = () => {
        firestore()
            .collection('users')
            .doc()
            .update({
                name: name,
                Phone: phone,
            })
            .then(() => {
                console.log('User updated!');
            });
    }

    return (
        <View style={styles.mainContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    {users.map((user, index) =>
                        <View style={styles.cardContainer} key={index} onPress={() => setModalVisible(true)}>
                            <Text style={styles.cardTextStyle}>{user.name}</Text>
                            <Text style={styles.cardTextStyle}>{user.Phone}</Text>
                            <View style={styles.iconContainer}>
                                <TouchableOpacity>
                                    <Icon name='edit' size={30} color={'green'} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <IconD name='delete' size={30} color={'red'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </View>
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TextInput
                                    placeholder="Name"
                                    style={styles.textInputContainer} />
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Hide Modal</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </View>
            </ScrollView>
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
    textStyle: {
        fontWeight: 'bold',
        color: '#ffff',
        fontSize: 30
    },
    cardTextStyle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    iconContainer: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingRight: wp('10%'),
        flexDirection: 'row',
        padding: 10
    },
    cardContainer: {
        backgroundColor: "#ffff",
        height: hp('15%'),
        width: wp('90%'),
        margin: 10,
        borderRadius: 10,
        paddingLeft: 20,
        justifyContent: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
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
        elevation: 5
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
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    textInputContainer: {
        height: hp('10%'),
        width: wp('80%'),
        backgroundColor: 'red'
    }
})

export default AllContacts;