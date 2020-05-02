import * as firebase from 'firebase';
import { config } from './config';

!firebase.apps.length && firebase.initializeApp(config);

const auth = firebase.auth();

//const db = firebase.database()

const db = firebase.firestore()

export {
  auth,
  db
}