function solution(numbers) {
  const stack = [{ number: numbers[0], index: 0 }];
  const answer = new Array(numbers.length).fill(-1);
  let index = 1;

  // index 만큼 반복
  while (index < numbers.length) {
    const newNumber = numbers[index];

    // 새로 추가할 숫자보다 stack 노드가 작은지 검사
    while (stack[stack.length - 1]?.number < newNumber) {
      // 작다면 pop하고 답에 작성
      const { index: answerIndex } = stack.pop();
      answer[answerIndex] = newNumber;
    }

    stack.push({
      number: newNumber,
      index,
    });
    index++;
  }

  return answer;
}
