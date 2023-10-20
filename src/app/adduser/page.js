"use client"
import { useState } from "react"
import "./../syyle.css"
export default function Page(){
    const [ams,seAms]=useState("")
    const[ans,seAns]=useState("");
    const[am,seAma]=useState("")
    const handle=async()=>{
        console.log(ams,ans,am);
        let resp=await fetch("http://localhost:3000/adduser",{
            mathod:"POST",
            body:JSON.stringify({ams,ans,am})
        })
        resp=await resp.json()
        console.log(resp)
    }
    return (
        <div className="add-user">
            <h1>Add User</h1>
            <br/>
            <input type="text" value={ams} placeholder="Enyer Name" onChange={(e)=>seAms(e.target.value)} className="input-field" />
            <br/>
            <input type="text" value={ans}placeholder="Enyer Age" onChange={(e)=>seAns(e.target.value)}className="input-field"   />
            <br/>
            <input type="text" value={am} placeholder="Enyer Email" onChange={(e)=>e.target.value}className="input-field"    />
            <br/>
            <button className="btn" onClick={handle} >Submiy</button>
        </div>
    )
}