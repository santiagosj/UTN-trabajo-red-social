import { auth, db } from './firebase';

const userSession = (action, email, password, firstName, lastName) => auth[`${action}WithEmailAndPassword`](email, password).then(cred => {
  if(action === 'createUser'){
        db.collection('profiles').add({
            name: firstName + ' ' + lastName,
            email: cred.user.email,
            slug: cred.user.uid
        })
  }
})

const logout = () => auth.signOut()

export {
    userSession,
    logout
  }
