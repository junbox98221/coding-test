function dfs(graph, start) {
  const stack = [start];
  const visited = new Set();

  while (stack.length !== 0) {
    let node = stack.pop();

    if (!visited.has(node)) {
      visited.add(node);

      const neighbors = graph[node];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }
}
