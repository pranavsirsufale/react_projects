import React,{useContext} from "react";
import UserContext from "../context/UserContext";

function Profile(){
    const {user} = useContext(UserContext)
    if ( !user ) return <div>Plsease Login </div>

    return <div> Welcome {user.usernaem}</div>
}

export default Profile


