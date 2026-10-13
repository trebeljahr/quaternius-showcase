import { Environment, OrbitControls, Stage } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";
import { WorkerRGBELoader } from "@/components/canvas/WorkerRGBELoader";
import { usePackViewer } from "@/components/PackViewerProvider";

// Served from public/hdri instead of the drei-assets repo on GitHub. No model
// shows until this file arrives, and raw.githubusercontent.com links have
// broken before. Source and license: LICENSES.md.
const ENVIRONMENT_URL = "/hdri/potsdamer_platz_1k.hdr";

// Its own component, so it suspends next to the model instead of in front of
// it: the .hdr and the first .glb download at the same time.
function StudioEnvironment() {
  const map = useLoader(WorkerRGBELoader, ENVIRONMENT_URL);
  return <Environment map={map} />;
}

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
        <StudioEnvironment />
      </Stage>
      <OrbitControls makeDefault />
      <color attach="background" args={["#f5efe6"]} />
    </>
  );
}
