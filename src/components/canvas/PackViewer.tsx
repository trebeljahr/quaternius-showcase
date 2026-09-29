import { Environment, OrbitControls, Stage } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";
import { usePackViewer } from "@/components/PackViewerProvider";

/**
 * The scene contents. Everything DOM lives in components/dom/PackNav, outside
 * the Canvas, so a suspending model never takes the chrome down with it.
 */
export function PackViewer() {
  const { model: Model, stopped } = usePackViewer();

  const modelRef = useRef<Group>();

  useFrame((_, delta) => {
    if (modelRef.current?.rotation && !stopped.current) {
      modelRef.current.rotation.y -= delta * 0.2;
    }
  });

  return (
    <>
      <Stage intensity={0.5} preset="rembrandt" shadows={true} environment={null}>
        {Model && (
          <group ref={modelRef}>
            <Model.Component />
          </group>
        )}
        <Environment
          path="https://raw.githubusercontent.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/"
          files="potsdamer_platz_1k.hdr"
        />
      </Stage>
      <OrbitControls makeDefault />
      <color attach="background" args={["#f5efe6"]} />
    </>
  );
}
