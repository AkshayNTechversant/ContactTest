import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, ToastAndroid,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMail from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { mainAppBackgroundColor, textInputBackgroundColor } from '../constants/Colors';
import { AuthContext } from '../navigation/AuthProvider';
import ImagePicker from 'react-native-image-crop-picker';
import {SignUpHeader} from '../components/HeaderDesigns';
import { Avatar } from 'react-native-elements';


export type SignupProps = {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    navigation: undefined,
}
const SignupScreen: React.FC<SignupProps> = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useContext(AuthContext);
    const [imagePick, setImage] = useState(null)
    const imagePicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image.path);
            setImage(image.path)
        });
    }
    return (
        <View style={styles.mainContainer}>
            <SignUpHeader/>
            <ScrollView>
            <View style={styles.contentContainer}>
                <View style={styles.inputContainer}>
                    <Icon name='user' size={30} color="#5cd691" />
                    <TextInput
                        placeholder="First Name"
                        style={styles.textInputContainer}
                        showSoftInputOnFocus={true}
                        onChangeText={setFirstName} />
                </View>
                <View style={{ paddingTop: hp('4%') }}>
                    <View style={styles.inputContainer}>
                        <Icon name='user' size={30} color="#5cd691" />
                        <TextInput
                            placeholder="Last Name"
                            style={styles.textInputContainer}
                            showSoftInputOnFocus={true}
                            onChangeText={setLastName}
                        />
                    </View>
                </View>
                <View style={{ paddingTop: hp('4%') }}>
                    <View style={styles.inputContainer}>
                        <IconMail name='email' size={30} color="#5cd691" />
                        <TextInput
                            placeholder="E-mail"
                            style={styles.textInputContainer}
                            showSoftInputOnFocus={true}
                            onChangeText={setEmail}
                        />
                    </View>
                </View>
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
                        style={styles.browseImageContainer}
                        onPress={() => imagePicker()}>
                             <Icon name='file' size={25} color="#5cd691" />
                             <View style={styles.textInputContainer}>
                        <Text style={styles.textStyle}>Upload Profile Picture</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {imagePick!==null ?<View style={{paddingTop:20}}>
                    <Avatar
                    rounded
                    size="xlarge"
                    source={{
                        uri: imagePick,
                    }}
                />
                </View>:null}
                <View style={{ paddingTop: hp('4%') }}>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => register(email, password, firstName, lastName, imagePick)}>
                        <Text style={styles.textStyleRegister}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
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
        fontSize: hp('2.5%'),
        fontWeight: 'bold',
        color: 'grey',
        paddingTop:15,
    },
    textStyleRegister: {
        fontSize: hp('3%'),
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
    browseImageContainer: {
        height: hp('7%'),
        width: wp('90%'),
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: textInputBackgroundColor,
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