import React,{useState,useEffect} from 'react'
//import axios from 'axios'
import Form from '../components/Form/Form'
import Profile from '../components/ProfileSection/Profile'
import './MiPerfil.scss'
import useFormHook from '../services/Hooks/CustomFormHook';
import { useHistory } from "react-router-dom";
import { db, auth } from '../services/firebase/firebase';


/**
 * 1 - traer especificamente el perfil loggeado - 
 * comparar el slug con el uid si hay match.
 * 2 - actualizar los tweets del usuario loggeado
 *   
 */

const MiPerfil = () => {
    
    const [ tweet, setTweet ] = useState([])
   
    const [currentUser, setCurrentUser] = useState({})
    
    const [userDocId, setUserDocId] = useState('')

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
    
     useEffect(()=>{
         async function handleTweetData(){
             
             const result = await inputs 
      
             setTweet(result)
               
          }
          handleTweetData()
      })

      useEffect(()=>{
         auth.onAuthStateChanged(authUser => {
             db.collection('profiles').onSnapshot(snapshot => {
                 if(authUser){
                    const result = snapshot.docs.map(doc => ({
                        id:doc.id,
                        slug:doc.get('slug')
                    })).filter(uid => uid.slug === authUser.uid)
                    const docIdAuthUser = result.map(userId => userId.id).join()
                    setUserDocId(docIdAuthUser)
                    //console.log(userDocId)
                    db.doc(`profiles/${docIdAuthUser}`)
                      .get()
                      .then(doc => {
                          setCurrentUser(doc.data())
                      })
                 }
             })
         })
      },[userDocId])

      const handleTweet = () => {
         db.doc(`profiles/${userDocId}`).set({
             tweets:[tweet.tweet]
         },{merge:true})
         //console.table(tweet)
         history.push("/");
      }
     
     const {inputs, handleInputChange, handleSubmit} = useFormHook(handleTweet);

    return (
        <div className='miperfil--container'>
            <h1> Mi perfil</h1>

                <Profile profile={currentUser} />
             
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
