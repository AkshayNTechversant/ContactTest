import react , {createContext,useState} from 'react';
import auth from '@react-native-firebase/auth';
import React from 'react';

export type Props = {
    email: string,
    password: string
}
 const AuthContext = createContext();
 
 const AuthProvider :React.FC= ({children})=>{
     const [user,setUser] = useState(null);
     return(
         <AuthContext.Provider
         value={{
             user,
             setUser,
             login:async(email,password)=>{
                 try{
                     await auth.signInWithEmailandPassword(email,password);
                 }
                 catch(error){
                     console.log(error);
                 }
             },
             register:async(email,password)=>{
                 try{
                    await auth.createUserWithEmailAndPassword(email,password);
                 }
                 catch(error){
                    console.log(error);
                }
             },
             logout:async()=>{
                try{
                    await auth.signOut();
                 }
                 catch(error){
                    console.log(error);
                }
             }
             }}>
             </AuthContext.Provider>
     );
 }



 export {AuthContext,AuthProvider}