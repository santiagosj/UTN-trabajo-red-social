import React,{useState,useEffect} from 'react'
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
