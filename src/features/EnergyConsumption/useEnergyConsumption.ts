import { useState, useEffect } from 'react';

import { Launch } from '@/generated/graphql';
import { calculateEnergy } from '@/helpers/calculateEnergy';

export const useEnergyConsumption = (launches: Launch[]) => {
  const [calculatedEnergy, setCalculatedEnergy] = useState(0n);
  const masses = launches.map((launch) => launch.rocket?.rocket?.mass?.kg || 0);

  const handleCalculateClick = () => {
    setCalculatedEnergy(calculateEnergy(masses));
  };

  useEffect(() => {
    setCalculatedEnergy(0n);
  }, [launches.length]);

  return {
    calculatedEnergy,
    onCalculateClick: handleCalculateClick,
  };
};
