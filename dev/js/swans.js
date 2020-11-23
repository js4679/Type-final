import {gsap} from "gsap";



const swansTL =gsap.timeline();



export function swansAnimation(){

    swansTL.from("#swan-left", {duration:1, y: 20, scale: 10});

    return swansTL;
}
