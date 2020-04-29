import React, { useState, useContext } from 'react'
import NavItem from '../NavItem/NavItem'
import Image from '../Image/Image'
import './Header.scss'
import Logo from '../../assets/logo.png'
import { useHistory } from "react-router-dom";
import {firebaseAuth} from '../../context/FirebaseAuthProvider'

const Header = ({
   classHeader,
   userImage,
   userName,
   loged
}) => {
    const history = useHistory();
    const [active, setActive] = useState(false)
    
    const {handleSignOut} = useContext(firebaseAuth)

    const handleLogout = () => {
        handleSignOut()
        history.push("/login");
    }

    const navigationItems = {
        signedInLinks:[
            {link:'/',name:'Home'},
            {link:'/profiles',name:'Gente'},
            {link:'/MiPerfil',name:'MiPerfil'},
        ],
        signedOutLinks:[
            {link:'/login',name:'Login'},
            {link:'/signup',name:'SignUp'},
            {link:'/profiles',name:'Gente'},
        ],
        subNav:[
            { link:'/settings',name:'Settings' }
        ]
    }
   
    const handleMenuToggle = () => setActive(!active)

  return(
     <header className={classHeader}>
         {loged && (
            <div className="header-conent">
               <div className="logo">
                  <Image imgSrc={Logo} alt='logo'/>
                  <h2>social network</h2>
               </div>
               
                <ul>
                    {navigationItems.signedInLinks.map((item,i) => <NavItem key={i} data={item}/>)}
                </ul>

                <div className={`Nav`} onClick={handleMenuToggle}>
                    <span>{userName}</span>
                    <div className="Image--container">
                        <Image 
                            imgSrc={userImage}
                            alt={`userImage`}
                        />
                    </div>
                    <div className={`${active ? 'Nav-active' : 'Nav-inactive'}`}>
                        {navigationItems.subNav.map( (item, i)=> (
                            <NavItem 
                                key={i} 
                                data={item}
                            />
                        ))}
                        <button onClick={handleLogout}>logout</button>
                    </div>
                </div>   
             </div>
         )}
         {!loged && (
            <div className="header-conent">
                <div className="logo">
                    <Image imgSrc={Logo} alt='logo'/>
                    <h2>social network</h2>
                </div>
                <ul>
                    {navigationItems.signedOutLinks.map(
                         (item,i) => <NavItem 
                                         key={i} 
                                         data={item}
                                      />
                    )}
                </ul>
           </div>
        )}

     </header>
  )
}


export default Header
