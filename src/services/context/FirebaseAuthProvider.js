import React,{createContext} from 'react'
import { auth } from '../firebase';

export const firebaseAuth = createContext()

const handleSignup = (email,password) => {
    console.log('context funcionando handleSignup')
    auth.userSession('createUser',email,password)
}

const handleSignIn = (email,password) => {
    console.log('context funcionando handleSignin')
    auth.userSession('signIn', email, password)
}

const handleSignOut = () => {
    console.log('usuario loeged out')
    auth.logout()
}

const FirebaseAuthProvider = (props) => { 
    


    return (
        <firebaseAuth.Provider
            value={{
               handleSignup,
               handleSignIn,
               handleSignOut
            }}>
      {props.children}
    </firebaseAuth.Provider>
    )
}

export default FirebaseAuthProvider
