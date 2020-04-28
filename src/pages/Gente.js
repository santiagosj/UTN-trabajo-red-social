import React,{useState, useEffect} from 'react';
import ProfileList from '../components/ProfileSection/ProfileList'
//import axios from 'axios'
import {profiles } from '../firebase/firebase'


const Gente = () => {

    const [data, setData] = useState({profiles:[]})
    
   /*useEffect(() => {
        async function getProfiles(){
           const result = await axios(
           'http://localhost:8001/api/profiles',
           );
           setData(result.data);
        }
        getProfiles()
     },[]);*/

     useEffect(() => {
         profiles.onSnapshot(snapshot => {
            const result = snapshot.docs.map(doc => ({
                id:doc.id,
              ...doc.data()
            }))
            setData({profiles:result})
          })
      }, [])

     //console.log(data)
    return (
        <div>
            <h1>Gente que tal vez conozcas</h1>
            <ProfileList profiles={data.profiles}/>
        </div>
    )
}

export default Gente