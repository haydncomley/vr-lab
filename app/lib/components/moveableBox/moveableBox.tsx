import * as THREE from 'three'
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

interface MoveableBoxProps {}

export const MoveableBox = ({}: MoveableBoxProps) => {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [dragging, setIsDragging] = useState(false)

    const startRef = useRef(new THREE.Vector3(0, 0, -2))
    const distanceRef = useRef(0)

    useFrame((_, delta) => {
        meshRef.current.rotation.x += delta;
        meshRef.current.rotation.y += delta;
        meshRef.current.rotation.z += delta;
    })

    return  (
        <mesh 
            ref={meshRef}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            onPointerDown={(e) => {
                setHover(true);
                distanceRef.current = e.ray.origin.distanceTo(meshRef.current.position);
                setIsDragging(true);
            }}
            onPointerUp={(e) => {
                setIsDragging(false);
            }}
            onPointerMove={(e) => {
                if (dragging && distanceRef.current) {                  
                    const newPosition = e.ray.direction.clone().multiplyScalar(distanceRef.current).add(e.ray.origin);
                    meshRef.current.position.copy(newPosition);
                }
            }}
            position={startRef.current}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={
                dragging ? '#f54091' : (hovered ? '#fada69' : '#f7eabc')
            } />
        </mesh>
    )
};

