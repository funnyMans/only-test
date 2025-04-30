export const getAngles = (count: number = 2) => {
  return Array.from({ length: count }, (_, i) => i * (360 / count) - 60);
};
