import {gsap} from "gsap";



const backgroundTL =gsap.timeline();
backgroundTL.from("#background", {duration:1, fill:"000"})
            .to("#background", {duration:1, fill:"272727"});


export function backgroundAnimation(){
    return backgroundTL;
}

