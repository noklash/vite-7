import React from "react";
import MobileInteractive from './images/mobile/image-interactive.jpg';
import DesktopInteractive from './images/desktop/image-interactive.jpg';
import Gallery from "./Gallery";


export default function Page(){

    const screenWidth = window.innerWidth
    const [screen, setScreen] = React.useState(screenWidth)
    const [show, setShow] = React.useState(false)


    function toggleImage(){
        setShow((prev)=> !prev)
    }

    window.addEventListener('resize', ()=>setScreen(window.innerWidth))

   const  picture = screen > 470 ? DesktopInteractive : MobileInteractive
    return (
    
        <div className="page--body m-10">
            <div className="interactive">
            <div className="img-container">
                <img src={picture} className="" />
            </div>
            <div className="write-up bg-white p-8">
                <h2 className="m-2">THE LEADER IN <br/>INTERACTIVE VR</h2>
                <p>Founded in 2011, Loopstudios has been producing world-class virtual reality 
                    projects for some of the best companies around the globe. Our award-winning 
                    creations have transformed businesses through digital experiences that bind 
                    to their brand.</p>
            </div>
            </div>
            
            <div className="creations mt-8">
                <div className="creation--head">
                    <h2 className="mr-auto creation-h">OUR CREATIONS</h2>
                    <button className="all hover:bg-black hover:text-white"  onClick={toggleImage}>{show ? "HIDE" : "SEE ALL"}</button>
                </div>
            </div>

            {show && <Gallery screen={screen}/>}
            </div>
            
    )
}