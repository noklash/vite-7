import React from "react";
import MobileCuriosity from "./images/mobile/image-curiosity.jpg";
import MobileDeepEarth from "./images/mobile/image-deep-earth.jpg";
import MoblieFisheye from "./images/mobile/image-fisheye.jpg";
import MobileFromAbove from "./images/mobile/image-from-above.jpg";
import MobileGrid from "./images/mobile/image-grid.jpg";
import MobileNightArcade from "./images/mobile/image-night-arcade.jpg";
import MobilePocket from "./images/mobile/image-pocket-borealis.jpg";
import MobileSoccerTeam from "./images/mobile/image-soccer-team.jpg";
import DesktopCuriosity from "./images/desktop/image-curiosity.jpg";
import DesktopDeepEarth from "./images/desktop/image-deep-earth.jpg";
import DesktopFisheye from "./images/desktop/image-fisheye.jpg";
import DesktopFromAbove from "./images/desktop/image-from-above.jpg";
import DesktopGrid from "./images/desktop/image-grid.jpg";
import DesktopNightArcade from "./images/desktop/image-night-arcade.jpg";
import DesktopPocket from "./images/desktop/image-pocket-borealis.jpg";
import DesktopSoccerTeam from "./images/desktop/image-soccer-team.jpg";

export default function Gallery(props){
// ARRANGED THE DESTOP AND MOBILE IMAGES IN AN ARRAY
    const imagesMobile = [
        {"title":"THE CURIOSITY", "src":MobileCuriosity, "key": 1},
         {"title": "DEEP EARTH", "src":MobileDeepEarth, "key": 2}, 
         {"title": "MAKE IT FISH EYE", "src":MoblieFisheye, "key": 3},
         {"title": "FROM ABOVE", "src":MobileFromAbove, "key": 4},
         {"title": "THE GRID", "src":MobileGrid, "key": 5},
         {"title": "NIGHT ARCADE", "src":MobileNightArcade, "key": 6},
         {"title": "POCKET BOREALIS", "src":MobilePocket, "key": 7},
         {"title": "SOCCER TEAM VR", "src":MobileSoccerTeam, "key": 8}
     ]
    const imagesDesktop = [
        {"title":"THE CURIOSITY", "src":DesktopCuriosity , "key": 1},
         {"title": "DEEP EARTH", "src":DesktopDeepEarth , "key": 2}, 
         {"title": "MAKE IT FISH EYE", "src":DesktopFisheye , "key": 3},
         {"title": "FROM ABOVE", "src":DesktopFromAbove, "key": 4},
         {"title": "THE GRID", "src":DesktopGrid, "key": 5 },
         {"title": "NIGHT ARCADE", "src":DesktopNightArcade, "key": 6},
         {"title": "POCKET BOREALIS", "src":DesktopPocket, "key": 7},
         {"title": "SOCCER TEAM VR", "src":DesktopSoccerTeam, "key": 8}
     ]
    
    const screenSize = props.screen > 470 ? imagesDesktop : imagesMobile
    const imgs = screenSize.map((each) => {
        
        return <div className="p-1 m-2 img-div" key={each.key}> <img src={each.src} key={each.key}/>  <div className="img--title text-center text-white">{each.title}</div></div> 
    })
    
    return(
        <div className="img-container">
            {imgs}
        </div>
    )
}