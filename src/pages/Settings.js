import React,{useState, useEffect} from 'react'
import Form from '../components/Form/Form'
import useFormHook from '../services/Hooks/CustomFormHook';
import { useHistory } from "react-router-dom";
import { db, auth, storage } from '../services/firebase/firebase';

/**
 * subir desde acá la imagen
 */

const Settings = () => {
    const [ settings, setSettings ] = useState()

    const [userDocId, setUserDocId] = useState('')

    const [fileName, setFile] = useState('')

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
     
     const handleSettings = (e) => {
        
        /*const path = settings.img
        
        const fileName = path.replace(/^.*\\/, "");*/
        
        const file = e.target.files[0]

        const storageRef = storage.ref(`foto_profiles/${file.name}`)

        const task = storageRef.put(file)

        task.on('state_changed',(error)=>{console.log(error)},()=>{setFile(task.snapshot.downloadURL)})

        db.doc('profiles/' + userDocId)
          .set({
              name:settings.firstName + ' ' + settings.lastName,
              email:settings.email,
              description:settings.description,
              phone:settings.phone,
              address:settings.ciudad,
              img: fileName
          },{merge:true}).then(doc => {
              console.log(doc)
              history.push('/MiPerfil')
          })
     
        console.log(storageRef.name, fileName)

     }

     const {inputs, handleInputChange, handleSubmit} = useFormHook(handleSettings);

    return (
        <div>
            <h1>Settings</h1>
            <Form
                settings 
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                handleOnChangeFile={handleSettings}
                inputs={inputs}
            />
        </div>
    )
}

export default Settings
