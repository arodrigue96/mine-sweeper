const generateMine = (): boolean => {
  const probability = 0.5;

  return Math.random() < probability;
};

export default generateMine;
