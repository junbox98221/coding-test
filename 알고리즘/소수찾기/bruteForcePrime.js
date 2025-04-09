const bruteForcePrime = (n) => {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % 2 === 0) return false;
  }

  return true;
};
