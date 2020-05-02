import React,{useState, useEffect, useContext} from 'react'
import Form from '../Form/Form'
import {Link} from 'react-router-dom'
import useFormHook from '../../services/Hooks/CustomFormHook';
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

const Registro = () => {

    const [ registro, setRegistro ] = useState()

    const {handleSignup} = useContext(firebaseAuth)

     useEffect(()=>{
         
        async function handleRegistro(){
            
            const result = await inputs 
     
            setRegistro(result)
              
         }
         handleRegistro()
     })

     const handleRegistro = () => {
         console.table(registro)
         handleSignup(registro.email, registro.password1, registro.firstName, registro.lastName)
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
