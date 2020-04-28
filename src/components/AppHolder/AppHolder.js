import React,{useState,useEffect} from 'react'
import './AppHolder.scss';
import Header from '../Header/Header'
import MainContent from '../MainContent/MainContent'
import firebase from 'firebase'


const AppHolder = () => {

     const [one, setOne] = useState('menuOnTop')

     const [loged, setAuth] = useState(false)

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
     
    useEffect(()=>{
      firebase.auth().onAuthStateChanged(user => {
          if(user){
              setAuth(!loged)
          }else{
              setAuth(loged)
          }
      })
     
    },[])
    
    console.log(loged)

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
