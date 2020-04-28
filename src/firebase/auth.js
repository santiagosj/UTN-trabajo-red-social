import { auth } from './firebase';

const userSession = (action, email, password) => auth[`${action}WithEmailAndPassword`](email, password).then(cred=>{
  console.log(cred.user.email)
})

const logout = () => auth.signOut()

export {
    userSession,
    logout
  }
