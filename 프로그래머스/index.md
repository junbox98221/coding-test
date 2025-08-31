# [산 모양 타일링](https://school.programmers.co.kr/learn/courses/30/lessons/258705?language=javascript)

## 점화식

1. 기본 점화식: dp[i] = dp[i-1] + dp[i-2]

2. top 조건: 위쪽에 블록을 놓을 수 있으면 추가 경우의 수

```js
function solution(n, tops) {
    const length = n * 2 + 1;
    const map = Array(length).fill(0);
    const dp = Array(length).fill(0);

    for (let i = 1; i < length; i += 2) {
        map[i] = tops[(i - 1) / 2];
    }

    dp[0] = 1;
    dp[1] = map[1] ? 3 : 2;

    for (let i = 2; i < length; i++) {
        const top = map[i];

        dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;

        if (top) {
            dp[i] += dp[i - 1] % 10007;
        }
    }

    return dp[length - 1];
}
```
