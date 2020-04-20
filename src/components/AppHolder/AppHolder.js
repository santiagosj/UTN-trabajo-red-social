import React,{useState,useEffect} from 'react'
import './AppHolder.scss';
import Header from '../Header/Header'
import MainContent from '../MainContent/MainContent'

/**
 * 
 * escuchar el estado Auth
 * 
 */

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
     
    return (
        <div className="appHolder--container">
            <Header 
               userImage={require(`../../assets/evilMorty.jpg`)} 
               classHeader={one}
               loged={true}
             />
            <MainContent />
        </div>
     )
}


export default AppHolder
