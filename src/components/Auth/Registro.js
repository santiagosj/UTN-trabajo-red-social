import React,{useState,useEffect} from 'react'
import Form from '../Form/Form'
import {Link} from 'react-router-dom'
import useFormHook from '../Hooks/CustomFormHook';
import { useHistory } from "react-router-dom";
import { auth } from '../../firebase';

const inLineStyles={
    position: "absolute",
    top: "38px",
    left: "83px",
    fontSize: "20px"
}

/**
 * 
 * Crea usuario en db y registra el usuario para luego este se loguee
 * 
 */

const Registro = () => {

    const [ registro, setRegistro ] = useState()
    
    const history = useHistory();

     useEffect(()=>{
         
        async function handleRegistro(){
            
            const result = await inputs 
     
            setRegistro(result)
              
         }
         handleRegistro()
     })

     const handleRegistro = () => {
         console.table(registro)
         auth.userSession('createUser',registro.email ,registro.password1)
         history.push("/login");
     }

      const {inputs, handleInputChange, handleSubmit} = useFormHook(handleRegistro);

    return (
        <div>
            <Form
               signUpForm
               handleSubmit={handleSubmit}
               handleInputChange={handleInputChange}
               inputs={inputs}
            />
            <Link style={inLineStyles} to ='/login'>Iniciar Sesión</Link>
        </div>
    )
}

export default Registro
