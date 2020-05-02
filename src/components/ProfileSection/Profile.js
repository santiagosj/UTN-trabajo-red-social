import React,{useState, useEffect} from 'react'
import Image from '../Image/Image'
import img from '../../assets/images.png'
import './Profile.scss'    
import { auth } from '../../services/firebase/firebase'

const Profile = ({
     profile
    }) => {

        const [currentUser, setCurrentUser] = useState('')

        useEffect(()=>{
            auth.onAuthStateChanged(user=>{
                if(user){
                    setCurrentUser(user.uid)
                }
            })
        },[])
        
    return (
        <div className='profile--container'>
                      
                    <div className='content--content'>
                        
                        <div className='profile--image'>
                            <Image 
                               alt={`imagen de ${profile.name}`}
                               imgSrc={profile.img ? profile.img : img}
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
                     profile.tweets !== undefined && profile.slug !== currentUser && (
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

