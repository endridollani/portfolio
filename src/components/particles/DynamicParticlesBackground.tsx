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
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-site-surface" />
      <div className="absolute inset-0 z-[1] bg-site-grid opacity-18" />
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_top,rgba(224,186,122,0.06),transparent_40%)]" />
      <div className="absolute inset-0 z-[3]">{init ? <DynamicParticles /> : null}</div>
    </div>
  );
};
