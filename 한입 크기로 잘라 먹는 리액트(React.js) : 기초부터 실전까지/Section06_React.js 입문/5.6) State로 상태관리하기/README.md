## **State의 개념**
- 상태(`state`)는 어떤 사물이 현재 가지고 있는 동적인 값입니다.
- 컴포넌트의 **현재 상태**를 정의하며, 이에 따라 화면(UI)이 달라집니다.
- 리액트에서 컴포넌트는 `state`의 값이 변경될 때마다 자동으로 **리렌더링**(Re-rendering)됩니다.

# 

## **리액트 컴포넌트와 State**
1. **컴포넌트가 가진 State**
   
   <img width="251" alt="스크린샷 2025-01-14 17 16 24" src="https://github.com/user-attachments/assets/4647824d-2f37-42c5-9168-30e97412db05" />

    - 각 컴포넌트는 고유의 상태(`state`)를 가질 수 있습니다.
    - 예를 들어, 버튼 클릭 시 상태가 ON/OFF로 바뀌며 화면에 그에 맞는 UI가 렌더링됩니다.

2. **State 변경으로 인한 리렌더링**

    <img width="400" alt="스크린샷 2025-01-14 17 18 15" src="https://github.com/user-attachments/assets/df763ade-943f-411e-a079-b2789b7e6684" />

    - `state` 값이 변경되면 리액트는 상태 변화를 감지하고 UI를 다시 그립니다.
    - 이를 리렌더링(Re-rendering)이라고 합니다.

3. 여러 개의 `state`

   <img width="220" alt="스크린샷 2025-01-14 17 23 05" src="https://github.com/user-attachments/assets/8f53b7f2-3605-42e8-b0b2-0f5493a2cca9" />

   - 리액트에서는 각각의 컴포넌트에 이 컴포넌트의 상태를 의미하는 값이자 변화할 수 있는 값인 `State`를 만들 수 있으며 심지어 하나의 컴포넌트에 여러 개의 State를 만드는 것도 가능합니다.


# 

## **State 생성 및 관리**
### **1. `useState`를 사용하여 State 생성**
- 리액트는 `useState`라는 내장 함수를 제공합니다.

  ```jsx
  import { useState } from "react";
  
  function App() {
    const [count, setCount] = useState(0); // 초기값 0
    return <h1>{count}</h1>;
  }
  
  export default App;
  ```
  - `useState`의 반환값:
    - **첫 번째 요소 :** 현재 `state` 값
    - **두 번째 요소 :** 상태를 변경하는 함수(보통 `setState`로 명명)

<br />

### **2. State 초기값**
- `useState` 함수의 인수로 초기값을 설정할 수 있습니다.

  ```jsx
  const [state, setState] = useState(0); // state 초기값: 0
  ```
  <img width="270" alt="스크린샷 2025-01-14 17 29 22" src="https://github.com/user-attachments/assets/35e162d6-b638-441e-baf4-7dbbc8e43f8a" />

# 

## **State 값 렌더링**
- JSX 내부에서 `state` 값을 사용해 화면에 렌더링합니다.

  ```jsx
  function App() {
    const [message, setMessage] = useState("Hello, React!");
    return <h1>{message}</h1>;
  }
  ```

# 

## **배열 비구조화 할당**
- `useState`의 반환값을 배열 비구조화 할당 문법으로 받습니다.

  ```jsx
  const [state, setState] = useState("초기값");
  ```
  - **첫 번째 값:** 현재 상태 값(`useState`를 통해 생성한 `state`값)
  - **두 번째 값:** 상태 변경 함수(`state`값을 변경시키는 함수)

--- 

### **핵심 요약**
1. **State의 역할:** 컴포넌트의 상태를 정의하고 UI와 상호작용을 가능하게 합니다.
2. **State 변경:** `useState`의 두 번째 반환 값인 함수를 사용해 상태를 업데이트합니다.
3. **자동 리렌더링:** 상태 변경 시 리액트는 컴포넌트를 다시 렌더링합니다.
