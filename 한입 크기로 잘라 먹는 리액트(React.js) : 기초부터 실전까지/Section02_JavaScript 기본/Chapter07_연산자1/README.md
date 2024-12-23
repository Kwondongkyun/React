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
