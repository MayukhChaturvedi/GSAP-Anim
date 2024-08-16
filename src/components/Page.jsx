import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top', // when the top of the trigger hits the top of the viewport
        end: '+=500', // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // snap: {
        //     snapTo: 'labels', // snap to the closest label in the timeline
        //     duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        //     delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        //     ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
        // }
      }
    });

    tl.fromTo(
      textRef.current,
      { backgroundSize: '100%', scale: 1 },
      { backgroundSize: '200%', scale: 1, duration: 3, ease: 'power4.out' }
    )

  
  }, []);

  return (
    <div className='h-[100vh] w-full flex justify-center text-center items-center hero'>
      <h1
        ref={textRef}
        className='text-[15vw] bg-hero bg-cover bg-center bg-no-repeat bg-clip-text text-transparent font-bold'
        
      >
        Robot
      </h1>
    </div>
  );
};

export default Page;
