import React, { createContext, useState } from 'react';
import { ToastAndroid } from 'react-native';
import auth from '@react-native-firebase/auth';
import { LoginSuccess, SignupSuccess, invalidMail, alReadyExist, Logout } from '../constants/Messages';
import firestore from '@react-native-firebase/firestore';


export type logInProps = {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
}
const AuthContext = createContext();

const AuthProvider: React.FC<logInProps> = ({ children, navigation }) => {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    auth()
                        .signInWithEmailAndPassword(email, password)
                        .then(() => {
                            ToastAndroid.show(LoginSuccess, ToastAndroid.LONG)
                            navigation.navigate('Home')
                        })
                        .catch(error => {
                            console.log(error)
                        });
                },
                register: async (email, password, firstName, lastName, imagePick) => {
                    auth()
                        .createUserWithEmailAndPassword(email, password, firstName, lastName, imagePick)
                        .then(() => {
                            console.log('User account created & signed in!');
                            firestore()
                                .collection('userRegistered')
                                .doc(auth().currentUser.uid)
                                .set({
                                    firstName: firstName,
                                    lastName: lastName,
                                    email: email,
                                    createdAt: firestore.Timestamp.fromDate(new Date()),
                                    userImage: imagePick
                                })
                            ToastAndroid.show(SignupSuccess, ToastAndroid.LONG)
                            navigation.navigate('Login')
                        })
                        .catch(error => {
                            if (error.code === 'auth/email-already-in-use') {
                                ToastAndroid.show(alReadyExist, ToastAndroid.LONG)
                            }
                            if (error.code === 'auth/invalid-email') {
                                ToastAndroid.show(invalidMail, ToastAndroid.LONG)
                            }
                            console.error(error);
                        });
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                        ToastAndroid.show(Logout, ToastAndroid.LONG)
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
            }}>
            {children}
        </AuthContext.Provider>
    );
}



export { AuthContext, AuthProvider }