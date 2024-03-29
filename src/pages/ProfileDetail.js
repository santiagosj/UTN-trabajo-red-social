import React,{useState,useEffect} from 'react'
import './ProfileDetail.scss'
import {Link} from 'react-router-dom'
//import axios from 'axios'
import { db } from '../services/firebase/firebase'
import Profile from '../components/ProfileSection/Profile'

const ProfileDetail = ({
     match
    }) => {
    const [ data, setData ] = useState({})
  
   /* useEffect(() => {
        async function getProfiles(){
           const result = await axios(
            `http://localhost:8001/api/profiles/${match.params.id}`,
           );
           setData(result.data);
        }
        getProfiles()
     }, [match]);*/
     
     useEffect(() => {
       db.doc(`profiles/${match.params.id}`)
       .get()
          .then( doc => {
           setData(doc.data())
       })

     }, [match])     

      //console.log(data)
    return (
        <div className='profileDetail--container'>
                      
                   <Profile 
                       profile={data} 
                   />

                   <div>
                       <Link to={'/profiles'}> Volver a Perfiles</Link>
                   </div>
        </div>
    )
}

export default ProfileDetail

