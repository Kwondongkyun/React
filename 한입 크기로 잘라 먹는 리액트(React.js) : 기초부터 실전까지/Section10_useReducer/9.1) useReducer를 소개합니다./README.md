# useReducer

- `useReducer`는 `useState`와 동일하게 컴포넌트 내부에 새로운 상태(`state`)를 생성하는 React Hook입니다.
- 모든 `useState`는 `useReducer`로 대체할 수 있습니다.

## ✅ `useReducer` vs `useState`

### 차이점

- `useReducer`를 사용하면 상태 관리 로직을 컴포넌트 외부로 분리할 수 있습니다.
- 복잡한 상태 로직이 필요한 경우 `useReducer`가 더 효율적입니다.

<br />

### `useState` 사용 시

```jsx
import { useState, useRef } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const idRef = useRef(0);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    };
    setTodos([...todos, newTodo]);
  };

  return <div>Todo App</div>;
}
```

- 모든 상태 관리 로직이 컴포넌트 내부에 작성됩니다.
- 로직이 복잡해질수록 관리가 어려워집니다.

<br />

### `useReducer` 사용 시

```jsx
import { useReducer } from "react";

function reducer(state, action) {
  ...
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  ...
}
```

- 상태 관리 로직(`reducer`)이 컴포넌트 외부에 분리됩니다.
- 다양한 액션 처리로 코드가 명확해집니다.

# 

## 📌 `useReducer` 기본형

```jsx
import { useReducer } from "react";

const [state, dispatch] = useReducer(reducer, initialState);
```

- **`state`**: 현재 상태 값
- **`dispatch`**: 상태 변경을 요청하는 함수
- **`reducer`**: 상태를 실제로 변경하는 함수
- **`initialState`**: 초기 상태 값

# 

## 🔄 `reducer` 함수

`reducer` 함수는 두 개의 인자를 받습니다:

- **`state`**: 현재 상태
- **`action`**: 상태를 어떻게 변경할지에 대한 정보가 담긴 객체

### 기본 구조

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "ACTION_TYPE":
      return ... ;
    default:
      return state;
  }
}
```

- **`action.type`**: 수행할 작업의 유형
- **`action.payload`**: 상태 변경에 필요한 데이터

# 

## 🚀 카운터 예제

```jsx
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + action.value;
    case "DECREMENT":
      return state - action.value;
    default:
      return state;
  }
}

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", value: 1 })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT", value: 1 })}>-</button>
    </div>
  );
};

export default Counter;
```

<br />

### 설명

- `dispatch`를 호출해 상태 변화를 요청합니다.
- `type`은 액션의 유형을 정의하며, `value`는 증가/감소할 값을 담습니다.
- `reducer`는 현재 `state`와 `action`을 받아 새로운 상태를 반환합니다.

<br />

### 디버깅 팁

```jsx
function reducer(state, action) {
  console.log("Current State:", state);
  console.log("Action Received:", action);

  switch (action.type) {
    case "INCREMENT":
      return state + action.value;
    case "DECREMENT":
      return state - action.value;
    default:
      return state;
  }
}
```

- `console.log`를 활용해 상태와 액션을 추적하면 디버깅이 편리합니다.

#

## 🎯 핵심 요약

- **간단한 상태 관리** → `useState` 사용
- **복잡한 상태 관리(여러 액션, 상태 분리 등)** → `useReducer` 사용
- `useReducer`는 특히 Todo 앱, 폼 데이터 관리, 상태가 복잡한 경우에 유용합니다.
- 상태 관리의 일관성을 높이고, 유지보수가 쉬워집니다.

