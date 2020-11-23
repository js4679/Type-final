import {gsap} from "gsap";



const swansTL =gsap.timeline();



export function swansAnimation(){

    swansTL.from("#swan-left", {duration:1, scale: 5});

    return swansTL;
}
