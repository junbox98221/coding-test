function solution(skillLesson, skill_trees) {
  let answer = 0;

  const skillMap = {};
  for (const skill of skillLesson) {
    skillMap[skill] = true;
  }

  for (const skill_tree of skill_trees) {
    const skills = [...skillLesson];
    let isValid = true;

    for (const skill of skill_tree) {
      if (skillMap[skill]) {
        if (skill !== skills.shift()) {
          isValid = false;
          break;
        }
      }
    }

    if (isValid) answer++;
  }

  return answer;
}
