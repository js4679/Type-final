import {gsap} from "gsap";



const backgroundTL =gsap.timeline();



export function backgroundAnimation(){

    backgroundTL.to("#background", {duration:10, alpha: 0});

    return backgroundTL;
}

