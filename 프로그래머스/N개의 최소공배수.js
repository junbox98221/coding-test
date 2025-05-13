const getPrimes = (num) => {
  const primes = {};
  let divisor = 2;
  let tempNum = num;

  while (divisor <= tempNum) {
    if (tempNum % divisor === 0) {
      primes[divisor] = (primes[divisor] || 0) + 1;
      tempNum = tempNum / divisor;
    } else {
      divisor++;
    }
  }

  return primes;
};

function solution(arr) {
  const primeCount = {};

  arr.forEach((num) => {
    const primes = getPrimes(num);

    for (let prime in primes) {
      const count = primes[prime];

      primeCount[prime] =
        (primeCount[prime] || 1) < count ? count : primeCount[prime] || 1;
    }
  });

  let answer = 1;
  for (const [key, value] of Object.entries(primeCount)) {
    answer = answer * key ** value;
  }
  return answer;
}
