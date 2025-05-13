function solution(triangle) {
  const dp = [];
  for (let list of triangle) {
    dp.push(Array.from({ length: list.length }).fill(0));
  }
  dp[0][0] = triangle[0][0];

  for (let y = 0; y < triangle.length; y++) {
    for (let x = 0; x < triangle[y].length; x++) {
      const left = y > 0 && x > 0 ? dp[y - 1][x - 1] : 0;
      const right = y > 0 && x < dp[y].length - 1 ? dp[y - 1][x] : 0;

      dp[y][x] = left > right ? left : right;
      dp[y][x] += triangle[y][x];
    }
  }

  console.log("🚀 ~ solution ~ dp:", dp);
  return Math.max(...dp[dp.length - 1]);
}

solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]);
