import React from 'react'
import './ProfileSection.scss'
import ProfileCard from './ProfileCard'
import Follow from '../Follow/Follow'
import {Link} from 'react-router-dom'

 const ProfileList = ({profiles}) => {   
      
      return (

                <section>
                   
                    <h2>Perfiles</h2>    
                     <div className="profiles--container">
                        {profiles.map(profile => (

                           profile.role === 'guest' && 
                         
                            <div key={profile.id} className="profile-card">
                                <Link to={`/profiles/${profile.id}`}>
                                     <ProfileCard 
                                       // imgPreview={require(`../../assets/${profile.img}`)}
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