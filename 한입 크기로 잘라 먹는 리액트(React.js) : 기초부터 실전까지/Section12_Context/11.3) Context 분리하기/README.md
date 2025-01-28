# 문제 원인과 해결

## 문제 원인

`React`의 `Context`는 최적화가 필요 없을 때 간편하게 상태를 전달할 수 있지만, 잘못 사용할 경우 불필요한 리렌더링을 유발할 수 있습니다. 이 문제의 핵심은 **`Provider` 컴포넌트에서 `value`로 전달하는 객체가 매번 새로 생성**되기 때문입니다.

### 문제 상세
1. `App` 컴포넌트의 상태(`todos`)가 변경되면 `Provider`의 `value`로 전달된 객체(`todos`, `onCreate`, `onUpdate`, `onDelete`)도 **새로 생성**됩니다.
2. `TodoItem` 컴포넌트에서 `useContext`로 받은 데이터가 변경되었으므로 `Props` 변경으로 간주되어 **리렌더링**이 발생합니다.
3. `React.memo`를 적용해도, `useContext`로 받은 값이 바뀌면 리렌더링은 여전히 발생합니다.

# 

## 해결책
<img width="400" alt="스크린샷 2025-01-28 16 50 44" src="https://github.com/user-attachments/assets/0286e981-cbd3-46c7-8ad8-eb3e308a201b" />

### 1. `Context` 분리로 최적화
- 상태와 함수를 분리하여 **두 개의 `Context`를 사용**합니다.
  - **`TodoStateContext`**: 변경되는 상태(`todos`)를 전달.
  - **`TodoDispatchContext`**: 변경되지 않는 함수(`onCreate`, `onUpdate`, `onDelete`)를 전달.

### 2. `useMemo` 사용
- `App`에서 `TodoDispatchContext`에 전달하는 `value` 객체를 **`useMemo`로 메모이제이션**하여, 매번 새 객체를 생성하지 않도록 합니다.

# 

## 구현

### 1. `Context` 생성

```jsx
import { createContext } from "react";

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
```

<br />

### 2. `Context` 제공 (App 컴포넌트)

```jsx
  const memoizedDispatch = useMemo(() => {
    return {
      onCreate,
      onUpdate,
      onDelete,
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider
          value={memoizedDispatch}
        >
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
```
- `TodoDispatchContext`에 `value Props`로 전달하고 있는 객체는 `App` 컴포넌트에 `todo state`가 변경이 되어서 리렌더링이 발생하게 되면 새롭게 다시 생성이 될 것이다.
    
  ➡️ 다시 생성하지 않도록 `useMemo` 리액트 훅 이용하기!!

<br />

### 3. `Context`로 데이터 받아오기

#### 3-1. `Editor.jsx`

```jsx
import { TodoDispatchContext } from "../App";

const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  
  ...
```

#### 3-2. `List.jsx`

```jsx
import { TodoStateContext } from "../App";

const List = () => {
  const todos = useContext(TodoStateContext);
  
  ...
```

#### 3-3. `TodoItem.jsx`

```jsx
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(
    TodoDispatchContext
  );
  
  ...
```

# 

## 결과 화면

### Before 최적화 전
- `todos`가 변경될 때, `TodoItem` 컴포넌트 전체가 리렌더링됨.
  <img width="400" alt="스크린샷 2025-01-28 17 13 36" src="https://github.com/user-attachments/assets/ba827eed-6db3-473b-b721-8b12dcef0ef1" />

### After 최적화 후
- `onCreate`, `onUpdate`, `onDelete`가 새로 생성되지 않으므로 불필요한 리렌더링 방지.
  <img width="400" alt="스크린샷 2025-01-28 17 17 51" src="https://github.com/user-attachments/assets/fbed1189-03aa-4f81-9aa3-89561e9df68c" />

---

## 요약
- `Context`를 두 개로 분리하여 상태와 함수를 독립적으로 관리.
- `useMemo`를 활용해 `Provider`의 `value` 객체를 재사용.
- 이 방식은 `Props Drilling` 문제를 해결하면서도 `Context` 사용 시 발생하는 리렌더링을 최소화할 수 있는 효과적인 최적화 방법입니다.
