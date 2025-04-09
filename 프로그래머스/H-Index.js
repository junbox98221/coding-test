function solution(citations) {
  let h = 0;
  const citationList = citations.sort((a, b) => a - b);

  for (let i = 0; i < citationList.length; i++) {
    const leftCitationCount = citationList.length - i;

    if (leftCitationCount <= citationList[i] && leftCitationCount > h) {
      h = leftCitationCount;
    }
  }

  return h;
}
