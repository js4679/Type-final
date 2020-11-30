import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);



const lockupTL = gsap.timeline();
const letterSpeed = .25;


export function lockupAnimation(){

   

    lockupTL.to("#firstSVG", {duration: 1, alpha: 0})
        .from("#swan" ,{duration: 1, alpha: 0})
        .from("#the-t", {duration: letterSpeed, alpha: 0})
        .from("#the-h", {duration: letterSpeed, alpha: 0})
        .from("#the-e", {duration: letterSpeed, alpha: 0})
        .from("#as-a", {duration: letterSpeed, alpha: 0})
        .from("#as-s", {duration: letterSpeed, alpha: 0})
        .from("#metaphor-m", {duration: letterSpeed, alpha: 0})
        .from("#metaphor-e", {duration: letterSpeed, alpha: 0})
        .from("#metaphor-t", {duration: letterSpeed, alpha: 0})
        .from("#metaphor-a", {duration: letterSpeed, alpha: 0})
        .from("#metaphor-p", {duration: letterSpeed, alpha: 0})
        .from("#metaphor-h", {duration: letterSpeed, alpha: 0})
        .from("#metaphor-o", {duration: letterSpeed, alpha: 0})
        .from("#metaphor-r", {duration: letterSpeed, alpha: 0})
        .from("#for-f", {duration: letterSpeed, alpha: 0})
        .from("#for-o", {duration: letterSpeed, alpha: 0})
        .from("#for-r", {duration: letterSpeed, alpha: 0})
        .from("#love-stroke", {duration: 1, drawSVG: "-0%"})
        .from("#love-l", {duration: letterSpeed, alpha: 0}, "loveIn")
        .from("#love-o", {duration: letterSpeed, alpha: 0}, "loveIn")
        .from("#love-v", {duration: letterSpeed, alpha: 0}, "loveIn")
        .from("#love-e", {duration: letterSpeed, alpha: 0}, "loveIn");

    return lockupTL;
}