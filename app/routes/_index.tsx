import * as THREE from 'three'
import { useThree } from "@react-three/fiber";
import type { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";
import { Main } from "~/lib/components/main";
import { MoveableBox } from "~/lib/components/moveableBox";

export const meta: MetaFunction = () => {
  return [
    { title: "My App" },
    { name: "description", content: "Welcome to my app!" },
  ];
};

export default function Index() {
  const { scene } = useThree();

    useEffect(() => {
        scene.background = new THREE.Color(0xf7feff);
    }, [])

  return (
    <>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <MoveableBox></MoveableBox>
    </>
  );
}