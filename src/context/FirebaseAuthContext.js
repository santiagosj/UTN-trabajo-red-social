import React,{createContext,useState, useEffect} from 'react'
import { firebase } from '../firebase';

export const {
    Provider,
    Consumer
  } = createContext();

const FirebaseAuthContext = ({children}) => {

    const [logedIn, setLogedIn] = useState(false)

    useEffect(()=>{
        firebase.auth.onAuthStateChanged(userLog => userLog && setLogedIn(userLog))
    },[])

    return (
        <Provider value={{
            logedIn,
            destroySession:setLogedIn(false)
        }}>
          {children}
        </Provider>
    )
}

export default FirebaseAuthContext