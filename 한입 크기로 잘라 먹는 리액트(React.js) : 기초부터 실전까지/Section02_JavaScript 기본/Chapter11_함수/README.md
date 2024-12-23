# 함수
JavaScript에서 기본 구성 요소 중 하나이다. 보통 함수란 자신의 외부(재귀 함수의 경우 스스로) 코드가 호출할 수 있는 "하위 프로그램"이다. JavaScript에서 함수는 다른 함수로 전달되거나 반환받을 수 있고, 변수와 속성을 할당받을 수도 있기 때문에 일급 객체에 해당한다.
```
일급 함수

프로그래밍 언어는 해당 언어의 함수들이 다른 변수처럼 다루어질 때 일급 함수를 가진다고 합니다.
예를 들어, 일급 함수를 가진 언어에서 함수는 다른 함수들에 전달인자로 제공되고, 다른 함수에 의해 반환될 수 있으며, 변수에 값으로서 할당될 수 있습니다.
```


- 함수 정의(선언) : 함수를 새롭게 만드는 행위
  - 함수의 이름
  - 함수의 매개변수들(괄호로 묶고 쉼표로 구분)
    ```
    function square(number) {
      return number * number;
    }
    ```

  
- 함수 호출 : 함수를 호출하면 지정된 매개 변수를 가지고 작업이 수행
  ```
  square(5);
  ```

- 함수 호이스팅
  ```
  console.log(square(5)); // `25`

  function square(n) {
    return n * n;
  }
  ```
  - 이 코드는 square 함수가 정의되기 전에 호출되었지만 오류 없이 실행된다. JavaScript 인터프리터가 전체 함수     선언을 현재 스코프의 최상단으로 끌어올려지기 때문에 위의 코드는 다음과 같다.
  ```
  // 모든 함수 선언이 스코프의 최상단으로 끌어올려집니다.
  function square(n) {
    return n * n;
  }
  
  console.log(square(5)); // `25`
  ```
  - 함수 호이스팅은 함수 선언에만 적용된다. 함수 표현식에선 쓸 수 없다.




<h4>예시</h4>

```
let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

// 호이스팅
// -> 코드의 하단 부분에 작성된 선언문들을 이 코드를 실행하기 전 최상단으로 끌어올려서 실행 시켜준다.
function getArea(width, height) {
  function another() {
    // 중첩 함수 가능
    console.log("another");
  }

  another();
  let area = width * height;

  return area;
}
```
---
