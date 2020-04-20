import React,{useState, useEffect} from 'react';
import ProfileList from '../components/ProfileSection/ProfileList'
import axios from 'axios'

const Gente = () => {

    const [data, setData] = useState({profiles:[]})
    
    useEffect(() => {
        async function getProfiles(){
           const result = await axios(
           'http://localhost:8001/api/profiles',
           );
           setData(result.data);
        }
        getProfiles()
     },[]);
     
    return (
        <div>
            <h1>Gente que tal vez conozcas</h1>
            <ProfileList profiles={data.profiles}/>
        </div>
    )
}

export default Gente
