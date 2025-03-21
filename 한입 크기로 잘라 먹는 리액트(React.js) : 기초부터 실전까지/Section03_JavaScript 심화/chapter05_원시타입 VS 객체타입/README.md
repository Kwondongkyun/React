# **JavaScript의 자료형(타입)**

JavaScript에서는 자료형을 크게 두 가지로 나눌 수 있습니다: **원시 타입(Primitive Type)** 과 **객체 타입(Object Type)**.이 구분은 값이 저장되고 복사되는 방식에 따라 결정됩니다.

---

## **1. 자료형의 종류**

### **원시 타입 (Primitive Type)**

값 자체가 변수에 저장되며, 복사될 때 값 자체가 복사됩니다. **불변값**(Immutable Value)이라고 부릅니다.

- `Number`: 숫자형
- `String`: 문자열
- `Boolean`: 논리형 (true/false)
- `Null`: 값이 없음
- `Undefined`: 값이 정의되지 않음

#### **특징**
- 변수의 값을 수정해도 원본 데이터는 변경되지 않습니다.
- 원시 타입의 데이터는 복사 시 새로운 메모리 공간에 값 자체가 복사됩니다.

<br />

### **객체 타입 (Object Type)**

참조값(Reference)을 통해 변수에 저장되고 복사됩니다. **가변값**(Mutable Value)이라고 부릅니다.
- `Object`: 기본 객체 타입
  - `Array`: 배열
  - `Function`: 함수
  - `RegExp`: 정규 표현식

#### **특징**
- 객체는 별도의 메모리 공간에 값을 저장하며, 변수에는 참조값만 저장됩니다.
- 객체의 특정 프로퍼티를 수정하면 원본 객체도 변경됩니다.

---

## **2. 원시 타입과 객체 타입의 차이**

|  구분  | 원시 타입 | 객체 타입 |
|:-------|:----------|:----------|
| 저장 방식 | 값 자체 저장 | 참조값 저장 |
| 복사 방식 | 값 자체 복사 | 참조값 복사 (얕은 복사) |
| 값 변경 | 불변값 (Immutable) | 가변값 (Mutable) |

---

## **3. 객체 타입의 주요 주의사항**

### **주의사항 1: 얕은 복사로 인한 의도치 않은 수정**

객체 타입은 참조값을 복사하기 때문에, 하나의 객체를 다른 변수에 할당하면 두 변수가 같은 객체를 참조하게 됩니다. 따라서 하나의 변수를 수정하면 원본 객체에도 영향을 미칩니다.

```javascript
let o1 = { name: "kwon" };
let o2 = o1;
o2.name = "kwn";

console.log(o1.name);  // "kwn"
```

> ##### **Side Effect (부작용)**  
> - `o1`과 `o2`는 같은 참조값을 공유하기 때문에, `o2`의 프로퍼티를 수정하면 `o1`도 변경됩니다.
> - 이를 방지하기 위해 새로운 객체를 생성하면서 프로퍼티만 복사하는 **깊은 복사**를 사용해야 합니다.

#### **깊은 복사**

스프레드 연산자(`...`)나 기타 방법을 이용하여 객체의 프로퍼티만 복사해 새 객체를 생성할 수 있습니다.

```javascript
let o1 = { name: "kwon" };
let o2 = { ...o1 }; // 새로운 객체를 생성하고, o1의 프로퍼티만 복사

o2.name = "kwn";
console.log(o1.name);  // "kwon"
```

<br/>

### **주의사항 2: 객체의 비교는 참조값 기준으로 이루어진다.**

객체 간 비교는 참조값을 기준으로 이루어집니다. 동일한 객체를 참조하고 있으면 `true`를 반환하지만, 같은 프로퍼티 값을 가진 다른 객체는 `false`를 반환합니다.

```javascript
let ob1 = { name: "kwon" };
let ob2 = ob1;             // 얕은 복사 (같은 참조값을 공유)
let ob3 = { ...ob1 };      // 깊은 복사 (새로운 참조값 생성)

console.log(ob1 === ob2);  // true (같은 참조값)
console.log(ob1 === ob3);  // false (다른 참조값)
```

#### **객체의 내용 비교 (깊은 비교)**

객체의 참조값이 아닌 프로퍼티 값을 기준으로 비교하려면, `JSON.stringify()`를 사용하여 객체를 문자열로 변환한 후 비교합니다.

```javascript
console.log(JSON.stringify(ob1) === JSON.stringify(ob3));  // true
```

- **얕은 비교**: 참조값을 기준으로 비교 (기본 동등 연산자 `===` 사용)
- **깊은 비교**: 프로퍼티 값을 기준으로 비교 (`JSON.stringify` 등 사용)

<br/>

### **주의사항 3: 배열과 함수도 객체이다**

JavaScript에서 배열(`Array`)과 함수(`Function`)은 모두 객체입니다. 따라서 배열과 함수도 객체 타입의 특징을 가집니다.  
- 참조값으로 저장 및 복사됨
- 참조값 기준으로 비교됨

```javascript
let arr1 = [1, 2, 3];
let arr2 = arr1;  // 참조값 복사
arr2.push(4);

console.log(arr1);  // [1, 2, 3, 4] (원본 배열도 수정됨)
```

---

### **4. 정리**

- **원시 타입**은 값 자체를 저장하며 불변값(Immutable)입니다.
- **객체 타입**은 참조값으로 저장되며, 값이 가변적(Mutable)입니다.
- **깊은 복사**를 통해 객체의 값을 독립적으로 유지할 수 있습니다.
- 객체 비교 시 참조값을 기준으로 이루어지므로, 프로퍼티 값 비교를 위해 `JSON.stringify()` 같은 방법을 사용할 수 있습니다.
- 배열과 함수도 객체 타입으로 취급됩니다.
