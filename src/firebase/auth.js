import { auth } from './firebase';

const userSession = (action, email, password) => auth[`${action}WithEmailAndPassword`](email, password).then(cred=>{
  console.log(cred.user.email)
})

const logout = () => auth.signOut().then(()=>{
  console.log('usuario loeged out')
});

const user = auth.currentUser

const userLoged = () => { 
   if(user){
      return true
   }else{
      return false
   }
}

export {
    userSession,
    logout,
    userLoged
  }