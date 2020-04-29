import React from 'react'
import Image from '../Image/Image'

const ProfileCard = ({
   imgPreview,
   profile,
   ...props
}) => {

    return (
      
             
            <div className='profile--box'>

                 <div className='profile--image'>
                         
                       <Image 
                          imgSrc={imgPreview}
                          alt={profile.name}
                        />

                </div>
                                            
                <div>
                    <h3> {profile.name} </h3> 
                    <span>ver perfil</span> 
                </div>
                            
            </div> 
            
       
    )
}

export default ProfileCard
