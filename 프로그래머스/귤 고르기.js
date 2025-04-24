function solution(k, tangerines) {
  const hashMap = {};

  tangerines.forEach((tangerine) => {
    hashMap[tangerine] = (hashMap[tangerine] || 0) + 1;
  });

  const tangerineCounts = Object.values(hashMap).sort((a, b) => b - a);

  let answer = 0;
  let totalCount = 0;
  for (let count of tangerineCounts) {
    totalCount += count;
    answer++;
    if (totalCount >= k) {
      break;
    }
  }

  return answer;
}
