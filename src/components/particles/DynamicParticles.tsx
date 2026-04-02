import React from 'react';
import Particles from '@tsparticles/react';

export const DynamicParticles: React.FC = () => (
  <Particles
    className="absolute inset-0"
    id="tsparticles"
    options={{
      background: {
        color: {
          value: 'transparent',
        },
      },
      fullScreen: {
        enable: false,
      },
      style: {
        height: '100%',
        left: '0',
        position: 'absolute',
        top: '0',
        width: '100%',
      },
      fpsLimit: 30,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push',
          },
          onHover: {
            enable: false,
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
          value: '#9eb1cb',
        },
        links: {
          color: '#9eb1cb',
          distance: 200,
          enable: true,
          opacity: 0.09,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: false,
          speed: 0.34,
          straight: false,
        },
        number: {
          limit: {
            mode: 'wait',
            value: 72,
          },
          density: {
            enable: true,
          },
          value: 56,
        },
        opacity: {
          value: {
            min: 0.06,
            max: 0.14,
          },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 2.8 },
        },
      },
      detectRetina: true,
    }}
  />
);
