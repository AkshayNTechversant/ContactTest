import React , {createContext,useState} from 'react';

const UserContext = createContext();

const UserProvider: React.FC = (props) =>{
  const [userName,setUserName] = useState('')
  return(
    <UserContext.Provider value={"Hello"}>
      {props.children}
      </UserContext.Provider>
  );
}


export {UserProvider,UserContext};