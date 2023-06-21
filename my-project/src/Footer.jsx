import React from "react";
import Facebok from "./images/icon-facebook.svg";
import Instagram from "./images/icon-instagram.svg";
import Twitter from "./images/icon-twitter.svg";
import Pinterest from "./images/icon-pinterest.svg";
import Logo from "./images/logo.svg";



export default function Footer(){
    return (
        <div className="block bg-black text-white p-2">
            <div className="flex justify-end icons pt-5">
                <img className="p-1" src={Facebok}/> 
                <img className="p-1" src={Twitter}/>
                <img className="p-1" src={Pinterest}/>
                <img className="p-1" src={Instagram}/>
            </div>

            <div className="flex p-1">
                <div className=" mr-auto"> <img className="p-1 w-28" src={Logo}/></div>
                <div className="justify-end">&copy; 2023 Noklasn.</div>
            </div>
        </div>
    )
}