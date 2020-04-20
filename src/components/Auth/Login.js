import React,{useState, useEffect} from 'react'
import Form from '../Form/Form'
import {Link} from 'react-router-dom'
import useFormHook from '../Hooks/CustomFormHook';
import { useHistory } from "react-router-dom";

const inLineStyles={
    position: "absolute",
    top: "38px",
    left: "83px",
    fontSize: "20px"
}

const Login = () => {   
    const history = useHistory();
    const [ login, setLogin ] = useState()

    useEffect(()=>{
        async function handleLoginData(){
            
            const result = await inputs 
     
            setLogin(result)
              
         }
         handleLoginData()   
     })

     const handleLogin = () => {
        console.table(login)
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
