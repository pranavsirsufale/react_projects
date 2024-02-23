import React from "react";

import userContext from "./userContext";
import { useState } from "react";

const UserContextProvider = ({children}) =>{
    const [user, setUser] = React.useState(null);
    return (
        <userContext.Provider value={{ user, setUser }} >
        {children}

        </userContext.Provider>
    )

}

export default UserContextProvider

