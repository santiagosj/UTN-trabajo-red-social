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

    const [uploadValue, setUploadVelue] = useState()

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

     const handleFile = (e) => {
        const file = e.target.files[0]

        const storageRef = storage.ref(`foto_profiles/${file.name}`)

        const task = storageRef.put(file)

        task.on('state_changed',(snapshot)=>{
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            setUploadVelue(percentage)
        },
        (error)=>{
             console.log(error)},
        ()=>{
             storageRef.getDownloadURL().then((url)=> {
                //console.log(url)
                setFile(url)  
            })             
        })
        
     }

    // console.log(fileName)

     const handleSettings = () => {
        
        /*const path = settings.img
        
        const fileName = path.replace(/^.*\\/, "");*/

        db.doc('profiles/' + userDocId)
          .set({
              name:settings.firstName + ' ' + settings.lastName,
              email:settings.email,
              description:settings.description,
              phone:settings.phone,
              address:settings.ciudad,
              img: fileName
          },{merge:true}).then(() => {
              history.push('/MiPerfil')
          })
     
        console.log(fileName)

     }

     const {inputs, handleInputChange, handleSubmit} = useFormHook(handleSettings);

    return (
        <div>
            <h1>Settings</h1>
            <Form
                settings 
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                handleOnChangeFile={handleFile}
                inputs={inputs}
                progress={uploadValue}
            />
        </div>
    )
}

export default Settings
