'use client'
import { useSession } from "next-auth/react"
import gsap from 'gsap';
import SignIn from './signIn';
import React,{ useEffect, useRef} from "react";
import * as THREE from 'three'
import { ScrollTrigger } from "gsap/all";
import { signOut } from "next-auth/react";
let count = 0;
const ThreeScene = React.memo(() =>
  {
     const containerRef = useRef('');
     useEffect(() => 
     {
      
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGL1Renderer();
      renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Directional light for shadows
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(3, 2, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
      renderer.setSize(window.innerWidth, window.innerHeight);
      if(count === 0)
      {
      containerRef.current.appendChild(renderer.domElement);
      count = 1;
      }
      camera.position.z = 10;
      const geometry = new THREE.CylinderGeometry(0.5, 0.5, 0.2, 12);
      
      const material = new THREE.MeshStandardMaterial({ color: "rgb(153, 208, 54)" });
      const coin1 = new THREE.Mesh(geometry, material);
      const coin2 = new THREE.Mesh(geometry, material);
      const coin3 = new THREE.Mesh(geometry, material);
      coin1.position.x = -10;
      coin2.position.x = 12;
      coin2.position.z = -2
      coin1.castShadow = true; 
      coin2.castShadow = true;
      scene.add(coin1);
      scene.add(coin2)
      renderer.setClearColor(0xffffff, 0);
    
     coin1.rotation.z = -180;
     coin2.rotation.z = 180;
      window.addEventListener('mousemove', (e) => {
        coin1.rotation.x = (e.clientY - coin1.rotation.x) / 1000;
        coin1.rotation.y = (e.clientX - coin1.rotation.y) / 1000;
        coin2.rotation.x = -(e.clientY - coin2.rotation.x) / 1000;
        coin2.rotation.y = -(e.clientX - coin2.rotation.y) / 1000;
      });
    
      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
    
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
      };
    
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll',
      ()=>
      {
          
          coin1.position.y = -window.scrollY/120;
          coin2.position.y = -window.scrollY/80;
      })
      
      // Animation loop using requestAnimationFrame
      const animate = () => {
        requestAnimationFrame(animate);
    
        // Render the scene
        renderer.render(scene, camera);
      };
    
      // Initial call to start the animation loop
      animate();
    }, []);
        
     return <div className="absolute" ref = {containerRef}/>
  })

export default function Home()
{

  
  useEffect(() => 
  {
    
  gsap.registerPlugin(ScrollTrigger)
  
    window.addEventListener("click", (e) => 
    {
      if(e.target.contains(document.querySelector(".darken")))
      {
        
        gsap.to(".pop-up",
        {
            left:-(window.innerWidth * 0.35),
            duration:0.2
        })
        gsap.to(".darken",
        {
            opacity:0,
            zIndex:0,
            duration:0.5
        })
      }
    })
    window.addEventListener("resize", () => 
    {
      gsap.to(".pop-up",
      {
          left:-(window.innerWidth * 0.35),
          duration:0
  
      })
      gsap.to(".darken",
      {
          opacity:0,
          duration:0,
          zIndex:0
          
      })
    })
  
  const btn = document.querySelector('.btn');
  
  btn.addEventListener('click', () =>
  {
      
    gsap.to(".pop-up",
    {
        left:0,
        duration:0.1
    })
    gsap.to(".darken",
    {
        opacity:1,
        duration:0.3,
        zIndex:10
    })
  
  })  
      const ctx = gsap.context(()=> {
        gsap.to('.box',
      {
        opacity: 1,
        x:100,
        duration: 5,
        scrollTrigger: 
        {
          trigger: '.box',
          start:'-300px 250px',
          end:'bottom 250px',// Stop pinning when the trigger element is 300 pixels below its top position
          pin:true,
          pinSpacing: false,
          scrub:true
        },
        
      }
      
    )
    gsap.to('.bitcoin',
    {
      opacity: 1,
      x:-400,
      duration: 5,
      scrollTrigger: 
      {
        trigger: '.bitcoin',
        start:'top 250px',
        end:'bottom 250px',// Stop pinning when the trigger element is 300 pixels below its top position
        pin:true,
        pinSpacing: false,
        scrub:true,
        
      },
    })
    gsap.to('.box2',
      {
        opacity: 1,
        x:-100,
        duration: 5,
        scrollTrigger: 
        {
          trigger: '.box2',
          start:'top 250px',
          end:'200px 250px',// Stop pinning when the trigger element is 300 pixels below its top position
          pin:true,
          pinSpacing: false,
          scrub:1
        },
        
      }
      
    )
  })
    
  return () => ctx.revert();

  }, []);

  const { data: session, status } = useSession();
    return <div>
            {(status == 'authenticated') && (<div className="text-white absolute right-[20px] top-[20px]">Signed in!</div>)}
            <div className="absolute right-[20px] text-right">
            </div>
            <div className = "body">
              <div className="absolute "><ThreeScene/></div>
              
              <div className = " absolute pop-up blurred left-[-35vw] w-[35vw] h-[100vh] z-20 backdrop-blur-3xl"></div>
              <div className = "absolute left-[-35vw] pop-up w-fit h-fit z-40">
                <SignIn/>
              </div>
              <div className = "opacity-0 darken absolute blurred w-[100vw] h-[100vh] backdrop-blur-[5px] z-0"></div>
              
            <div className='text-white relative top-[30vh] w-[100vw] h-[100px] flex items-center flex-col'>
                <div className = 'relative w-[50%] text-center text-3xl'>Discover a world of secure transactions and effortless control. Elevate your financial experience – join us now!</div>
                <div className="flex gap-4">
                <button className = 'btn z-[2] relative top-[50px] pr-10 pl-10 pt-2 pb-2 text-[#99D036] text-[20px] border-[1px] border-[#99D036] hover:border-[#FF0000] hover:text-[#FF0000] duration-200'>Sign In</button>
                <button className = 'btn z-[2] relative top-[50px] pr-8 pl-8 pt-2 pb-2 hover:text-[#99D036] text-[20px] border-[1px] hover:border-[#99D036] border-[#FF0000] text-[#FF0000] duration-200' onClick={() => signOut({callbackUrl: "http://localhost:3000/"})}>Sign out</button>
                </div>
            </div>
            
            <div className=" mt-[700px] w-[100vw] h-[100vh]"><div className="opacity-0 box text-white text-2xl w-[600px] h-[100px] z-10">Enjoy secure financial transactions with our advanced platform. Our encryption ensures privacy, offering a seamless experience for payments, transfers, and account management. </div><div className="opacity-0 box2 absolute right-[0] text-right text-white text-2xl w-[700px] h-[100px] z-10">Stay in control with real-time updates on spending and deposits. Our user-friendly design simplifies financial tracking for informed and stress-free decision-making. </div></div>
            
            </div>
           
        </div>

}
