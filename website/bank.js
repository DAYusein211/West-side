
import React, { useRef } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";

export function Bank(props) {
  const { nodes, materials } = useGLTF("./assets/bank.gltf");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0.33, -17.089, 11.055]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle_2.geometry}
            material={nodes.Rectangle_2.material}
            position={[0, -279.39, -22.862]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <directionalLight
            intensity={0.7}
            decay={2}
            rotation={[-0.558, 0.654, 0.798]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rectangle.geometry}
            material={nodes.Rectangle.material}
            position={[-3.304, -112.951, -164.656]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Triangle.geometry}
              material={nodes.Triangle.material}
              position={[-1.177, 225.31, -101.235]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ellipse_2.geometry}
              material={nodes.Ellipse_2.material}
              position={[146.642, -128.973, 265.258]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_3.geometry}
                material={nodes.Ellipse_3.material}
                position={[0, -275.263, 0]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Ellipse_3_1.geometry}
                  material={nodes.Ellipse_3_1.material}
                  position={[294.215, 0, 0]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Ellipse_3_2.geometry}
                    material={nodes.Ellipse_3_2.material}
                    position={[0.263, 1.998, 61.013]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Ellipse_3_3.geometry}
                    material={nodes.Ellipse_3_3.material}
                    position={[0, -1.421, 216.623]}
                    scale={[1, 1, 1.036]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Ellipse_5.geometry}
                      material={nodes.Ellipse_5.material}
                      position={[0.539, 0.605, -16.892]}
                    />
                  </mesh>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Ellipse_5_1.geometry}
                    material={nodes.Ellipse_5_1.material}
                    position={[0.539, 0.605, 41.747]}
                  />
                </mesh>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Ellipse_3_4.geometry}
                  material={nodes.Ellipse_3_4.material}
                  position={[0.263, 1.998, 61.013]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Ellipse_3_5.geometry}
                  material={nodes.Ellipse_3_5.material}
                  position={[0, -1.421, 216.623]}
                  scale={[1, 1, 1.036]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Ellipse_5_2.geometry}
                    material={nodes.Ellipse_5_2.material}
                    position={[0.539, 0.605, -16.892]}
                  />
                </mesh>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Ellipse_5_3.geometry}
                  material={nodes.Ellipse_5_3.material}
                  position={[0.539, 0.605, 41.747]}
                />
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_3_6.geometry}
                material={nodes.Ellipse_3_6.material}
                position={[294.215, 0, 0]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Ellipse_3_7.geometry}
                  material={nodes.Ellipse_3_7.material}
                  position={[0.263, 1.998, 61.013]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Ellipse_3_8.geometry}
                  material={nodes.Ellipse_3_8.material}
                  position={[0, -1.421, 216.623]}
                  scale={[1, 1, 1.036]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Ellipse_5_4.geometry}
                    material={nodes.Ellipse_5_4.material}
                    position={[0.539, 0.605, -16.892]}
                  />
                </mesh>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Ellipse_5_5.geometry}
                  material={nodes.Ellipse_5_5.material}
                  position={[0.539, 0.605, 41.747]}
                />
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_3_9.geometry}
                material={nodes.Ellipse_3_9.material}
                position={[0.263, 1.998, 61.013]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_3_10.geometry}
                material={nodes.Ellipse_3_10.material}
                position={[0, -1.421, 216.623]}
                scale={[1, 1, 1.036]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Ellipse_5_6.geometry}
                  material={nodes.Ellipse_5_6.material}
                  position={[0.539, 0.605, -16.892]}
                />
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_5_7.geometry}
                material={nodes.Ellipse_5_7.material}
                position={[0.539, 0.605, 41.747]}
              />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_2_1.geometry}
              material={nodes.Rectangle_2_1.material}
              position={[7.031, -126.961, 138.232]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_2_2.geometry}
              material={nodes.Rectangle_2_2.material}
              position={[0, 0, 128.171]}
            />
          </mesh>
        </group>
        <OrthographicCamera
          makeDefault={false}
          far={100000}
          near={0}
          position={[-563.059, 186.524, 805.092]}
          rotation={[-0.228, -0.598, -0.13]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./assets/bank.gltf");

