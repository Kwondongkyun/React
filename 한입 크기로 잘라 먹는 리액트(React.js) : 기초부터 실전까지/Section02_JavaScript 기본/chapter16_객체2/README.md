# **상수 객체와 메서드**

## **1. 상수 객체**
- **`const` 키워드로 선언된 객체는 객체 자체의 참조가 상수**로 고정됩니다.  
- 즉, 객체에 **새로운 값을 통째로 할당**하는 것은 불가능하지만, **프로퍼티를 추가, 수정, 삭제**하는 것은 가능합니다.

#### **예제 코드**
```javascript
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// 프로퍼티 추가
animal.age = 2; // { type: "고양이", name: "나비", color: "black", age: 2 }

// 프로퍼티 수정
animal.name = "까망이"; // { type: "고양이", name: "까망이", color: "black", age: 2 }

// 프로퍼티 삭제
delete animal.color; // { type: "고양이", name: "까망이", age: 2 }

// 전체 객체를 재할당하려고 하면 에러 발생
// animal = {}; // TypeError: Assignment to constant variable.
```

#### **⭐️주의사항**
- **객체의 불변성을 유지하려면** `Object.freeze()` 메서드를 사용하여 객체의 수정, 추가, 삭제를 막을 수 있습니다.
```javascript
Object.freeze(animal);
animal.type = "강아지"; // 수정되지 않음
delete animal.age;      // 삭제되지 않음
console.log(animal);    // { type: "고양이", name: "까망이", age: 2 }
```

---

## **2. 메서드**
- **정의:** 메서드는 객체의 **값이 함수인 프로퍼티**를 의미합니다.  
- **목적:** 객체의 동작을 정의하여 객체 내부 정보를 활용하거나 특정 기능을 수행할 수 있게 함.

### **2.1 메서드 정의**
- ES6부터는 **축약형 메서드 선언**이 가능.
```javascript
const person = {
  name: "kwon", // 일반 프로퍼티
  sayHi() {     // 축약형 메서드
    console.log("안녕!");
  },
};

person.sayHi(); // 안녕!
```

### **2.2 메서드 호출**
- **점 표기법**과 **괄호 표기법** 모두 사용 가능.
```javascript
person.sayHi();       // 점 표기법
person["sayHi"]();    // 괄호 표기법
```

---

#### **추가 내용**

### **2.3 `this` 키워드**
- 메서드 내부에서 **`this` 키워드**를 사용하면, **해당 객체 자신**을 참조할 수 있음.
```javascript
const person = {
  name: "kwon",
  sayHi() {
    console.log(`안녕! 내 이름은 ${this.name}야.`);
  },
};

person.sayHi(); // 안녕! 내 이름은 kwon이야.
```

---

### **2.4 메서드 동적 추가**
- 메서드를 객체 생성 후에 동적으로 추가할 수도 있음.
```javascript
person.sayBye = function () {
  console.log("잘 가!");
};

person.sayBye(); // 잘 가!
```

---

#### **요약**

#### **상수 객체**
| 작업       | 방법                                      | 예제 코드                          |
|------------|-------------------------------------------|-------------------------------------|
| 프로퍼티 추가 | `객체.프로퍼티 = 값` 또는 `객체["프로퍼티"] = 값` | `animal.age = 2;`                  |
| 프로퍼티 수정 | `객체.프로퍼티 = 새 값`                  | `animal.name = "까망이";`          |
| 프로퍼티 삭제 | `delete 객체.프로퍼티`                   | `delete animal.color;`             |
| 객체 불변화  | `Object.freeze(객체)`                    | `Object.freeze(animal);`           |

#### **메서드**
| 작업           | 방법                             | 예제 코드                              |
|----------------|----------------------------------|---------------------------------------|
| 메서드 선언     | 축약형 `메서드명() { ... }`       | `sayHi() { console.log("안녕!"); }`   |
| 메서드 호출     | `객체.메서드()` 또는 `객체["메서드"]()` | `person.sayHi();`                    |
| 동적 메서드 추가 | `객체.메서드명 = function() { ... }` | `person.sayBye = function() { ... };` |

---
