import React from 'react'
import Image from '../Image/Image'
/*import img1 from '../../assets/rick.jpg'
import img2 from '../../assets/morty.png'
import img3 from '../../assets/summer.jpg'
import img4 from '../../assets/beth.jpeg'
import img5 from '../../assets/jerry.png'
import img6 from '../../assets/popo.jpg'
import img7 from '../../assets/evilMorty.jpg'*/

//const PROFILE_IMAGE = [img1,img2,img3,img4,img5,img6,img7]
    
const Profile = ({
     profile
    }) => {
        
    return (
        <div className='profile--container'>
                      
                    <div className='content--content'>
                        
                        <div className='profile--image'>
                            <Image 
                               alt={`imagen de ${profile.name}`}
                               imgSrc={profile.img}
                            />
                          
                        </div>
                            
                        <div className='profile--description'>
                            <h1><span> {profile.name} </span> </h1>
                            <p>Teléfono: <span>{profile.phone} </span> </p>
                            <p>Email: <span> {profile.email} </span>  </p>
                            <p>Ciudad: <span> {profile.address} </span>  </p>
                            <p>Descripción: <span>{profile.description}</span> </p>
                        </div>
                           
                    </div>   
                  {   
                    profile.role === 'guest' && (
                        <div className="twit--container">
                            Tweets: 
                            {profile.tweets.map( (tweet,i) => <p className='frases' key={i}>{tweet}</p>)}
                        </div>
                        )
                     
                   }

        </div>
    )
}

export default Profile

