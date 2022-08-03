import React from "react";
import Particles from "react-tsparticles";

function About() {
  return (
    <div>
      {/* <Particles
        options={{
          background: { color: "#333333" },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true,
            },
          },
          particles: {
            color: {
              value: "ffffff",
            },
            number: {
              density: {
                enabled: true,
                area: 1080,
              },
              limit: 0,
              value: 400,
            },
            opacity: {
              animation: {
                enabled: true,
                minimumValue: 0.05,
                speed: 1,
                sync: false,
              },
              random: {
                enabled: true,
                minimumValue: 0.05,
              },
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: {
                enabled: true,
                minimumValue: 0.05,
              },
              value: 1,
            },
          },
        }}
      /> */}
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default About;
