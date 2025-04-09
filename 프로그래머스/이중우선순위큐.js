function solution(operations) {
  let queue = [];

  for (let item of operations) {
    const [operator, num] = item.split(" ");

    if (operator === "I") {
      queue.push(Number(num));
    } else {
      if (num === "-1") {
        queue.pop();
      } else {
        queue.shift();
      }
    }
    queue.sort((a, b) => b - a);
  }

  return queue.length ? [queue[0], queue[queue.length - 1]] : [0, 0];
}
