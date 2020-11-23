// import {backgroundAnimation} from "./demo.js"
import {swansAnimation} from "./swans.js"
import {quadAnimation} from "./quad.js"

import {gsap} from "gsap";

const mainTL = gsap.timeline();
// mainTL.add(backgroundAnimation())
        mainTL.add(swansAnimation())
        .add(quadAnimation());
    

