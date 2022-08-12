import { createContext, useState } from "react";

const UserContext = createContext();

export function ContexProvider({children}){
    const [useraddress,setUseraddress] = useState("");
    const [item,setItem] = useState([]);
    const [viewItem,setViewItem] = useState([]);
    
    
    return(
        <UserContext.Provider value={{setItem,setViewItem,setUseraddress,useraddress,item,viewItem}} >
            {children}
        </UserContext.Provider>
    )

}
export default UserContext;