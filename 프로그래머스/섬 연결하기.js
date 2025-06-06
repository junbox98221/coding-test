function solution(n, costs) {
  let count = 0;
  let answer = 0;
  const parents = Array.from({ length: n }, (_, index) => index);

  costs.sort((a, b) => a[2] - b[2]);

  const find = (index) => {
    if (parents[index] !== index) {
      parents[index] = find(parents[index]);
    }

    return parents[index];
  };

  const union = (start, end) => {
    const parentIndex1 = find(start);
    const parentIndex2 = find(end);

    if (parentIndex1 !== parentIndex2) {
      parents[parentIndex2] = parentIndex1;
    }
  };

  const isConnected = (index1, index2) => {
    return find(index1) === find(index2);
  };

  for (let [start, end, price] of costs) {
    if (!isConnected(start, end)) {
      union(start, end);
      count++;
      answer += price;
    }

    if (count === n - 1) break;
  }

  return answer;
}
