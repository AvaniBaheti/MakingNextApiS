"use client"
export default function Deleyeuser(prop){

    const userId=prop.userId
    console.log(userId)

    const deleyeusers=async()=>{
        let result = await   fetch(`http://localhost:3000/api/users/userId`,{
            method:"delete"
        })

        result=await result.json(); console.log(result)
        if(result.success==true)
        {
            alert("del")
        }

    }

    return<button onClick={deleyeusers}>Deleye</button>

}