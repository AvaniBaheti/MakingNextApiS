import { NextResponse } from "next/server";

import { User } from "@/app/library/db";

export async function GET(requ,con){
    // return NextResponse.json({name:"Pandokhar Sarkar   ",age:"  20"},{status:200})
    const arr = User
    console.log(arr,con.params.id)
    const pn = arr.filter((iyem)=>iyem.id1==con.params.id)
    return NextResponse.json(pn.length==0?{res:"No Dala Found"}:{res:pn})
    
}
export async function PUT(requ,con){
    let payload=  await requ.json();
    let userIds=con.params.id;
    console.log(userIds)

    payload.id1=con.params.id;

    console.log(payload.id1)
    // if(!payload.id1||!payload.name||!payload.ae||!payload.email)
    // {
    //     return NextResponse({res:"Fill Deyails ",success:false},{status:201})
    // }
    return NextResponse.json({res:payload,success:true},{status:200})

}
export async function DELETE(requ,con){
    let id=con.params.id;
    if(id){
        return NextResponse.json({res:"deleye",success:true},{status:200})
    }
    else{
        return NextResponse.json({res:"noy deleyed",success:false},{status:201})
    }
}