export const convertToKg = (stones, pounds) => {
  if (stones < 0 || pounds < 0 || pounds > 14) {
    throw new Error("Invalid stones and pounds values.");
  }
  const stonesInKg = stones * 6.35029;
  const poundsInKg = pounds * 0.453592;
  return stonesInKg + poundsInKg;
};

export const convertToCm = (feet, inches) => {
  if (feet < 0 || inches < 0 || inches > 12) {
    throw new Error("Invalid feet and inches values.");
  }
  const feetInCm = feet * 30.48;
  const inchesInCm = inches * 2.54;
  return feetInCm + inchesInCm;
};

export const convertWeightToImperial = (weight) => {
  const stones = Math.floor(weight / 6.35029);
  const remainingWeightInKg = weight - stones * 6.35029;
  const pounds = Math.round(remainingWeightInKg / 0.453592);
  return {
    stones: stones,
    pounds: pounds,
  };
};

export const calculateHealthyWeight = (height) => {
  const heightM = height / 100;
  const lowerBoundWeight = 18.5 * heightM * heightM;
  const higherBoundWeight = 24.9 * heightM * heightM;
  return {
    lowerBoundWeight: lowerBoundWeight.toFixed(1),
    higherBoundWeight: higherBoundWeight.toFixed(1),
  };
};
