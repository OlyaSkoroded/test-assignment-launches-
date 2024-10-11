export const calculateEnergy = (rocketMasses: number[]) => {
  const fuelPerKg = 15n;
  const energyPerKgFuel = BigInt(1.35e7);

  const totalEnergy = rocketMasses.reduce((acc, mass) => {
    const totalFuel = fuelPerKg * BigInt(mass);
    const energyForRocket = totalFuel * energyPerKgFuel;
    return acc + energyForRocket;
  }, 0n);

  return totalEnergy;
};
