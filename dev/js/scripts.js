import {backgroundAnimation} from "./background.js"
import {swansAnimation} from "./swans.js"
import {quadAnimation} from "./quad.js"
import {lockupAnimation} from "./lockup.js"

import {gsap} from "gsap";

const mainTL = gsap.timeline();

mainTL.add(backgroundAnimation(), "play")
        .add(swansAnimation())
        .add(quadAnimation(), "play")
        .add(lockupAnimation());

    

