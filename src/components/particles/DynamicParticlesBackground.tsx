import { useEffect, useState } from 'react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { DynamicParticles } from './DynamicParticles';

export const DynamicParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 z-[-2] bg-gradient-animate opacity-20" />

      {init ? <DynamicParticles /> : null}
    </div>
  );
};
