function solution(clothes) {
  let hashMap = new Map();

  for (const [, type] of clothes) {
    hashMap.set(type, (hashMap.get(type) || 0) + 1);
  }

  const answer =
    [...hashMap.values()].reduce((acc, cur) => {
      return acc * (cur + 1);
    }, 1) - 1;

  return answer;
}
