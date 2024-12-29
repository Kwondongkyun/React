# **단락 평가 (Short-circuit Evaluation)**

## **1. 단락 평가란?**
- **단락 평가(Short-circuit Evaluation):**
  - 논리 연산식에서 **첫 번째 피연산자의 값만으로 결과가 결정**될 수 있다면, 두 번째 피연산자를 평가하지 않는 자바스크립트의 특징.
  - 불필요한 계산을 피하여 성능을 최적화하거나, 특정 함수 호출을 조건적으로 방지할 수 있음.



## **2. 단락 평가의 원리**
- `&&` (AND) 연산자:
  - **왼쪽 피연산자가 `false`이면**, 오른쪽 피연산자를 평가하지 않고 `false`를 반환.
  - **두 truthy한 값이 있을 때**, **두 번째 truthy 값을 반환**.
- `||` (OR) 연산자:
  - **왼쪽 피연산자가 `true`이면**, 오른쪽 피연산자를 평가하지 않고 해당 값을 반환.
  - **두 truthy한 값이 있을 때**, **첫 번째 truthy 값을 반환**.



## **3. 단락 평가 활용**

### **3.1 조건문 없이 값 대체**
- 단락 평가를 활용하여 조건문 없이 기본값이나 대체값을 설정할 수 있음.
  ```javascript
  let name = null;
  console.log(name || "기본 이름"); // "기본 이름" (왼쪽이 falsy이므로 대체값 반환)
  
  let age = 25;
  console.log(age || 30); // 25 (왼쪽이 truthy이므로 그대로 반환)
  ```

### **3.2 `||` 연산자의 결과값 원리**
- **두 개의 truthy한 값을 비교할 때:**
  - **`||` 연산자는 첫 번째 truthy 값을 반환**.
  - 예제:
    ```javascript
    console.log(10 || 20); // 10 (첫 번째 truthy 값을 반환)
    console.log("hello" || "world"); // "hello" (첫 번째 truthy 값을 반환)
    ```

### **3.3 `&&` 연산자의 결과값 원리**
- **두 개의 truthy한 값을 비교할 때:**
  - **`&&` 연산자는 두 번째 truthy 값을 반환**.
  - 예제:
    ```javascript
    console.log(10 && 20); // 20 (두 번째 truthy 값을 반환)
    console.log("hello" && "world"); // "world" (두 번째 truthy 값을 반환)
    ```

- **첫 번째 값이 falsy한 경우**:
  - `&&`는 첫 번째 falsy 값을 반환하고 평가를 종료.
    ```javascript
    console.log(false && "hello"); // false
    console.log(null && "world"); // null
    ```

### **3.4 값이 유효한 경우에만 접근**
- 객체가 존재하는 경우에만 특정 프로퍼티를 참조하거나 연산 수행.
  ```javascript
  function printName(person) {
    const name = person && person.name; // person이 truthy일 때만 person.name 접근
    console.log(name || "person의 값이 없음");
  }
  
  printName(); // "person의 값이 없음" (person이 undefined)
  printName({ name: "kwon" }); // "kwon"
  ```

### **3.5 함수 호출 방지**
- 조건에 따라 특정 함수를 호출하거나 실행을 중단할 수 있음.
  ```javascript
  let isValid = false;
  isValid && console.log("유효함"); // 실행되지 않음 (isValid가 falsy)
  
  let user = { name: "Alice" };
  user && console.log(user.name); // "Alice" (user가 truthy)
  ```

### **3.6 기본값 설정**
- 주어진 값이 falsy일 경우 기본값을 설정.
  ```javascript
  let input = undefined;
  let defaultValue = input || "기본값";
  console.log(defaultValue); // "기본값"
  ```


## **4. 단락 평가와 조건문 비교**

| 표현식                     | 설명                                                      |
|----------------------------|----------------------------------------------------------|
| `A && B`                   | A가 `truthy`일 경우만 B를 평가하고 반환. 두 truthy 값이 있으면 두 번째 값을 반환. |<br/>
| `A || B`                   | A가 `falsy`일 경우만 B를 평가하고 반환. 두 truthy 값이 있으면 첫 번째 값을 반환. |
| `if (A) { doSomething(); }` | A가 `truthy`일 경우에만 동작. 단락 평가로 대체 가능.        |


A가 `falsy`일 경우만 B를 평가하고 반환. 두 truthy 값이 있으면 첫 번째 값을 반환.

## **5. 단락 평가의 한계**
- 복잡한 조건을 처리하거나, 명확성을 유지해야 할 경우 조건문을 사용하는 것이 더 적합.
- 단락 평가만 사용하면 코드가 간결해지지만, 지나치면 가독성이 떨어질 수 있음.

---

### **요약**
- **단락 평가(Short-circuit Evaluation):**
  - 첫 번째 피연산자만으로 결과를 결정할 수 있을 경우, 두 번째 피연산자를 평가하지 않음.
  - 효율적인 성능 최적화와 간결한 코드 작성을 가능하게 함.
- **`||` 연산자 결과:**
  - 두 truthy한 값이 있을 경우 **첫 번째 truthy 값을 반환**.
- **`&&` 연산자 결과:**
  - 두 truthy한 값이 있을 경우 **두 번째 truthy 값을 반환**.
  - 이를 활용해 특정 조건이 충족되었을 때만 실행할 수 있음.
- **활용 사례:**
  - 기본값 설정
  - 조건적 함수 호출 방지
  - 안전한 객체 프로퍼티 접근

---
