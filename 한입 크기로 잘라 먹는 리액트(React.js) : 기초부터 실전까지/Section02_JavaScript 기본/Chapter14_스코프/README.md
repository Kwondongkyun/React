# 스코프
```
스코프(Scope)는 변수, 함수, 객체 등이 어디서 접근 가능한지를 결정짓는 범위를 의미합니다.
이는 코드의 가독성을 높이고, 변수 충돌을 방지하며, 메모리 관리에도 도움을 줍니다.
```
## 스코프 종류
스코프는 크게 전역 스코프와 지역 스코프로 나뉩니다.

### 1. 전역 스코프 (Global Scope)
- 코드 어디서든 접근 가능
- 전역에 선언된 변수나 함수는 모든 영역에서 참조 가능
- 그러나, 남용할 경우 변수 충돌 위험과 메모리 관리 이슈 발생 가능

예시
```
let globalVar = 'I am global'; // 전역 스코프

function printGlobalVar() {
  console.log(globalVar); // 접근 가능
}

printGlobalVar(); // 출력: I am global
```

### 2. 지역 스코프 (Local Scope)
- 특정 코드 블록(함수, 조건문, 반복문 등) 내부에서만 접근 가능
- 블록이 종료되면 변수는 메모리에서 해제됨

<h4>함수 스코프</h4>

- 함수 내부에서 선언된 변수는 함수 내부에서만 접근 가능
- 외부에서 접근 시 에러 발생

예시
```
function localScopeExample() {
  let localVar = 'I am local'; // 지역 스코프
  console.log(localVar); // 접근 가능
}

localScopeExample();
console.log(localVar); // 에러: localVar is not defined
```

<h4>블록 스코프</h4>

- let과 const 키워드를 사용할 때 유효
- 블록({}) 내부에서만 접근 가능
- var 키워드는 블록 스코프를 지원하지 않음, 함수 스코프를 가짐

예시
```
if (true) {
  let blockVar = 'I am block scoped'; // 블록 스코프
  console.log(blockVar); // 접근 가능
}

console.log(blockVar); // 에러: blockVar is not defined
```
---
# ⭐️ 추가 궁금증

## 1. let과 const는 블록 스코프를 가짐

- **let과 const**는 변수를 선언할 때 사용하는 키워드입니다.
- 이 키워드로 선언된 변수는 블록({}) 내부에서만 유효하며, 해당 블록을 벗어나면 접근할 수 없습니다.
- 블록 스코프를 지원하기 때문에, 변수의 사용 범위를 명확히 제한할 수 있습니다.

예시
```
if (true) {
  let blockVar = 'I exist only inside this block';
  const blockConst = 'Me too!';
  console.log(blockVar); // 정상 출력: I exist only inside this block
  console.log(blockConst); // 정상 출력: Me too!
}

console.log(blockVar); // 에러: blockVar is not defined
console.log(blockConst); // 에러: blockConst is not defined
```

## 2. var는 블록 스코프를 지원하지 않음

- var로 선언된 변수는 블록 스코프를 따르지 않고, 함수 스코프를 따릅니다.
- 즉, 블록 내부에서 선언해도 블록을 무시하고 함수 전체에 걸쳐 유효하게 됩니다.

예시
```
if (true) {
  var functionVar = 'I ignore block scoping';
  console.log(functionVar); // 정상 출력: I ignore block scoping
}

console.log(functionVar); // 여전히 접근 가능: I ignore block scoping
```

## 3. var와 let/const의 차이를 비교
예시 코드
```
function testScope() {
  if (true) {
    var varVar = 'I am a var variable';
    let letVar = 'I am a let variable';
  }

  console.log(varVar); // 정상 출력: I am a var variable
  console.log(letVar); // 에러: letVar is not defined
}

testScope();
```
이유
- varVar는 함수 스코프에 따라 함수 전체에서 접근 가능
- letVar는 블록 스코프에 따라, 블록(if) 내부에서만 유효

---
## 정리
| 키워드  | 스코프 유형      | 특징                                     |
|---------|------------------|------------------------------------------|
| `var`   | 함수 스코프      | 블록을 무시하고 함수 전체에서 접근 가능 |
| `let`   | 블록 스코프      | 선언된 블록 내부에서만 접근 가능        |
| `const` | 블록 스코프      | 블록 내부에서만 접근 가능 (상수 선언)   |

