import { gsap } from "gsap";

import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

// const morphTL = gsap.timeline();

const quadTL = gsap.timeline();


export function quadAnimation(){

   

    quadTL.from("#reek-r",{duration: 1, alpha: 0})
        .from("#reek-e-2",{duration: 1, alpha: 0})
        .from("#shit-i",{duration: 1, alpha: 0})
        .from("#reek-e-1",{duration: 1, alpha: 0})
        .from("#scum-s",{duration: 1, alpha: 0})
        .from("#scum-m",{duration: 1, alpha: 0})
        .from("#gunk-n",{duration: 1, alpha: 0})
        .from("#reek-k",{duration: 1, alpha: 0})

        .to("#gunk-g",{duration: 1, morphSVG:"#swan-s", x: 200, y: -250}, "s")
        .to("#gunk-u",{duration: 1, morphSVG:"#swan-w", x: 210, y: -250}, "w")
        .to("#gunk-n",{duration: 1, morphSVG:"#swan-a", x: 220, y: -250}, "a")
        .to("#gunk-k",{duration: 1, morphSVG:"#swan-n", x: 230, y: -250}, "n")
        .to("#reek-r",{duration: 1, morphSVG:"#swan-s", x: 210, y: 330}, "s")
        .to("#reek-e-1",{duration: 1, morphSVG:"#swan-w", x: 220, y: 330}, "w")
        .to("#reek-e-2",{duration: 1, morphSVG:"#swan-a", x: 230, y: 330}, "a")
        .to("#reek-k",{duration: 1, morphSVG:"#swan-n", x: 240, y: 330}, "n")
        .to("#shit-s",{duration: 1, morphSVG:"#swan-s", x: 210, y: 140}, "s")
        .to("#shit-h",{duration: 1, morphSVG:"#swan-w", x: 220, y: 140}, "w")
        .to("#shit-i",{duration: 1, morphSVG:"#swan-a", x: 230, y: 140}, "a")
        .to("#shit-t",{duration: 1, morphSVG:"#swan-n", x: 240, y: 140}, "n")
        .to("#scum-s",{duration: 1, morphSVG:"#swan-s", x: 210, y: -65}, "s")
        .to("#scum-c",{duration: 1, morphSVG:"#swan-w", x: 220, y: -65}, "w")
        .to("#scum-u",{duration: 1, morphSVG:"#swan-a", x: 230, y: -65}, "a")
        .to("#scum-m",{duration: 1, morphSVG:"#swan-n", x: 240, y: -65}, "n");
    return quadTL;
}