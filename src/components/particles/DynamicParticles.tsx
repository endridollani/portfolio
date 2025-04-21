import React from 'react';
import Particles from '@tsparticles/react';

export const DynamicParticles: React.FC = () => (
  <Particles
    id="tsparticles"
    options={{
      background: {
        color: {
          value: 'transparent',
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 10,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#94a3b8',
        },
        links: {
          color: '#94a3b8',
          distance: 300,
          enable: true,
          opacity: 0.1,
          width: 2,
        },
        move: {
          direction: 'outside',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          limit: {
            mode: 'wait',
            value: 80,
          },
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.1,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }}
  />
);
