# 반복문(Loop, Iteration)
- 어떠한 동작을 반복해서 수행할 수 있도록 만들어 주는 문법
  - continue : 반복의 특정 회차 건너뛰기
  - break : 강제 종료

    ```
    for (let idx = 1; idx <= 10; idx++) {
      if (idx % 2 === 0) {
        continue;
      } else {
        console.log(idx);
      }
    
      if (idx >= 5) {
        break;
      }
    }
    // 1, 3, 5
    ```
---
