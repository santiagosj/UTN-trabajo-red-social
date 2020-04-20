import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import ProfileList from './ProfileList'
import Gente from '../../pages/Gente'
import ProfileDetail from '../../pages/ProfileDetail'

// The Roster component matches one of two different routes
// depending on the full pathname

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
