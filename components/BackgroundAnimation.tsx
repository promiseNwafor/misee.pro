import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import BubbleBackground from './BubbleBackground';

// function Particles() {
//   const particlesRef = useRef<THREE.Points>(null!);

//   useFrame(() => {
//     if (particlesRef.current) {
//       particlesRef.current.rotation.y += 0.001;
//     }
//   });

//   const geometry = new THREE.BufferGeometry();
//   const vertices = new Float32Array(15000); // 5000 points * 3 coordinates (x, y, z)
//   for (let i = 0; i < vertices.length; i += 3) {
//     vertices[i] = Math.random() * 2 - 1; // x
//     vertices[i + 1] = Math.random() * 2 - 1; // y
//     vertices[i + 2] = Math.random() * 2 - 1; // z
//   }
//   geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

//   return (
//     <points ref={particlesRef}>
//       <bufferGeometry attach="geometry" />
//       <pointsMaterial size={0.01} color="#ffffff" />
//     </points>
//   );
// }

// export default function BackgroundAnimation() {
//   return (
//     <div className="fixed inset-0 -z-10">
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <Particles />
//       </Canvas>
//     </div>
//   );
// }


export default function BackgroundAnimation() {
  const animationVariants = {
    rotate: {
      rotate: 360,
      transition: { repeat: Infinity, duration: 10, ease: 'linear' }
    }
  };

    return (
        <>
        <BubbleBackground />
        {/* <motion.div
        className="absolute inset-0 bg-background"
        variants={animationVariants}
        animate="rotate"
        style={{ backgroundSize: '200% 200%' }}
        /> */}
      </>
  );
}

