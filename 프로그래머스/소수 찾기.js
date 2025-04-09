function solution(numbers) {
  const digits = numbers.split("");
  const set = new Set();

  for (let i = 1; i <= digits.length; i++) {
    const perms = getPermutations(digits, i);
    perms.forEach((perm) => {
      const num = Number(perm.join(""));
      set.add(num);
    });
  }

  let count = 0;

  set.forEach((num) => {
    if (isDigit(num)) count++;
  });

  return count;
}

const getPermutations = (arr, selectedNum) => {
  if (selectedNum === 1) {
    return arr.map((value) => [value]);
  }

  const result = [];
  arr.forEach((fixedNum, index) => {
    const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
    const perms = getPermutations(rest, selectedNum - 1);

    perms.map((perm) => {
      result.push([fixedNum, ...perm]);
    });
  });

  return result;
};

const isDigit = (n) => {
  if (n < 2) return false;

  for (let num = 2; num <= Math.sqrt(n); num++) {
    if (n % num === 0) return false;
  }

  return true;
};
