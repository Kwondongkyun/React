# 자료형
### 1. Number Type
- 양수, 음수, 실수, 무한대, ...
  ```
  let num1 = 27;
  let num2 = 1.5;
  let num3 = -20;
  
  let inf = Infinity;
  let mInf = -Infinity;
  
  let nam = NaN;
  ```

### 2. String Type(문자열)
- 문자열 값들을 모두 포함하는 타입 (ex. 사람 이름)
  ```
  let myName = "권";
  ```

- 덧셈 연산 지원
  ```
  let myLocation = "분당";
  let introduce = myName + myLocation;
  ```

- 백틱 (``) / 템플릿 리터럴 문법<br> -> 문자열 안에 변수의 값을 동적으로 집어 넣을 수 있다.
  ```
  let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
  // 권은 분당에 거주합니다.
  ```

### 3. Boolean Type
- 현재의 상태를 의미하는 데에 주로 사용된다.
  ```
  let isSwitchOn = true;
  let isEmpty = false;
  ```

### 4. Null Type (아무것도 없다)
- 어떠한 변수에 아무런 값도 담겨 있지 않음을 표현하기 위해 사용
  ```
  let empty = null;
  ```

### 5. Undefined Type
- 변수를 선언하고 아무런 값도 할당하지 않았을 때 자동으로 들어가는 값
  ```
  let none;
  ```
---
