function solution(participantList, completionList) {
  let hashMap = {};

  for (const participant of participantList) {
    hashMap[participant] = (hashMap[participant] || 0) + 1;
  }

  for (const completer of completionList) {
    hashMap[completer] -= 1;
  }

  for (const key in hashMap) {
    if (hashMap[key] > 0) {
      return key;
    }
  }
}
