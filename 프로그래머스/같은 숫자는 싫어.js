function solution(arr) {
  let stack = [];

  for (const number of arr) {
    if (stack[stack.length - 1] !== number) {
      stack.push(number);
    }
  }

  return stack;
}
