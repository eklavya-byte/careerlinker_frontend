import { NextResponse } from "next/server";


export  function GET(request,{param}){

    console.log(param)
    return NextResponse.json(
        {
            "name":"job title"
        }
    )
}