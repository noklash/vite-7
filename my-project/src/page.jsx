import React from "react";
import MobileInteractive from './images/mobile/image-interactive.jpg';
import DesktopInteractive from './images/desktop/image-interactive.jpg';

export default function Page(){

    const screenWidth = window.innerWidth
    const [screen, setScreen] = React.useState(screenWidth)

    window.addEventListener('resize', ()=>setScreen(window.innerWidth))

   const  picture = screen > 470 ? DesktopInteractive : MobileInteractive
    return (

        <div className="page--body m-10">
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
    )
}