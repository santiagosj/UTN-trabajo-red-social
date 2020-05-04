import React,{useState, useEffect} from 'react'
import Form from '../components/Form/Form'
import useFormHook from '../services/Hooks/CustomFormHook';
import { useHistory } from "react-router-dom";
import { db, auth } from '../services/firebase/firebase';

const Settings = () => {
    const [ settings, setSettings ] = useState()

    const [userDocId, setUserDocId] = useState('')

    const history = useHistory();

    useEffect(()=>{
        auth.onAuthStateChanged(authUser => {
            if(authUser){
                db.collection('profiles').onSnapshot(snapshot => {
                    const result = snapshot.docs.map(doc => ({
                        id: doc.id,
                        slug:doc.get('slug')
                    })).filter(uid => uid.slug === authUser.uid)
                    const docIdAuthUser = result.map(userId => userId.id).join()
                    setUserDocId(docIdAuthUser)
                })
            }
        })
    },[])

    //console.log(userDocId)

    useEffect(()=>{
        async function handleSettingsData(){
            
            const result = await inputs 
     
            setSettings(result)
              
         }
         handleSettingsData()
     })
     
     const handleSettings = () => {

        db.doc('profiles/' + userDocId)
          .set({
              name:settings.firstName + ' ' + settings.lastName,
              email:settings.email,
              description:settings.description,
              phone:settings.phone,
              address:settings.ciudad
          },{merge:true}).then(doc => {
              console.log(doc)
              history.push('/MiPerfil')
          })
     
        console.table(settings)

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
