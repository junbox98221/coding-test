const getPermutations = (arr, selectNum) => {
  const result = [];

  if (selectNum === 1) {
    return arr.map((value) => [value]);
  }

  arr.forEach((fixed, index) => {
    const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
    const perms = getPermutations(rest, selectNum - 1);
    const attached = perms.map((perm) => [fixed, ...perm]);

    result.push(...attached);
  });

  return result;
};
