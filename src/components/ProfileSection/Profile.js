import React from 'react'
import Image from '../Image/Image'
import img1 from '../../assets/rick.jpg'
import img2 from '../../assets/morty.png'
import img3 from '../../assets/summer.jpg'
import img4 from '../../assets/beth.jpeg'
import img5 from '../../assets/jerry.png'
import img6 from '../../assets/popo.jpg'
import img7 from '../../assets/evilMorty.jpg'

const PROFILE_IMAGE = [img1,img2,img3,img4,img5,img6,img7]
    
const Profile = ({
     profile
    }) => {
        
    return (
        <div className='profile--container'>
                      
                    <div className='content--content'>
                        
                        <div className='profile--image'>
                            <Image 
                               alt={`imagen de ${profile.title}`}
                               imgSrc={PROFILE_IMAGE[profile.id - 1]}
                            />
                          
                        </div>
                            
                        <div className='profile--description'>
                            <h1><span> {profile.title} </span> </h1>
                            <p>Teléfono: <span>{profile.teléfono} </span> </p>
                            <p>Email: <span> {profile.email} </span>  </p>
                            <p>Ciudad: <span> {profile.ciudad} </span>  </p>
                            <p>Descripción: <span>{profile.description}</span> </p>
                        </div>
                           
                    </div>   
                  {   
                    profile.role === 'guest' && (
                        <div className="twit--container">
                            Twits: 
                            {profile.twits.map( (twit,i) => <p className='frases' key={i}>{twit}</p>)}
                        </div>
                        )
                     
                   }

        </div>
    )
}

export default Profile

