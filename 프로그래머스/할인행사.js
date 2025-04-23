function solution(wants, number, discount) {
  // 필요 항목 hashMap 생성
  const hashMap = {};
  wants.forEach((want, index) => {
    hashMap[want] = number[index];
  });
  let answer = 0;

  // 할인 행사의 총 일수 - 10일 전까지 순회
  for (let i = 0; i + 10 <= discount.length; i++) {
    const tempHashMap = JSON.parse(JSON.stringify(hashMap));

    // 탐색 시작 날짜 + 10일까지 순회
    for (let j = i; j < i + 10; j++) {
      const current = discount[j];

      // 할인 품목이 필요 항목에 존재하면 tempHashMap 수정
      if (wants.includes(current)) {
        tempHashMap[current] -= 1;
      }
    }

    if (Object.values(tempHashMap).every((value) => value <= 0)) {
      answer++;
    }
  }

  return answer;
}
