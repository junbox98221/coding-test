function solution(array, commands) {
  let answer = [];

  for (const [startIdx, endIdx, idx] of commands) {
    const slicedArray = array.slice(startIdx - 1, endIdx);
    const sortedArray = slicedArray.sort((a, b) => a - b);
    answer.push(sortedArray[idx - 1]);
  }

  return answer;
}
