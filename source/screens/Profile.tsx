import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { mainAppBackgroundColor } from '../constants/Colors';
import firestore from '@react-native-firebase/firestore';
import { Avatar } from 'react-native-elements';
import { AuthContext } from '../navigation/AuthProvider';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export type profileProps = {
    image: string
}
const Profile: React.FC<profileProps> = ({ }) => {
    const { logout, user, setUser } = useContext(AuthContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [imagePick, setImage] = useState('https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png')
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
                    setFirstName(documentSnapshot.data().firstName);
                    setLastName(documentSnapshot.data().lastName);
                    setImage(documentSnapshot.data().userImage);

                }
            })
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.profileContainer}>
                <Avatar
                    rounded
                    size="xlarge"
                    source={{
                        uri: imagePick,
                    }}
                />
                <Text style={styles.textStyle}>{firstName} {lastName}</Text>
                <View style={{ paddingTop: hp('4%') }}>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => logout()}>
                        <Text style={styles.textStyleLog}>LogOut</Text>
                    </TouchableOpacity>
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
    textStyle: {
        fontSize: hp('3%'),
        fontWeight: 'bold',
        color: '#033808'
    },
    textStyleLog: {
        fontSize: hp('3%'),
        fontWeight: 'bold',
        color: '#ffff'
    },
    profileContainer: {
        height: hp('50%'),
        width: wp('95%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff',
        borderRadius: 10
    },
    imageDimensions: {
        height: 100,
        width: 100
    },
    buttonContainer: {
        height: hp('7%'),
        width: wp('80%'),
        backgroundColor: '#ff5252',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default Profile;