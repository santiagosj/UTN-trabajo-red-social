import React,{useState,useEffect} from 'react'
import './AppHolder.scss';
import Header from '../Header/Header'
import MainContent from '../MainContent/MainContent'
//import {firebaseAuth} from '../../provider/FirebaseAuthProvider'


const AppHolder = () => {

     const [one, setOne] = useState('menuOnTop')

     useEffect(()=>{
         window.onscroll = () => handleAnimation()
     },[one])
      
    const handleAnimation = () => {
        if(document.documentElement.scrollTop > 90){
            setOne('scroll')
        }
        if(document.documentElement.scrollTop === 0){
            setOne('menuOnTop')
        }
     }
     
     //const {handleSignIn} = useContext(firebaseAuth)

    
     
     const loged = false

    return (
        <div className="appHolder--container">
            <Header 
               userImage={require(`../../assets/evilMorty.jpg`)} 
               classHeader={one}
               loged={loged}
             />
            <MainContent loged={loged}/>
        </div>
     )
}


export default AppHolder
