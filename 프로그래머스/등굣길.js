function solution(xLength, yLength, puddles) {
  const dp = Array.from({ length: yLength }, () => new Array(xLength).fill(0));
  puddles.forEach(([puddleX, puddleY]) => (dp[puddleY - 1][puddleX - 1] = -1));

  dp[0][0] = 1;

  for (let y = 0; y < yLength; y++) {
    for (let x = 0; x < xLength; x++) {
      if (dp[y][x] === -1 || (y === 0 && x === 0)) continue;

      let left = 0;
      let top = 0;

      if (x !== 0 && dp[y][x - 1] !== -1) left = dp[y][x - 1];
      if (y !== 0 && dp[y - 1][x] !== -1) top = dp[y - 1][x];
      dp[y][x] = (left + top) % 1000000007;
    }
  }
  return dp[yLength - 1][xLength - 1] % 1000000007;
}
