import { createContext, useState } from 'react';

export const FirebaseContext=createContext(null);
export const authContext=createContext(null);

export default function Context({children}){
    const[user,setUser]=useState(null);

    return(
        <authContext.Provider value={{user,setUser}}>
            {children}
        </authContext.Provider>
    )
}
















//onOfchange - store usser,
//children is child component ,children is objec deconsstruct {children}
// props caming to the Context fuction  , so it is component
// children default in the props 
//like parentcomponet inside childe component  that is children ,rapping children 


//Provider using to rapp the children 