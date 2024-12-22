# 변수

### 1. 변수
```
let age;
age = 30;
```

### 2. 상수
```
const birth = "2001.01.01";
```

### 3. 변수 명명규칙(네이밍 규칙)
- <h4>$, _ 제외한 기호는 사용할 수 없다.</h4>

  ```
  let $_name;
  ```

- <h4>숫자로 시작할 수 없다.</h4>

  ```
  let name1;
  let _2name;
  ```

- <h4>예약어를 사용할 수 없다.</h4>

  ```
  let if;  // 오류
  let name;
  ```

### 4. 변수 명명 가이드

- <p>어떤 역할을 하는 변수인지 알아볼 수 있게 작성하는게 좋다.</p>

---
# 자료형
### 1. Number Type
- <h4>양수, 음수, 실수, 무한대, ...</h4>

  ```
  let num1 = 27;
  let num2 = 1.5;
  let num3 = -20;
  
  let inf = Infinity;
  let mInf = -Infinity;
  
  let nam = NaN;
  ```

### 2. String Type(문자열)
- <h4>문자열 값들을 모두 포함하는 타입 (ex. 사람 이름)</h4>

  ```
  let myName = "권";
  ```

- <h4>덧셈 연산 지원</h4>

  ```
  let myLocation = "분당";
  let introduce = myName + myLocation;
  ```

- <h4>백틱 (``) / 템플릿 리터럴 문법<br> -> 문자열 안에 변수의 값을 동적으로 집어 넣을 수 있다.</h4>

  ```
  let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
  ```

### 3. Boolean Type

- <h4>현재의 상태를 의미하는 데에 주로 사용된다.</h4>

  ```
  let isSwitchOn = true;
  let isEmpty = false;
  ```

### 4. Null Type (아무것도 없다)
- <h4>어떠한 변수에 아무런 값도 담겨 있지 않음을 표현하기 위해 사용</h4>

  ```
  let empty = null;
  ```
### 5. Undefined Type
- <h4>변수를 선언하고 아무런 값도 할당하지 않았을 때 자동으로 들어가는 값</h4>

  ```
  let none;
  ```
---


