import { createContext, useState, useEffect } from "react";
import { 
  onAuthStateChangedListener, 
  createUserDocumentFromAuth
 } from '../utils/firebase/firebase.utils'

// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrnetUser: () => null,

})

export const UserProvider = ({children}) => {
  const [currentUser, setCurrnetUser] = useState(null)
  const value = {currentUser, setCurrnetUser}


  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user)
      }
      setCurrnetUser(user)
    })

    return unsubcribe

  },[])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

