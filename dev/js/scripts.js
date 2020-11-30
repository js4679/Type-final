import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";


import {backgroundAnimation} from "./background.js";
// import {swansAnimation} from "./swans.js";
import {quadAnimation} from "./quad.js";
import {lockupAnimation} from "./lockup.js";



gsap.registerPlugin(GSDevTools);


const mainTL = gsap.timeline();

mainTL.add(backgroundAnimation(), "play")
        // .add(swansAnimation())
        .add(quadAnimation(), "play")
        .add(lockupAnimation(), "play2");

GSDevTools.create();
    

