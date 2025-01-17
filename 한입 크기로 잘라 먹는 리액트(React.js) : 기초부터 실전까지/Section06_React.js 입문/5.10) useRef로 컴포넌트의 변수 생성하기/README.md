## `useRef` 주요 특징 요약

1. **리렌더링 비발생**: 값이 변경되어도 컴포넌트를 리렌더링하지 않습니다.
2. **DOM 접근**: 특정 DOM 요소에 직접 접근하거나 조작할 수 있습니다.
3. **Mutable 변수**: 컴포넌트의 상태와는 별개로 지속적으로 값을 유지할 수 있는 저장소 역할을 합니다.

# 

### 주요 활용 사례

#### 1. 값 저장 (Mutable 값)
- 컴포넌트 내부에서 렌더링에 영향을 미치지 않아야 하는 값을 저장할 때 사용됩니다.

  ```jsx
  import { useRef } from "react";
  
  function Counter() {
    const count = useRef(0);
  
    const increment = () => {
      count.current++;
      console.log(`Count: ${count.current}`);
    };
  
    return (
      <div>
        <button onClick={increment}>Increment</button>
      </div>
    );
  }
  ```
  ➡️ `count.current`는 상태처럼 값을 유지하지만, 값이 바뀌어도 리렌더링이 발생하지 않습니다.

<br />

#### 2. DOM 요소 접근
- `useRef`를 사용하여 특정 DOM 요소를 참조하고 조작할 수 있습니다.

  ```jsx
  import { useRef } from "react";
  
  function FocusInput() {
    const inputRef = useRef();
  
    const focusInput = () => {
      inputRef.current.focus(); // DOM 요소에 직접 접근하여 포커스
    };
  
    return (
      <div>
        <input ref={inputRef} type="text" placeholder="Enter your name" />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    );
  }
  ```
  ➡️ `ref={inputRef}`로 DOM 요소를 연결하고, `inputRef.current`를 통해 접근합니다.

<br />

#### 3. 렌더링 발생 횟수 카운트
- `useRef`는 컴포넌트가 얼마나 자주 렌더링되는지 추적할 때 유용합니다.

  ```jsx
  import { useRef, useEffect, useState } from "react";
  
  function RenderCounter() {
    const renderCount = useRef(0);
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      renderCount.current++;
    });
  
    return (
      <div>
        <p>Render count: {renderCount.current}</p>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
      </div>
    );
  }
  ```

  ➡️ `renderCount.current`는 리렌더링마다 값이 증가하지만, 리렌더링을 트리거하지 않습니다.

<br />

#### 4. Form Validation과 DOM 조작
- 입력 검증 후 특정 입력 필드로 포커스를 이동시키는 예제입니다.

  ```jsx
  import { useState, useRef } from "react";
  
  function Form() {
    const [form, setForm] = useState({ name: "", email: "" });
    const nameInputRef = useRef();
    const emailInputRef = useRef();
  
    const handleSubmit = () => {
      if (form.name === "") {
        alert("Name is required");
        nameInputRef.current.focus(); // 이름 필드로 포커스 이동
        return;
      }
  
      if (form.email === "") {
        alert("Email is required");
        emailInputRef.current.focus(); // 이메일 필드로 포커스 이동
        return;
      }
  
      alert("Form submitted successfully");
    };
  
    return (
      <div>
        <input
          ref={nameInputRef}
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          ref={emailInputRef}
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  }
  ```

  ➡️ 필드 값 검증 후 해당 필드로 포커스를 이동시켜 사용자 경험을 개선합니다.

# 

### `useRef`와 `useState` 비교

| Feature                     | `useRef`                          | `useState`                  |
|-----------------------------|------------------------------------|-----------------------------|
| 렌더링 발생 여부            | 값 변경 시 렌더링 발생하지 않음     | 값 변경 시 렌더링 발생       |
| 주 용도                     | 값 저장, DOM 조작                  | 상태 관리                   |
| 값 초기화 방법               | `useRef(initialValue)`            | `useState(initialValue)`    |
| 값 접근 방법                | `ref.current`                     | 상태 값 변수 (`state`)      |

# 

### 사용 시 주의점

1. `useRef`는 값이 바뀌어도 리렌더링을 유발하지 않으므로, 화면에 즉시 반영되어야 하는 값에는 적합하지 않습니다.
2. DOM 조작을 과도하게 사용하면 React의 선언적 접근 방식을 해칠 수 있습니다. 가능한 한 상태 기반 관리로 해결하는 것이 좋습니다.

`useRef`는 단순 값 저장, 렌더링 최적화, 또는 DOM 접근과 같이 컴포넌트의 부수적인 동작에 적합합니다.
