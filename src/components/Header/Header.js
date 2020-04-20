import React, { Component } from 'react'
import NavItem from '../NavItem/NavItem'
import Image from '../Image/Image'
import './Header.scss'
/**
 * 
 *Escuchar estado global login logout 
 * 
 */

class Header extends Component {
     constructor(props){
         super(props)
         this.state = {
            active: false
         }

         this.navigationItems = {
            signedInLinks:[
                {link:'/',name:'Home'},
                {link:'/profiles',name:'Gente'},
                {link:'/MiPerfil',name:'MiPerfil'},
            ],
            signedOutLinks:[
                {link:'/login',name:'Login'},
                {link:'/signup',name:'SignUp'},
            ],
            subNav:[
                {link:'/settings',name:'Settings'},
                {link:'/login',name:'Logout'},
            ]
        }
     }

     handleMenuToggle = () => this.setState({ active: !this.state.active })
   
    render() {
        const { active} = this.state,
            {loged} = this.props
    
        return (
            <header className={`${this.props.classHeader}`}>
                 {/**TRUE */}
                {loged && (
                    <div className="header-conent">
                        <h2>Rick and Morty social network</h2>
                        <ul>
                            {this.navigationItems.signedInLinks.map((item,i) => <NavItem key={i} data={item}/>)}
                        </ul>

                        <div className={`Nav`} onClick={this.handleMenuToggle}>
                            <span>Evil Morty</span>
                            <div className="Image--container">
                                <Image 
                                    imgSrc={this.props.userImage}
                                    alt={`userImage`}
                                />
                            </div>
                            <div className={`${active ? 'Nav-active' : 'Nav-inactive'}`}>
                                {this.navigationItems.subNav.map( (item, i)=> (
                                    <NavItem 
                                      key={i} 
                                      data={item}
                                    />
                                ))}
                            </div>
                        </div>   
                </div>      
                )}
                {/**FALSE */}
                {!loged && (
                    <div className="header-conent">
                        <h2>Rick and Morty social network</h2>
                        <ul>
                            {this.navigationItems.signedOutLinks.map(
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
}

export default Header
