# **Truthy와 Falsy 값**

### **1. Falsy 값**
JavaScript에서 조건식이나 Boolean 컨텍스트에서 `false`로 평가되는 값들.

```javascript
let f1 = undefined; // 값이 할당되지 않은 변수
let f2 = null;      // 의도적으로 비어 있는 값
let f3 = 0;         // 숫자 0
let f4 = -0;        // 음수 0
let f5 = NaN;       // 숫자가 아님(Not a Number)
let f6 = "";        // 빈 문자열
let f7 = 0n;        // BigInt형에서의 0
```

### **2. Truthy 값**
`Falsy` 값 7가지를 제외한 모든 값은 `truthy`로 평가됩니다.

```javascript
let t1 = "hello";        // 문자열
let t2 = 123;            // 숫자
let t3 = [];             // 빈 배열
let t4 = {};             // 빈 객체
let t5 = () => {};       // 함수
```

### **3. 활용 사례**

`Falsy`와 `Truthy` 값을 조건문에서 유용하게 활용할 수 있습니다.

```javascript
function printName(person) {
  // falsy 값 확인
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  // truthy 값일 때 실행
  console.log(person.name);
}

let person = { name: "kwon" };
let person1; // undefined

printName(person);  // kwon
printName(person1); // person의 값이 없음
```

---
