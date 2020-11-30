import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);



const lockupTL = gsap.timeline();
const letterSpeed = .1;


export function lockupAnimation(){

   

    lockupTL.to("#firstSVG", {duration: 1, alpha: 0})
        .from("#swan" ,{duration: 1, alpha: 0})
        .from("#the-t", {duration: letterSpeed, alpha: 0, ease: "none"})
        .from("#the-h", {duration: letterSpeed, alpha: 0, ease: "none"})
        .from("#the-e", {duration: letterSpeed, alpha: 0, ease: "none"})
        .from("#as-a", {duration: letterSpeed, alpha: 0, ease: "none"})
        .from("#as-s", {duration: letterSpeed, alpha: 0, ease: "none"})
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
        .from("#love-l", {duration: .5, alpha: 0}, "loveIn")
        .from("#love-stroke", {duration: 1, drawSVG: "0%"})
        .from("#love-o", {duration: .5, alpha: 0}, "loveIn")
        .from("#love-v", {duration: .5, alpha: 0}, "loveIn")
        .from("#love-e", {duration: .5, alpha: 0}, "loveIn")
        .from("#author", {duration: 1, alpha: 0})
        .from("#swan-left", {duration: .5, alpha: 0}, "swans")
        .from("#swan-right", {duration: .5, alpha: 0}, "swans");

    return lockupTL;
}