import Particles from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const Particle = () => {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, // No full-screen force
        background: { color: "transparent" }, // Ensure transparency
        fpsLimit: 60,
        particles: {
          number: { value: 100, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" }, // White particles
          shape: { type: "circle" },
          opacity: { value: 0.2, random: true }, // Lower opacity
          size: { value: 3, random: true },
          move: { enable: true, speed: 1.5, outModes: { default: "out" } },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.2, // Make links also transparent
            width: 1,
          },
        },
        interactivity: {
          events: {
            // onHover: { enable: true, mode: "repulse" }, // Commented out
          },
          modes: { repulse: { distance: 100, duration: 0.4 }, push: { quantity: 4 } },
        },
      }}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none" // Ensuring it's in the background
    />
  );
};
export default Particle;