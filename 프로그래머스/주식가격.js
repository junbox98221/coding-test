function solution(prices) {
  let answer = Array(prices.length).fill(0);
  let stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (prices[stack[stack.length - 1]] > prices[i]) {
      const poppedPriceIndex = stack.pop();
      answer[poppedPriceIndex] = i - poppedPriceIndex;
    }

    stack.push(i);
  }

  while (stack.length > 0) {
    const top = stack.pop();
    answer[top] = prices.length - 1 - top;
  }

  return answer;
}
