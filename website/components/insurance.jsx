'use client'
import gsap from 'gsap';
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/all";
export default function Insurance()
{
    useLayoutEffect(() => 
  {
    
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.rec1', {

        scrollTrigger: {
          trigger: '.rec1',
          start: 'top', // Start pinning when the top of the trigger element reaches the center of the viewport // Stop pinning when the trigger element is 300 pixels below its top position
          markers: true,
          pin:true,
          pinSpacing:false,
        
        },
        y:0, 
        x:100,
        duration: 3,
      });
  }, []);
    return<div className="text-white">
        insurance
        <div className='h-[120vh]'>
        </div>
        <div className="rec1">Wd f gsg sgsgg  </div>
        <div className='h-[120vh]'>
        </div>
        </div>
    
}