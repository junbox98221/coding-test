function solution(brown, yellow) {
  let answer;

  for (let width = 1; width <= yellow; width++) {
    if (yellow % width === 0) {
      const height = yellow / width;

      if ((width + height) * 2 + 4 === brown) {
        answer =
          width > height ? [width + 2, height + 2] : [height + 2, width + 2];
        break;
      }
    }
  }

  return answer;
}
