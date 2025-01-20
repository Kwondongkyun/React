# useEffect

- **`useEffect`란?**
  - 리액트 컴포넌트에서 **사이드 이펙트(Side Effect)** 를 처리하기 위한 **React Hook**입니다.
  - 사이드 이펙트란 컴포넌트의 상태 변화나 동작에 따라 발생하는 **파생적인 효과**를 의미합니다.
  
#

## 사이드 이펙트(Side Effect)란?

- **정의**: "부수적인 효과" 또는 "파생되는 효과"로, 컴포넌트의 동작(상태 변화 등)에 따라 발생하는 추가 작업을 뜻합니다.
- **예시**:
  - **컴포넌트 내부의 값 변경** → 콘솔에 변경된 값 출력
  - **컴포넌트 마운트** → "Mount"라고 콘솔에 출력
  - **컴포넌트 업데이트(리렌더)** → "Update"라고 콘솔에 출력
  - **컴포넌트 언마운트** → "UnMount"라고 콘솔에 출력

#

## `useEffect`의 역할

- `useEffect`를 사용하면 특정 조건에서 실행되는 동작(사이드 이펙트)을 직접 제어할 수 있습니다.
- 컴포넌트의 **라이프사이클(Mount, Update, Unmount)** 단계에서 실행될 코드를 쉽게 작성할 수 있도록 도와줍니다.

#

## `useEffect` 사용법

```jsx
useEffect(() => {
  // 실행될 콜백 함수
}, [dependencies]);
```

1. **첫 번째 인수**: 실행할 콜백 함수
   - 이 함수에는 사이드 이펙트를 처리하는 로직을 작성합니다.
2. **두 번째 인수**: 의존성 배열(`dependencies`)
   - 이 배열에 지정된 값이 변경될 때마다 첫 번째 인수로 전달된 콜백 함수가 실행됩니다.
   - 배열을 비워두면(`[]`), 콜백 함수는 컴포넌트가 처음 마운트될 때만 실행됩니다.

#

## 사용 예제

### 1. 기본 사용 (의존성 없이 실행)

```jsx
useEffect(() => {
  console.log("컴포넌트가 마운트되었습니다.");
}, []); // 빈 배열 → Mount 시 한 번만 실행
```

<br />

### 2. 특정 상태가 변경될 때 실행

```jsx
useEffect(() => {
  console.log(`Count 값이 변경되었습니다: ${count}`);
}, [count]); // count가 변경될 때마다 실행
```

<br />

### 3. Mount + Unmount 처리

```jsx
useEffect(() => {
  console.log("컴포넌트가 마운트되었습니다.");

  return () => {
    console.log("컴포넌트가 언마운트되었습니다.");
  };
}, []); // Mount 시 실행, Unmount 시 정리 작업 실행
```

# 

## `useEffect`를 사용하는 이유

### 비동기 상태 업데이트 문제
- 리액트의 `state`는 **비동기적으로** 업데이트됩니다.  
  ➡️ 상태 값이 즉시 변경되지 않으므로, 이벤트 핸들러 내부에서 상태를 참조하면 **이전 값**을 출력하는 문제가 발생할 수 있습니다.

<br />

### 잘못된 예: 이벤트 핸들러에서 상태 처리
```jsx
const changeCount = (value) => {
  setCount(count + value);
  console.log(count); // 이전 값이 출력됨 (업데이트된 값 아님)
};
```

**원인**:
- `setCount`는 비동기적으로 동작하므로, `console.log`는 상태가 업데이트되기 전에 실행됩니다.

<br />

### 올바른 방법: `useEffect`로 상태 변경 감지
```jsx
useEffect(() => {
  console.log(`변경된 Count 값: ${count}`);
}, [count]); // count가 변경될 때 실행
```

**결론**:
- 상태가 변경된 이후 실행되는 로직(사이드 이펙트)은 `useEffect`를 통해 처리해야 정확한 값으로 동작합니다.

# 

## 전체 코드 예제

### `useEffect`를 활용한 Counter 컴포넌트

```jsx
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // count 또는 input이 변경될 때마다 실행
  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]);

  // count 값을 변경하는 함수
  const changeCount = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </section>
      ...
    </div>
  );
}

export default App;
```

# 

## 핵심 정리

1. **`useEffect`는 컴포넌트의 사이드 이펙트를 제어하기 위한 도구**입니다.
   - Mount, Update, Unmount 단계에서 실행될 로직을 작성할 수 있습니다.
2. **의존성 배열**로 콜백 함수 실행 조건을 제어합니다.
   - 빈 배열(`[]`): Mount 때만 실행
   - 특정 상태나 속성: 해당 값이 변경될 때 실행
3. **리액트 상태 업데이트의 비동기 특성을 해결**하기 위해 필요합니다. 
