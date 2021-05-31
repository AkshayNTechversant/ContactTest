import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Pressable, Alert, TextInput, FlatList, ToastAndroid } from 'react-native';
import { mainAppBackgroundColor } from '../constants/Colors';
import firestore, { firebase } from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconD from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Update, Delete } from '../constants/Messages';
import { HomeHeader } from '../components/HeaderDesigns';
import Loader from '../components/Loader';
import { AuthContext } from '../navigation/AuthProvider';
import { DefaultFont } from '../constants/fontFamily';
export type allContactProps = {
    usersList: string,
    userArray: string,
    visible: boolean,
}
const AllContacts: React.FC<allContactProps> = ({ route }) => {
    const [usersList, setUsers] = useState('');
    const { user, setUser } = useContext(AuthContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [contactId, setContactId] = useState('');
    const [loader, setLoader] = useState(false);
    const [collectionName, setCollectionName] = useState('');
    useEffect(() => {
        subscriber();

    }, []);
    const subscriber = async () => {
        await firestore()
            .collection(user.email)
            .onSnapshot(data =>
                setUsers(data.docs))
        console.log(usersList)
    };
    const updateContact = () => {
        firestore()
            .collection(user.email)
            .doc(contactId)
            .set({
                name: name,
                Phone: phone
            })
            .then(() => {
                ToastAndroid.show(Update, ToastAndroid.LONG)
                setName('');
                setPhone('');
                setModalVisible(!modalVisible)
            });
    };
    const deleteContact = () => {
        firestore()
            .collection(user.email)
            .doc(contactId)
            .delete()
            .then(() => {
                console.log("DEELTED")
            });

    }
    const renderItem = (item) => {
        return (
            <View>
                <View style={styles.cardContainer}>
                    <Text style={styles.cardTextStyle}>{item._data.name}</Text>
                    <Text style={styles.cardTextStyle}>{item._data.Phone}</Text>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={() => [setModalVisible(true), setContactId(item.id)]}>
                            <Icon name='edit' size={30} color={'green'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => [deleteContact(), setContactId(item.id)]}>
                            <IconD name='delete' size={30} color={'red'} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );

    }
    return (
        <View style={styles.mainContainer}>
            <HomeHeader />
            <FlatList
                data={usersList}
                renderItem={item => renderItem(item.item)}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
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
                                style={styles.textInputContainer}
                                value={name}
                                onChangeText={(val) => setName(val)} />
                            <View style={{ paddingTop: 20 }}>
                                <TextInput
                                    placeholder="Phone Number"
                                    style={styles.textInputContainer}
                                    value={phone}
                                    keyboardType="numeric"
                                    onChangeText={(val) => setPhone(val)}
                                />
                            </View>
                            <View style={{ paddingTop: 20 }}>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => updateContact()}>
                                    <Text style={styles.textStyle}>Update </Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            <Loader visible={loader} />
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
        fontSize: 20,
        fontFamily: DefaultFont
    },
    cardTextStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: DefaultFont
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

export default AllContacts;