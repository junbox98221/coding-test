function solution(k, dungeons) {
  let answer = 0;

  for (let i = 1; i <= dungeons.length; i++) {
    const perms = getPermutations(
      dungeons.map((_, index) => index),
      i
    );

    for (let perm of perms) {
      let fatigue = k;
      let count = 0;

      for (let index of perm) {
        const [min, need] = dungeons[index];

        if (fatigue >= min && fatigue - need >= 0) {
          count++;
          fatigue -= need;
        }
      }

      if (count > answer) {
        answer = count;
      }
    }
  }

  return answer;
}

const getPermutations = (arr, selectedNum) => {
  const result = [];

  if (selectedNum === 1) {
    return arr.map((v) => [v]);
  }

  arr.forEach((fixedNum, index) => {
    const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
    const perms = getPermutations(rest, selectedNum - 1);
    result.push(...perms.map((perm) => [fixedNum, ...perm]));
  });

  return result;
};
