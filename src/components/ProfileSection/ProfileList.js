import React,{useState, useEffect} from 'react'
import './ProfileSection.scss'
import ProfileCard from './ProfileCard'
import Follow from '../Follow/Follow'
import {Link} from 'react-router-dom'
import { auth } from '../../services/firebase/firebase'
//traer acá user.uid y compararlo con profile.slug

 const ProfileList = ({profiles}) => {   

     const [userSlug, setUserSlug] = useState()
    
     useEffect(()=> {
        auth.onAuthStateChanged(user => {
            if(user){
                setUserSlug(user.uid)
            }
        })
     },[])
    
      return (

                <section>
                   
                    <h2>Perfiles</h2>    
                     <div className="profiles--container">
                        {profiles.map(profile => (

                            profile.slug !== userSlug &&

                            <div key={profile.id} className="profile-card">
                                <Link to={`/profiles/${profile.id}`}>
                                     <ProfileCard 
                                        imgPreview={profile.img}
                                        profile={profile}
                                     />
                                </Link>
                                <Follow 
                                    nombre={profile.name}
                                />
                            </div>
                        ))}
                     </div>
                     

                </section>
             )
         }

export default ProfileList

/**
 * 
 * grid de perfiles
 * 
 */