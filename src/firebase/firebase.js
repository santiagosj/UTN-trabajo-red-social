import * as firebase from 'firebase';
import { config } from './config';

!firebase.apps.length && firebase.initializeApp(config);

const auth = firebase.auth();

const db = firebase.database()

const profiles = firebase.firestore().collection('profiles')

export {
  auth,
  db,
  profiles
}