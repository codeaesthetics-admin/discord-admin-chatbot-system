// import React, { createContext, useContext, useState } from "react";
// const pollObjContext = createContext();
// export const useGlobalContext = () => {
//   return useContext(pollObjContext);
// };
// export const GlobalProvider = ({ children }) => {
//     const [pollContextObj, setPollContextObj] = useState(0);

//     return (
//       <GlobalContext.Provider value={{ count, setCount }}>
//         {children}
//       </GlobalContext.Provider>
//     );
//   };

import { createContext } from "react";
export const pollObjContext = createContext({});
