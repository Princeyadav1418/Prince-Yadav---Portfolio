import { Suspense, useEffect, useState } from 'react';

export default function Scene() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [ThreeLoaded, setThreeLoaded] = useState<null | {
    Canvas: any;
    PerspectiveCamera: any;
    Float: any;
    Sphere: any;
    MeshDistortMaterial: any;
    Stars: any;
    Environment: any;
  }>(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLightMode(document.documentElement.classList.contains('light-mode'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    setIsLightMode(document.documentElement.classList.contains('light-mode'));

    // Dynamically import heavy 3D libraries to split chunks further
    let mounted = true;
    Promise.all([
      import('@react-three/fiber'),
      import('@react-three/drei')
    ]).then(([fiber, drei]) => {
      if (!mounted) return;
      setThreeLoaded({
        Canvas: fiber.Canvas,
        PerspectiveCamera: drei.PerspectiveCamera,
        Float: drei.Float,
        Sphere: drei.Sphere,
        MeshDistortMaterial: drei.MeshDistortMaterial,
        Stars: drei.Stars,
        Environment: drei.Environment
      });
    }).catch(() => {
      // ignore load errors; Scene will remain empty
    });

    return () => {
      mounted = false;
      observer.disconnect();
    };
  }, []);

  if (!ThreeLoaded) return null;

  const { Canvas, PerspectiveCamera, Float, Sphere, MeshDistortMaterial, Stars, Environment } = ThreeLoaded;

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden z-0 pointer-events-none">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-black/80 to-transparent z-0" />
      
      <Canvas className="w-full h-full opacity-60" dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <ambientLight intensity={isLightMode ? 0.8 : 0.2} />
        <directionalLight position={[10, 10, 5]} intensity={isLightMode ? 2 : 1} />
        <spotLight position={[-10, 10, -5]} intensity={isLightMode ? 3 : 2} color={isLightMode ? "#818cf8" : "#4f46e5"} />
        
        <Suspense fallback={null}>
          <Float speed={1.2} rotationIntensity={1.5} floatIntensity={2}>
            <Sphere args={[1.5, 32, 32]} position={[3, 1, -2]}>
              <MeshDistortMaterial
                color={isLightMode ? "#a78bfa" : "#0f766e"}
                emissive={isLightMode ? "#ddd6fe" : "#022c22"}
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0.2}
                metalness={0.8}
              />
            </Sphere>
          </Float>

          <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
            <Sphere args={[1.2, 32, 32]} position={[-3, -1, -3]}>
              <MeshDistortMaterial
                color={isLightMode ? "#818cf8" : "#4c1d95"}
                emissive={isLightMode ? "#c7d2fe" : "#2e1065"}
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.3}
                metalness={0.9}
              />
            </Sphere>
          </Float>

          {isLightMode ? null : <Stars radius={100} depth={50} count={1000} factor={3} saturation={0} fade speed={0.5} />}
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black z-10" />
    </div>
  );
}
