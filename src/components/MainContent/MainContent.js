import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../../pages/Home'

import MiPerfil from '../../pages/MiPerfil'
import Login from '../Auth/Login'
import Registro from '../Auth/Registro'
import ProfileRouter from '../ProfileSection/ProfileRouter';
import Settings from '../../pages/Settings';

//escuchar firebaseAuthProvider

const MainContent = ({loged}) => {

       return(
              <div className="mainContent" >
 
                  {!loged && ( 
                     <Switch>
                            <Route exact path={'/login' } component={Login} />
                            <Route exact path={'/signup'} component={Registro} />
                            <Route  path={'/profiles'} component={ProfileRouter}/>
                            <Redirect to="/login"/>
                    </Switch>
                  )}

                  {loged && (
                         <Switch>
                            <Route exact path={'/'} component={Home} />
                            <Route  path={'/profiles'} component={ProfileRouter}/>
                            <Route exact path={'/MiPerfil'} component={MiPerfil}/>
                            <Route exact path={'/settings'} component={Settings} />
                            <Redirect to="/"/>
                         </Switch>
                  )}
                   
              </div>
       )
}

export default MainContent


/**
 * 
 * 
 * =============================
 * CONTENIDO PRINCIPAL CON RUTAS
 * =============================
 * 
 * 
 */