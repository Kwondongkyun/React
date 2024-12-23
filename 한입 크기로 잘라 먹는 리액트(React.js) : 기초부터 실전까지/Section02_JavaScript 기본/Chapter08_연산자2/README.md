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
