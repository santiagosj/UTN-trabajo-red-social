import React,{useState, useEffect, useContext} from 'react'
import Form from '../Form/Form'
import {Link} from 'react-router-dom'
import useFormHook from '../../services/Hooks/CustomFormHook';
import { useHistory } from "react-router-dom";
import {firebaseAuth} from '../../services/context/FirebaseAuthProvider'

const inLineStyles={
    position: "absolute",
    top: "38px",
    left: "83px",
    fontSize: "27px",
    color: "white",
    background: "black",
    textDecoration: "none"
}

const Login = () => {   
    const history = useHistory();
    const [ login, setLogin ] = useState()

    const {handleSignIn} = useContext(firebaseAuth)

    useEffect(()=>{
        async function handleLoginData(){
            
            const result = await inputs 
     
            setLogin(result)
              
         }
         handleLoginData()   
     })

     const handleLogin = () => {
        console.table(login)
        handleSignIn(login.email, login.password1)
    
        history.push("/");
    }

     const {inputs, handleInputChange, handleSubmit} = useFormHook(handleLogin);

    return (
        <div>
            <Form
               signInForm
               handleSubmit={handleSubmit}
               handleInputChange={handleInputChange}
               inputs={inputs}
            />
            <Link style={inLineStyles} to ='/signup'>Registrarse</Link>
        </div>
    )
}

export default Login
