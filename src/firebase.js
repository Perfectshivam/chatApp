import firebase from 'firebase'

const firebaseConfig ={
    apiKey: "AIzaSyAANq-xa2F5cE2A1jlY7TUWkw3z9v_OE8Y",
    authDomain: "firechat-4034b.firebaseapp.com",
    projectId: "firechat-4034b",
    storageBucket: "firechat-4034b.appspot.com",
    messagingSenderId: "584695687190",
    appId: "1:584695687190:web:40d3d0c28491ef29d1ed37"
}

 const firebaseApp = !firebase.apps.length

 ? firebase.initializeApp(firebaseConfig)

 : firebase.app();
const db = firebaseApp.firestore()

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export { db, auth,provider }