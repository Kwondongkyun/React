## 함수 표현식(function expression)
- <b>함수 표현식(function expression)</b> : 익명 함수라 하며. 함수가 이름을 가질 필요는 없음을 의미
  - 값으로써 함수를 생성하는 방식
  - 호이스팅 불가능하다.
  
  ```
  const square = function (number) {
    return number * number;
  };
  const x = square(4); // `x` 의 값은 16
  ```

- <b>화살표 함수(=>)</b> : 함수를 이전보다 더 빠르고 간결하게 생성해 줄 수 있도록 도와줌
  ```
  let varC = (value) => {
    console.log(value); // 10
    return value + 1;
  };
  console.log(varC(10)); // 11

  
  let varD = (value) => value * 10;
  console.log(varD(20)); // 200
  ```
---
