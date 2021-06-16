import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyANRXxpROYfwyRiuLLTAf5qPwSPNtZIyY8',
  authDomain: 'vuebase-334da.firebaseapp.com',
  projectId: 'vuebase-334da',
  storageBucket: 'vuebase-334da.appspot.com',
  messagingSenderId: '868585408086',
  appId: '1:868585408086:web:1a6c26e0ebb1f94e3e9df7',
}

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
