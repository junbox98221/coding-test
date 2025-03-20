function solution(phone_book) {
  const hashMap = new Set(phone_book);

  for (const phone_number of phone_book) {
    let temp = "";
    for (const number of phone_number) {
      temp += number;
      if (hashMap.has(temp) && temp !== phone_number) {
        return false;
      }
    }
  }

  return true;
}
