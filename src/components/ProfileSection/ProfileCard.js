import React from 'react'
import Image from '../Image/Image'
import img from '../../assets/images.png'

const ProfileCard = ({
   imgPreview,
   profile,
   ...props
}) => {

    return (
            <div className='profile--box'>

                 <div className='profile--image'>
                         
                       <Image 
                          imgSrc={imgPreview ? imgPreview : img}
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
