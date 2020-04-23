import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Gente from '../../pages/Gente'
import ProfileDetail from '../../pages/ProfileDetail'

/**
 * --------------
 * Profile router 
 * --------------
 */

const ProfileRouter = () => (
  <Switch>
    <Route exact path='/profiles' component={Gente}/>
    <Route path='/profiles/:id' component={ProfileDetail}/>
  </Switch>
)

export default ProfileRouter
