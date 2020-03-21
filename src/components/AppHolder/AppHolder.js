import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import './AppHolder.scss';
import ProfileSaction from '../../pages/ProfileSection'

const AppHolder = () => {
    const [data, setData] = useState({ profiles: [] });

  useEffect(() => {
    async function getProfiles(){
      const result = await axios(
        //'http://localhost:8001/api/profiles',
        'https://firebasestorage.googleapis.com/v0/b/reactappdemo-utn-unidad-4.appspot.com/o/profiles.json?alt=media&token=8ef37ed3-d280-4e25-906d-d1bc908b1319'
      );
      setData(result.data);
    }
    getProfiles()
  }, []);

    return (
            <ProfileSaction profiles={data.profiles}/>
    )
}

export default AppHolder
