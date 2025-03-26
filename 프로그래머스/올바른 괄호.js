function solution(strings) {
  const stack = [];

  for (const char of strings) {
    if (char === "(") {
      stack.push(char);
      continue;
    }

    if (stack.length === 0) {
      return false;
    } else {
      stack.pop();
    }
  }

  return stack.length === 0;
}
