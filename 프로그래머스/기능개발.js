function solution(progresses, speeds) {
  const requiredDays = progresses.map((_, index) => {
    const leftDay = Math.ceil((100 - progresses[index]) / speeds[index]);
    return leftDay;
  });

  let answer = [];

  let dayPassed = 0;
  for (const requiredDay of requiredDays) {
    if (dayPassed < requiredDay) {
      answer.push(1);
      dayPassed = requiredDay;
    } else {
      answer[answer.length - 1] = answer[answer.length - 1] + 1;
    }
  }

  return answer;
}
