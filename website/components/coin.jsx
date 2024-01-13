import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";



export function Coin(props) {
  const { nodes, materials } = useGLTF("/assets/coin.gltf");
  
  return (
    <group {...props} dispose={null}>
        <mesh geometry={nodes["01_office"].geometry} material={materials["01"]} />
        <mesh geometry={nodes["02_library"].geometry} material={materials["02"]}/>
        <mesh geometry={nodes["03_attic"].geometry} material={materials["03"]}/>
    </group>
  );
}

useGLTF.preload("@/assets/coin.gltf");