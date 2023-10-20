import { NextResponse } from "next/server";

import { User } from "@/app/library/db";

export async function GET(requ){
    // return NextResponse.json({name:"Pandokhar Sarkar   ",age:"  20"},{status:200})
    const arr = User
    return NextResponse.json(User,{status:200})
}


export async function POST(req,resp){
    let payload = await req.json()
    console.log(payload)
    if(!payload.name){
        return NextResponse.json({res:"requi"},{status:201}) 

    }

    return NextResponse.json({res:"Pandokhar Sarkar"},{status:200})
}
