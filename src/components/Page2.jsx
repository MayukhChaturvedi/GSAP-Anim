import React, { useEffect, useRef } from 'react';
import image from '../assets/Vector 1.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;

    const tlText = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top center", // animation starts when the top of the container hits the bottom of the viewport
        end: "center center", // animation ends when the bottom of the container leaves the top of the viewport
        scrub: 1,
        markers: true, // for debugging, remove in production
        toggleActions: "play none none reverse"
      }
    });

    tlText.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.75 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power1.inOut' }
    );

    const tlImg = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "center center",
        scrub: 1,
        markers: true, // for debugging, remove in production
        toggleActions: "play none none reverse"
      }
    });

    tlImg.fromTo(
      imgRef.current,
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 1.5, duration: 1, ease: 'power1.inOut' }
    );

  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden hero2">
      <img
        ref={imgRef}
        src={image}
        alt="Background"
        className="absolute w-[41%] h-[56%] object-cover z-0"
      />
      <h1
        ref={textRef}
        className="text-[300px] font-bold bg-clip-text text-transparent z-10"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        Robot
      </h1>
    </div>
  );
};

export default Page2;