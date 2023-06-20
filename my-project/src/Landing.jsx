import React from "react";
import  Logo from "./images/logo.svg";
import Hamburger from "./images/icon-hamburger.svg"
import CloseSvg from "./images/icon-close.svg"

export default function Landing(){
    const screenWidth = window.innerWidth
    const [screen, setScreen] = React.useState(screenWidth)

    function openNav(){
        document.getElementById("myNav").style.width = "100%";
    }

    function closeNav(){
        document.getElementById("myNav").style.width = "0%";
    }

    window.addEventListener('resize', ()=>setScreen(window.innerWidth))
    return (
        <div className="landing-body">

            <div className="mx-2 p-4 flex">
                <div className="w-40 p-4 mr-auto">
                <img className="" src={Logo}/>
                </div>
                
            {screen < 470 && <img className="p-4" src={Hamburger} onClick={openNav}/>}
        <div className="overlay" id="myNav">
            <div className="overlay-content">
                <div className="flex">
                    <div className="mr-auto p-4"> <img src={Logo} /> </div>
                    <div className="p-4"> <img src={CloseSvg}  onClick={closeNav}/></div>
                </div>
                <div className="a-block">
                    <a href="#">ABOUT</a>
                    <a href="#">CAREERS</a>
                    <a href="#">EVENTS</a>
                    <a href="#">PRODUCTS</a>
                    <a href="#">SUPPORT</a>
                </div>
                
            </div>
        </div>

            {screen > 470 && <ul className="text-white flex p-4 mx-1">
                <li className="mx-1">About</li>
                <li className="mx-1">Careers</li>
                <li className="mx-1">Events</li>
                <li className="mx-1">Products</li>
                <li className="mx-1">Support</li>
            </ul>}

            </div>
  
  
  
  
        </div>
    )
}