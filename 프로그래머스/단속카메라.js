function solution(routes) {
  const sortedRoutes = routes.sort((a, b) => a[0] - b[0]);
  let answer = 0;
  let index = 0;

  while (index < sortedRoutes.length) {
    let [x1, x2] = sortedRoutes[index];

    while (x2 >= sortedRoutes[index + 1]?.[0]) {
      x1 = Math.max(x1, sortedRoutes[index + 1][0]);
      x2 = Math.min(x2, sortedRoutes[index + 1][1]);
      index++;
    }

    answer++;
    index++;
  }

  return answer;
}
