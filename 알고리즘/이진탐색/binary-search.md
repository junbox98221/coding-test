# 이진 탐색이란?

| 정렬된 배열에서 특정 값을 찾기 위해, 중간 값을 기준으로 범위를 반으로 줄여가며 탐색하는 알고리즘

시간복잡도: O(log N)

```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
```
