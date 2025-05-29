function solution(dirs) {
  const visits = {};
  let place = [0, 0];

  dirs.split("").forEach((dir) => {
    const prevPlace = [...place];
    place = move(place, dir);

    if (place[0] !== prevPlace[0] || place[1] !== prevPlace[1])
      visits[
        `${(place[0] + prevPlace[0]) / 2},${(place[1] + prevPlace[1]) / 2}`
      ] = true;
  });

  return Object.keys(visits).length;
}

const move = ([x, y], dir) => {
  let nx = x;
  let ny = y;

  switch (dir) {
    case "U":
      ny += 1;
      break;
    case "D":
      ny -= 1;
      break;
    case "L":
      nx -= 1;
      break;
    case "R":
      nx += 1;
      break;
  }

  if (nx < -5 || nx > 5 || ny < -5 || ny > 5) {
    return [x, y];
  }

  return [nx, ny];
};
