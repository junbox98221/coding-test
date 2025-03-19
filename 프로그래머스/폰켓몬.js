function solution(pokemonList) {
  const pokemonSet = new Set(pokemonList);
  const max = pokemonList.length / 2;

  return pokemonSet.size > max ? max : pokemonSet.size;
}
