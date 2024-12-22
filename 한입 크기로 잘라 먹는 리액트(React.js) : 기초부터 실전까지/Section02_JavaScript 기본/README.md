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
- $, _ 제외한 기호는 사용할 수 없다.
  ```
  let $_name;
  ```

- 숫자로 시작할 수 없다.
  ```
  let name1;
  let _2name;
  ```

- 예약어를 사용할 수 없다.
  ```
  let if;  // 오류
  let name;
  ```

### 4. 변수 명명 가이드
- 어떤 역할을 하는 변수인지 알아볼 수 있게 작성하는게 좋다.

---
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

# 형변환

### 묵시적 형 변환
- 자바스크립트 엔진이 알아서 형 변환 하는 것
  ```
  let num = 10;
  let str = "20";
  
  const result = num + str; // 1020
  ```

### 명시적 형 변환
프로그래머가 내장함수 등을 이용해서 직접 형 변환을 명시
  
- Number(문자열 -> 숫자)
  ```
  let str1 = "10";
  let strToNum1 = Number(str1); // 10
  ```

- parseInt 내장함수 <br><br> -> 숫자 값이 아닌 값을 포함하고 있는 문자열도 숫자 값으로 변환
  ```
  let str2 = "10개";
  let strToNum2 = parseInt(str2); // 10
  ```

- String(숫자 -> 문자열)
  ```
  let num1 = 20;
  let numToStr1 = String(num1);
  
  console.log(numToStr1 + "입니다."); // 20입니다.
  ```
---
# 연산자
### 대입 연산자
```
let var1 = 1;
```

### 산술 연산자
- 사칙연산(+, -, *, /), 나머지(%)
  ```
  let num1 = 3 + 2;
  let num2 = 3 - 2;
  let num3 = 3 * 2;
  let num4 = 3 / 2;
  let num5 = 3 % 2;
  ```

### 복합 대입 연산자
- 복합이란? 산술, 대입 연산자의 복합
  ```
  let num7 = 10;
  num7 += 20;
  ```

### 증감 연산자
- 전위 연산자, 후위 연산자
  ```
  let num8 = 10;
  ++num8; // 전위 연산
  num8++; // 후위 연산
  ```

### 논리 연산자

- True, False만 저장하는 Boolean 타입의 값을 다룰 때 사용하는 연산자
  ```
  let or = true || false; // true
  
  let and = true && false; // false
  
  let not = !true; // false
  ```

### 비교 연산자
<ul>
  <li>== : 값 자체로만 비교, 자료형 비교 X</li>
  <li>=== : 값, 자료형 둘 다 비교 O</li>
</ul>

  ```
  let comp1 = 1 === 2; // false
  let comp2 = 1 !== 2; // true
  
  let comp3 = 2 > 1; // true
  let comp4 = 2 < 1; // false
  
  let comp5 = 2 >= 2; // true
  let comp6 = 2 <= 2; // true
  ```

---
# 자바스크립트 특수 연산자
### null 병합 연산자(??)
<ul>
  <li>존재하는 값을 추려내는 기능</li>
  <li>null, undefined가 아닌 값을 찾아내는 연산자</li>
</ul>


- 피연산자(연산에 참여하는 값들)중에 null이나 undefined이 아닌 값을 찾아낸다.
  ```
  let var1;
  let var2 = 10;
  let var3 = 20;
  let var4 = var1 ?? var2; // 10;
  let var5 = var1 ?? var3; // 20;
  ```

- 두 피연산자 모두 null이나 undefined이 아닌 경우 맨 처음 값 반환(var3)
  ```
  let var6 = var3 ?? var2; // 20
  ```

### typeof 연산자
- 값의 타입을 문자열로 반환하는 기능을 하는 연산자
  ```
  let var7 = 1;
  var7 = "hello";
  var7 = true;
  
  let t1 = typeof var7;
  console.log(t1);
  ```

### 삼항 연산자
- 항을 3개 사용하는 연산자
- 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
  ```
  (조건식) ? (참일 때의 반환값) : (거짓일 때의 반환값);
  ```
  ```
  let var8 = 10;
  let res = var8 % 2 === 0 ? "짝수" : "홀수";
  
  console.log(res); // 짝수
  ```
---
# 조건문(Conditional Statement)
- 특정 조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법
- 대표적으로 if, switch 조건문이 존재함

### if 조건문
```
let num = 5;

if (num >= 10) {
  console.log("num은 10 이상입니다");
}
else if (num >= 5) {
  console.log("num은 5 이상입니다");
}
else if (num >= 3) {
  console.log("num은 3 이상입니다");
}
else {
  console.log("조건이 거짓입니다!");
}
```

### Switch 문
- if문과 기능 자체는 동일
- 다수의 조건을 처리할 때 if보다 더 직관적이다.
  ```
  switch-case 문
  
  : 기본적으로 소괄호 안에 있는 변수의 값과 일치하는 케이스를 위에서부터 아래로 차례로 탐색함
  일치하는 case를 만나게 되면 그 아래에 있는 모든 코드를 다 수행 시켜준다.
  
  -> break 문으로 해결 가능
  ```

  ```
  let animal = "owl";

  switch (animal) {
    case "cat": {
      console.log("고양이");
      break;
    }
    case "dog": {
      console.log("강아지");
      break;
    }
    case "bear": {
      console.log("곰");
      break;
    }
    case "snake": {
      console.log("뱀");
      break;
    }
    case "tiger": {
      console.log("호랑이");
      break;
    }
    default: {
      console.log("그런 동물은 전 모릅니다");
    }
  }
  ```
---
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

- <b>화살표 함수</b> : 함수를 이전보다 더 빠르고 간결하게 생성해 줄 수 있도록 도와줌
  ```
  let varC = (value) => {
    console.log(value); // 10
    return value + 1;
  };
  console.log(varC(10)); // 11

  
  let varD = (value) => value * 10;
  console.log(varD(20)); // 200
  ```
