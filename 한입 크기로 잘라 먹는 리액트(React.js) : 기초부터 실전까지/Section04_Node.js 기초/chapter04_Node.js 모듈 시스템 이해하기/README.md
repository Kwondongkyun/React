## **모듈 시스템(Module System)**

### **모듈 시스템(Module System)이란?**

- 프로그램을 작은 단위(모듈)로 나눠 관리하는 시스템이다.
- 모듈을 생성, 불러오기, 내보내기 등의 작업을 수행하여 코드의 재사용성과 유지보수성을 높이는 시스템이다.
- 모듈 시스템은 복잡한 코드를 작은 단위로 나누고, 필요한 곳에서 조립하여 사용하는 방식을 제공한다.

# 

### **모듈(Module)이란?**

- 모듈은 특정 기능을 수행하는 코드 묶음으로, 독립적이거나 관련된 코드들을 파일 단위로 분리하여 작성한 것이다.
- 하나의 기능이나 관련된 코드들을 캡슐화한 파일이나 코드 블록.
- 예를 들어, 쇼핑몰 애플리케이션에서는 다음과 같은 기능별 모듈로 나눌 수 있다.

# 

#### **쇼핑몰 예시**
<img src="https://github.com/user-attachments/assets/adc881bf-361a-4735-9c42-0d2be5d71fc4" alt="쇼핑몰 예시" width="230"/>

1. **회원 관리 기능** (`user.js`)
2. **장바구니 기능** (`cart.js`)
3. **결제 기능** (`payment.js`)

#### **문제점 (모듈화 전):**

- 모든 기능을 하나의 파일에 작성하면 코드가 방대해지고 유지보수가 어렵다.
- 버그 수정과 기능 개선 시 작업 효율이 떨어진다.




#### **해결책 (모듈화):**
<p align="center">
  <img width="300" alt="스크린샷 2025-01-06 19 09 53" src="https://github.com/user-attachments/assets/3bd7fcbd-8c2b-48c5-9ba9-f2266f349668" />
  <img width="300" alt="스크린샷 2025-01-06 19 10 22" src="https://github.com/user-attachments/assets/a717fed3-abcc-40f5-879a-a5f0249af5d1" />
</p>

- 각 기능을 독립적인 파일로 나누어 개발.
- 모듈화된 코드의 재사용성과 가독성이 높아진다.

# 

### **JavaScript의 주요 모듈 시스템**
<img width="250" alt="js 모듈 시스템" src="https://github.com/user-attachments/assets/7b5d52c0-410e-459a-a013-f10afce42c44" />

1. **CommonJS (CJS)**  
   - 주로 Node.js에서 사용.
   - `require`와 `module.exports` 키워드로 모듈을 관리.

2. **ES Module (ESM)**  
   - ECMAScript 표준 모듈 시스템.
   - `import`와 `export` 키워드로 모듈을 관리.

3. **AMD (Asynchronous Module Definition)**  
   - 브라우저 환경에서 비동기적으로 모듈을 로드.

4. **UMD (Universal Module Definition)**  
   - AMD와 CommonJS의 장점을 결합한 모듈 시스템.

# 

### **CommonJS (CJS) 예시**

#### **`math.js`**

- math 모듈
  ```javascript
  function add(a, b) {
    return a + b;
  }
  function sub(a, b) {
    return a - b;
  }
  ```

- CommonJS 모듈 시스템: 내보내기
  ```javascript
  module.exports = {
    add,
    sub,
  };
  ```

#### **`index.js`**

- math 모듈 가져오기
  ```javascript
  const math = require("./math");
  console.log(math.add(1, 2)); // 3
  console.log(math.sub(1, 2)); // -1
  ```

- 구조분해 할당으로 가져오기
  ```javascript
  const { add, sub } = require("./math");
  console.log(add(3, 4)); // 7
  console.log(sub(7, 4)); // 3
  ```

# 

### **ES Module (ESM) 예시**

#### **`math.js`**
- 기본 구조
  ```javascript
  function add(a, b){
    return a + b;
  }
  
  function sub(a, b){
    return a - b;
  }
  
  export { add, sub };
  ```

- 함수별로 내보내기
  ```javascript
  export function add(a, b) {
    return a + b;
  }
  
  export function sub(a, b) {
    return a - b;
  }
  ```

- 기본(default)값으로 내보내기
  ```javascript
  export default function multiply(a, b) {
    return a * b;
  }
  ```

#### **`index.js`**

- 명시적으로 내보낸 함수 가져오기
  ```javascript
  import { add, sub } from "./math.js";
  console.log(add(1, 2)); // 3
  console.log(sub(5, 3)); // 2
  ```

- 기본값으로 내보낸 함수 가져오기
  ```javascript
  import multiply from "./math.js";
  console.log(multiply(4, 5)); // 20
  ```

- 동일한 경로로부터 값을 불러오는 여러 개의 import문(합치기 가능)
  ```javascript
  import multiply, { add, sub } from "./math.js";
  console.log(multiply(2, 3)); // 6
  console.log(add(3, 2)); // 5
  ```

# 

### **CommonJS와 ESM 비교**

| 특징              | CommonJS                      | ES Module                      |
|-------------------|-------------------------------|--------------------------------|
| 사용 환경         | Node.js (주로 서버)          | 브라우저, Node.js              |
| 모듈 가져오기     | `require`                    | `import`                      |
| 모듈 내보내기     | `module.exports`             | `export`, `export default`    |
| 비동기 지원 여부   | 동기 방식                   | 비동기 방식 가능               |

# 

### **정리 및 장점**

1. **모듈 시스템의 장점:**
   - **재사용성:** 코드 중복을 줄이고, 동일한 로직을 여러 곳에서 사용할 수 있다.
   - **유지보수성:** 코드가 분리되어 있어 수정 및 확장이 용이하다.
   - **가독성:** 기능별로 나뉘어진 코드로 구조가 명확하다.

2. **JavaScript 모듈 시스템 선택:**
   - 브라우저 환경에서는 **ESM**을 기본으로 사용.
   - Node.js 프로젝트에서는 **CommonJS**와 **ESM**을 상황에 맞게 선택.
