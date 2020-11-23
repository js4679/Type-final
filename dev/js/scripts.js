import {backgroundAnimation} from "./demo.js"
import {swansAnimation} from "./swans.js"

import {gsap} from "gsap";

const mainTL = gsap.timeline();
mainTL.add(backgroundAnimation())
        .add(swansAnimation());
    

