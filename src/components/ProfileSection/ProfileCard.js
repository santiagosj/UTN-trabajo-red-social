import React from 'react'
import Image from '../Image/Image'

const ProfileCard = ({
   imgPreview,
   profile,
   ...props
}) => {

    return (
        <div>
             
            <div className='profile--box'>

                 <div className='profile--image'>
                         
                       <Image 
                          imgSrc={imgPreview}
                          alt={profile.title}
                        />

                </div>
                                            
                <div>
                    <h3> {profile.title} </h3> 
                    <span>ver perfil</span> 
                </div>
                            
            </div> 
            
        </div>
    )
}

export default ProfileCard
