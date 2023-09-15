// import { createContext, useState, useEffect } from 'react';
// import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

// // import SHOP_DATA from '../shop-data.js';

// export const CategoriesContext = createContext({
//   categoriesMap: [],
// });

// export const CategoriesProvider = ({ children }) => {
//   const [categoriesMap, setcategoriesMap] = useState({});
  
//   // when we use async function -(getCategoriesAndDocuments) inside of the useEffect, we create a new async function, and callback after it's been intialized 
//   // usedEffect(async())  <--- this is incorrect 
//   useEffect(() => {
//     const getCategoriesMap = async () => {
//       const categoryMap = await getCategoriesAndDocuments()
//       setcategoriesMap(categoryMap)
//     }
//     getCategoriesMap();
//   },[]);

//   const value = { categoriesMap };
//   return (
//     <CategoriesContext.Provider value={value}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// };
