import React,{useState, useEffect} from 'react'
import Form from '../components/Form/Form'
import useFormHook from '../services/Hooks/CustomFormHook';
import { useHistory } from "react-router-dom";

const Settings = () => {
    const [ settings, setSettings ] = useState()

    const history = useHistory();

    useEffect(()=>{
        async function handleSettingsData(){
            
            const result = await inputs 
     
            setSettings(result)
              
         }
         handleSettingsData()
     })
     
     const handleSettings = () => {
        console.table(settings)
        history.push('/MiPerfil')
    }

     const {inputs, handleInputChange, handleSubmit} = useFormHook(handleSettings);

    return (
        <div>
            <h1>Settings</h1>
            <Form
                settings 
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                inputs={inputs}
            />
        </div>
    )
}

export default Settings
