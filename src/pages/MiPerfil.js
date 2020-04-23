import React,{useState,useEffect} from 'react'
//import axios from 'axios'
import Form from '../components/Form/Form'
import Profile from '../components/ProfileSection/Profile'
import './MiPerfil.scss'
import useFormHook from '../components/Hooks/CustomFormHook';
import { useHistory } from "react-router-dom";


const MiPerfil = () => {
    const [data, setData] = useState('')
    
    const history = useHistory();

    /*useEffect(() => {
        async function getProfiles(){
           const result = await axios(
           'http://localhost:8001/api/miperfil',
           );
           setData(result.data);
        }
        getProfiles()
     },[]);*/
    
     const [ tweet, setTweet ] = useState()

     useEffect(()=>{
         async function handleTweetData(){
             
             const result = await inputs 
      
             setTweet(result)
               
          }
          handleTweetData()
          
      })

      const handleTweet = () => {
         console.table(tweet)
         history.push("/");
     }
     
     const {inputs, handleInputChange, handleSubmit} = useFormHook(handleTweet);

    return (
        <div className='miperfil--container'>
            <h1> Mi perfil</h1>

                <Profile profile={data} />
             
                <Form 
                    twitForm
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
                    inputs={inputs}
                />

             <p>Sigues a:</p>
        </div>
    )
}

export default MiPerfil
