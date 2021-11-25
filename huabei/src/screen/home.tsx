import React, { useEffect, useState } from "react";
const s_home= require("../image/home.jpeg")
const s_home2 = require("../image/home.jpg")
export const Home =()=>{
    let [img,setImg]=useState(s_home.default)
    useEffect(()=>{
        setTimeout(()=>{
            setImg(s_home2.default)
        },10000)
    },[])
    return <div style={{width:"60vw",margin:"0 auto"}}>
            <img src={`${img}`} style={{objectFit:"cover",width:"100%"}}/></div>
}