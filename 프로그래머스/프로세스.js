function solution(priorities, location) {
  let queue = priorities.map((priority, index) => ({
    priority,
    isTarget: index === location,
  }));

  let answer;
  let completedProcessIndex = 0;

  while (queue.length > 0) {
    const maxPriority = Math.max(...queue.map(({ priority }) => priority));
    const { priority, isTarget } = queue.shift();

    if (priority === maxPriority) {
      completedProcessIndex++;

      if (isTarget) {
        answer = completedProcessIndex;
      }
    } else {
      queue.push({
        priority,
        isTarget,
      });
    }
  }

  return answer;
}

solution([1, 1, 9, 1, 1, 1], 0);
