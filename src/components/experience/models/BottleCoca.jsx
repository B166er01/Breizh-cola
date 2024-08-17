"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function BottleCoca(props) {
  const bottleRef = useRef();
  const { nodes, materials } = useGLTF("/model/bottleCoca.glb");

  useGSAP(() => {
    if (bottleRef.current) {
      gsap.to(bottleRef.current.position, {
        x: 68,
        scrollTrigger: {
          trigger: "#blue",
          start: "top 40%",
        },
        duration: 1.5,
      });

      gsap.to(bottleRef.current.rotation, {
        y: Math.PI,
        scrollTrigger: {
          trigger: "#blue",
          start: "top 40%",
        },
        duration: 1.5,
      });
    }
  });

  return (
    <group
      ref={bottleRef}
      {...props}
      dispose={null}
      scale={190}
      position={[120, -30, 0]}
    >
      <group rotation={[-Math.PI / 2, Math.PI / 16, 0]} scale={0.047}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.Circle_Drink_0.geometry}
              material={materials.Drink}
            />
            <mesh
              geometry={nodes.Circle_DrinkLight_0.geometry}
              material={materials.DrinkLight}
            />
            <mesh
              geometry={nodes.Circle_DrinkLightYellow_0.geometry}
              material={materials.DrinkLightYellow}
            />
            <mesh
              geometry={nodes.Circle_Glass_0.geometry}
              material={materials.Glass}
            />
          </group>
          <mesh
            geometry={nodes.Circle001_Label_0.geometry}
            material={materials.Label}
            position={[0, 292.193, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[101, 101, 100]}
          />
          <mesh
            geometry={nodes.Circle002_Lid_0.geometry}
            material={materials.material}
            position={[0, 689.021, -0.828]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Plane_Label2_0.geometry}
            material={materials.Label2}
            position={[290.431, 348.576, 198.554]}
            rotation={[3.121, 0, Math.PI]}
            scale={[155.124, 54.021, 99.98]}
          />
          <mesh
            geometry={nodes.Plane001_Logo_0.geometry}
            material={materials.Logo}
            position={[575.758, 348.576, 198.554]}
            rotation={[3.121, 0, Math.PI]}
            scale={[113.859, 54.219, 973.874]}
          />
          <mesh
            geometry={nodes.Plane002_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[0, 718.748, 0]}
            rotation={[-Math.PI / 2, 0, 0.419]}
            scale={[34.694, 12.561, 82.894]}
          />
          <mesh
            geometry={nodes.Text_Text_0.geometry}
            material={materials.Text}
            position={[103.224, 616.872, 90.918]}
            rotation={[-3.13, 0, 0]}
            scale={-100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/model/bottleCoca.glb");
