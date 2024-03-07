import { NextResponse } from "next/server"



export function middleware(request){

    // console.log("middleware ")
    // return NextResponse.redirect(new URL("/",request.url))
}

export const config ={
    matcher:["/admin/:path*","/user/:path*"]
}

