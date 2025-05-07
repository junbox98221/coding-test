function solution(n) {
  const length = (n * (n + 1)) / 2;

  const triangles = [];

  for (let i = 0; i < n; i++) {
    triangles[i] = new Array(i + 1).fill(0);
  }

  let row = 0;
  let column = 0;
  let direction = "x";

  const setNextPosition = (direction) => {
    switch (direction) {
      case "x":
        row++;
        break;
      case "y":
        column++;
        break;
      case "z":
        column--;
        row--;
    }
  };

  const checkNextValue = (direction) => {
    switch (direction) {
      case "x":
        return triangles[row + 1]?.[column] === 0;
      case "y":
        return triangles[row]?.[column + 1] === 0;
      case "z":
        return triangles[row - 1]?.[column - 1] === 0;
    }
  };

  const setDirection = (direction) => {
    switch (direction) {
      case "x":
        return "y";
      case "y":
        return "z";
      case "z":
        return "x";
    }
  };

  for (let i = 1; i <= length; i++) {
    triangles[row][column] = i;

    if (!checkNextValue(direction)) {
      direction = setDirection(direction);
    }

    setNextPosition(direction);
  }

  return triangles.flat();
}
