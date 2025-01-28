# Props Drilling 제거하기: React Context 활용법

## Context 생성하기

### `App.jsx`

```jsx
import { createContext } from "react";

const TodoContext = createContext(); // 새로운 Context 생성

function App() {
  ...
}
```

**Context**는 일반적으로 **컴포넌트 외부**에서 선언한다.
- `App` 컴포넌트 내부에서 Context를 생성하면 `App`이 리렌더링될 때마다 새로운 `Context`가 생성되어 비효율적이기 때문이다.

<br />

### Context 출력 확인

```jsx
console.log(TodoContext);
```

출력 결과 예시:  
<img width="395" alt="스크린샷 2025-01-28 15 20 02" src="https://github.com/user-attachments/assets/8d2d6543-03fb-444f-b55a-47c033e059f1" />


- **Provider**: Context의 데이터를 공급하기 위해 사용.
- **Consumer**: Context 데이터를 구독하기 위해 사용. (최근에는 `useContext` Hook으로 대체되는 경우가 많음.)

#

## Provider로 데이터 공급하기

### `App.jsx`에서 Provider 설정

```jsx
function App() {
  ...

  return (
    <div className="App">
      <Header />
      <TodoContext.Provider
        value={{
          todos,       // 할 일 목록 데이터
          onCreate,    // 새 할 일 생성 함수
          onUpdate,    // 할 일 업데이트 함수
          onDelete,    // 할 일 삭제 함수
        }}
      >
        <Editor />
        <List />
      </TodoContext.Provider>
    </div>
  );
}
```

- **Provider**는 Context의 데이터를 **공급**하고, 하위 컴포넌트들이 이 데이터를 **구독**할 수 있도록 설정한다.
- `value` 속성으로 데이터를 전달하며, 이 데이터는 Provider의 **모든 자식 및 자손 컴포넌트**에서 사용할 수 있다.

#

## Context 데이터 공급받기

### `Editor.jsx`

```jsx
import "./Editor.css";
import { useContext } from "react";
import { TodoContext } from "../App"; // Context 불러오기

const Editor = () => {
  const { onCreate } = useContext(TodoContext); // Context 데이터 구독

  ...

};
export default Editor;
```

- `useContext(TodoContext)`를 사용해 `TodoContext`에서 데이터를 구독.
- 구조 분해 할당으로 필요한 메서드 (`onCreate`)만 가져와서 사용.

<br />

### `List.jsx`

```jsx
import "./List.css";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoContext } from "../App"; // Context 불러오기

const List = () => {
  const { todos } = useContext(TodoContext); // Context 데이터 구독

  ...

};

export default List;
```

- `useContext(TodoContext)`를 사용해 `todos`, `onUpdate`, `onDelete` 메서드를 Context에서 가져온다.
- `todos` 데이터를 검색하거나 필터링한 결과를 렌더링.

#

## 문제: 불필요한 리렌더링

### 원인

`Context` 데이터를 사용하는 컴포넌트들이 모두 **같은 Provider의 데이터를 구독**하기 때문에, Context 값이 변경되면 모든 구독 중인 컴포넌트가 **리렌더링**된다.

**예시**:  
- `onUpdate`로 특정 `todo`를 업데이트하면, `Editor`와 `List` 모두 리렌더링되며, `List` 내의 모든 `TodoItem`도 다시 렌더링됨.

#

## 해결 방법: Context 분리

### 1. Context를 여러 개로 분리하기

- `todos`, `onCreate`, `onUpdate`, `onDelete`를 각각 다른 Context에 저장.

<img width="400" alt="스크린샷 2025-01-28 16 50 44" src="https://github.com/user-attachments/assets/6ee06642-d651-4d3e-8818-460455669650" />

  - `TodoStateContext` : `todos`
  - `TodoDispatchContext` : `onCreate`, `onUpdate`, `onDelete`
  
    <img width="400" alt="스크린샷 2025-01-28 16 54 54" src="https://github.com/user-attachments/assets/c00036eb-f2a5-4f1b-bfc0-6f9225c36231" />

  

#

### 2. 메모이제이션 활용

---

## 최종 정리

- **Context의 역할**: Props Drilling 없이, 데이터를 전역적으로 관리하고 공급.
- **문제 해결**:
  1. Context를 여러 개로 나눠 리렌더링 범위를 줄임.
  2. React의 메모이제이션 기능(`useMemo`, `useCallback`)을 활용.
