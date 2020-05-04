import React,{useState, useEffect} from 'react';
import ProfileList from '../components/ProfileSection/ProfileList'
//import axios from 'axios'
import {db,auth } from '../services/firebase/firebase'

const Gente = () => {

    const [data, setData] = useState({profiles:[]})
    const [userSlug, setUserSlug] = useState('')
   /*useEffect(() => {
        async function getProfiles(){
           const result = await axios(
           'http://localhost:8001/api/profiles',
           );
           setData(result.data);
        }
        getProfiles()
     },[]);*/
     
      //pasar con el context the auth la lista de perfiles ya filtrada

     useEffect(() => {
         db.collection('profiles').onSnapshot(snapshot => {
            const result = snapshot.docs.map(doc => ({
                id: doc.id,
              ...doc.data()
            }))
            setData({profiles:result})
          })
          auth.onAuthStateChanged(user => {
            if(user){
                setUserSlug(user.uid)
            }
        })
      }, [])
      //console.log(userSlug)
      //console.log(data)

    return (
        <div>
            <h1>Gente que tal vez conozcas</h1>
               <ProfileList 
                  profiles={data.profiles} 
                  authUser={userSlug}
               />
        </div>
    )
}

export default Gente
