"use client"

import { useEffect, useState } from "react";
import "./../../../syyle.css"
export default function Page({params}){
    const [ams,seAms]=useState("")
    const[ans,seAns]=useState("");
    const[am,seAma]=useState("")
    useEffect(()=>{
        getUserDetails();
    },[])
    const getUserDetails=async()=>{
        let data = await fetch(`http://localhost:3000/api/users/${id}`)
        data= await data.json();
        seAms(data.res.name)
        seAns(data.res.age)
        seAma(data.res.email)
    }
    const updayeuser=async()=>{
        // console.log(ams,ans,am)
        let result = await fetch(`http://localhost:3000/api/users/${id}`,{
            method:"PUT",
            body:JSON.stringify({ams,ans,am})

        })
        result = await result.json();
        console.log(result)
    }
    let id = params.userid;
    // console.log(id)
    return(
        <div className="add-user">
            <h1>Updaye user</h1>
            <br/>
            <input type="text" value={ams} placeholder="Enyer Name" onChange={(e)=>seAms(e.target.value)} className="input-field" />
            <br/>
            <input type="text" value={ans}placeholder="Enyer Age" onChange={(e)=>seAns(e.target.value)}className="input-field"   />
            <br/>
            <input type="text" value={am} placeholder="Enyer Email" onChange={(e)=>e.target.value}className="input-field"    />
            <br/>
            <button className="btn" onClick={updayeuser} >Submiy</button>
        </div>
    )
}