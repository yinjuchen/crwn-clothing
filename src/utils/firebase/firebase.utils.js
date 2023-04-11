import { initializeApp} from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
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


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

// create db
export const db = getFirestore()

// doc receives three arguments (db, collect, unique id)
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db,'users',userAuth.uid)

  console.log(userDocRef)

  //snapshot allows us to check whether or not there's an instance of it that exists inside of our database. Also, it allows us to access the data 
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()) {

    const {displayName, email} = userAuth
    const createAt = new Date() 
    
    try {
      await setDoc(userDocRef, {
        displayName, 
        email, 
        createAt
      }) 
    } catch(error) {
        console.log('error creating the user', error.message)
    }

    return userDocRef
  }


  //if user data does not exist
  //create /set the document with the data from userAuth in my collection 

  // if user data exists

  // retrun userDocReg

}

