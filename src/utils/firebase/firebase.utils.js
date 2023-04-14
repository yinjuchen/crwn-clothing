import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword

} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

// this is from our projects after register the app
const firebaseConfig = {
  apiKey: "AIzaSyDAxqYOl3YZoU_IE4YI-Upg8eSLfBtteag",
  authDomain: "crwn-clothing-db-d8d79.firebaseapp.com",
  projectId: "crwn-clothing-db-d8d79",
  storageBucket: "crwn-clothing-db-d8d79.appspot.com",
  messagingSenderId: "55323248018",
  appId: "1:55323248018:web:cf62747f42b70b15996d4b"
};

const firebaseApp = initializeApp(firebaseConfig);


const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

// create db
export const db = getFirestore()

// doc receives three arguments (db, collect, unique id)
export const createUserDocumentFromAuth = async (
  userAuth, additionalInformation = {}
) => {
  if (!userAuth) return
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef)

  //snapshot allows us to check whether or not there's an instance of it that exists inside of our database. Also, it allows us to access the data 
  const userSnapshot = await getDoc(userDocRef)

  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation
      })
    } catch (error) {
  
        console.log('error creating the user', error.message)
      }

  }

  return userDocRef
}

export const createAuthUserWithEmalAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}