import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github(){
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/pranavsirsufale')
    //     .then(Response => Response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])


    return (
        <>
        <img src={data.avatar_url} alt={data.id} />
        <div className="text-cetner m-4 bg-gray-500 text-white p-4 text-3xl" > Login  : {data.login} </div>
        
        <div className="text-cetner m-4 bg-gray-500 text-white p-4 text-3xl" > Id  : {data.id} </div>
        <div className="text-cetner m-4 bg-gray-500 text-white p-4 text-3xl" > Name  : {data.name} </div>
        <div className="text-cetner m-4 bg-gray-500 text-white p-4 text-3xl" > Bio : {data.bio} </div>
        <div className="text-cetner m-4 bg-gray-500 text-white p-4 text-3xl" > Github Public Repository : {data.public_repos} </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/pranavsirsufale')
    return response.json()
}