function solution(s) {
  const dp = new Array(s.length)
    .fill()
    .map((_) => new Array(s.length).fill(false));
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    answer = 1;
  }

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      answer = 2;
      dp[i][i + 1] = true;
    }
  }

  for (let length = 3; length <= s.length; length++) {
    for (let start = 0; start <= s.length - length; start++) {
      const end = start + length - 1;
      if (dp[start + 1][end - 1] && s[start] === s[end]) {
        dp[start][end] = true;
        answer = length;
      }
    }
  }

  return answer;
}
