function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let answer = 0;
  let aIndex = 0;
  let bIndex = 0;

  while (aIndex < A.length && bIndex < B.length) {
    if (A[aIndex] < B[bIndex]) {
      bIndex++;
      answer++;
      aIndex++;
    } else {
      bIndex++;
    }
  }

  return answer;
}
