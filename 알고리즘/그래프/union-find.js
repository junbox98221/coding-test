const parent = Array.from({ length: n }, (_, i) => i);

const find = (x) => {
  if (parent[x] !== x) parent[x] = find(parent[x]);
  return parent[x];
};

const union = (a, b) => {
  const rootA = find(a);
  const rootB = find(b);
  if (rootA !== rootB) parent[rootB] = rootA;
};

const isConnected = (a, b) => find(a) === find(b);
