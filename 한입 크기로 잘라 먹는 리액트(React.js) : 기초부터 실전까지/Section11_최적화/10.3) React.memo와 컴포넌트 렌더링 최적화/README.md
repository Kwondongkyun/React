# React.memo

`React.memo`는 **리액트의 내장 함수**로, 컴포넌트의 불필요한 리렌더링을 방지하여 성능을 최적화할 수 있습니다.

## ✅ 개념

- `React.memo`는 **컴포넌트를 인수로 받아 최적화 기능이 추가된 새로운 컴포넌트를 반환**합니다.
- 최적화된 컴포넌트는 `props`를 기준으로 메모이제이션(memoization) 되어, **`props`가 변경되지 않는 한 리렌더링이 발생하지 않습니다.**

### 📌 동작 방식
<img width="400" alt="스크린샷 2025-01-27 22 07 16" src="https://github.com/user-attachments/assets/4c5c63ed-801a-4951-b192-4d0d68f71232" />


- 부모 컴포넌트가 리렌더링되더라도, `MemoizedComponent`는 전달받은 `props`가 변경되지 않으면 **리렌더링이 발생하지 않습니다.**
- 이는 불필요한 렌더링을 방지하여 **자동으로 성능 최적화**를 도와줍니다.

# 

## 🚩 예제 1: `Header` 컴포넌트의 불필요한 리렌더링 방지

### `App.jsx`

```jsx
return (
  <div className="App">
    <Header />
    <Editor onCreate={onCreate} />
    <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
  </div>
);
```
<img width="320" alt="Header 컴포넌트의 불필요한 리렌더링 이미지" src="https://github.com/user-attachments/assets/39d1f2b5-1972-47f2-a18d-a88f7fbcf7a2" />


### 문제점

- `Header` 컴포넌트는 `props`를 받지 않지만, 부모인 `App`이 리렌더링될 때 **불필요하게 같이 리렌더링**됩니다.
- `Header`는 단순히 날짜를 렌더링하기 때문에, **todo 데이터가 변경되더라도 다시 렌더링될 필요가 없습니다.**

### ✅ 해결 방법: `React.memo` 적용

```jsx
import React from "react";

const Header = () => {
  return <h1>{new Date().toLocaleDateString()}</h1>;
};

export default React.memo(Header);
```

➡️ 이렇게 하면 `Header`는 더 이상 불필요한 리렌더링이 발생하지 않습니다.

# 

## 🚩 예제 2: `TodoItem`의 불필요한 리렌더링 방지

### 기존 코드

```jsx
import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => onUpdate(id);
  const onClickDeleteButton = () => onDelete(id);

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

export default React.memo(TodoItem);
```
<img width="320" alt="TodoItem의 불필요한 리렌더링" src="https://github.com/user-attachments/assets/54399e0e-8212-413d-862e-887d884c8f6e" />

### 문제점

- `App` 컴포넌트의 `todos` 상태가 변경될 때마다 `TodoItem`도 **불필요하게 리렌더링**됩니다.
- 이는 `onUpdate`, `onDelete` 함수가 **리렌더링 시 새로 생성**되기 때문에 발생합니다. (함수는 객체 타입이므로 주소값이 변경됨)

> #### 함수 : 객체 타입에 해당하는 값이다.
> - 변수에는 주소값으로써 저장이 된다
> - 객체간의 비교는 기본적으로 주소값을 기반으로 수행된다.
> - 새롭게 생성된 함수들은 주소값이 매번 바뀌기 때문에 사실상 매번 다른값으로 생성되는 것으로 판단된다.


### ✅ 해결 방법 1: `useCallback` 사용

- `App` 컴포넌트에서 `onUpdate`, `onDelete` 함수를 **메모이제이션**하여 매번 새로 생성되지 않도록 합니다.

  ```jsx
  const onUpdate = useCallback((id) => { /* 업데이트 로직 */ }, []);
  const onDelete = useCallback((id) => { /* 삭제 로직 */ }, []);
  ```

### ✅ 해결 방법 2: `React.memo` 커스터마이징

- `React.memo`의 **두 번째 인수로 비교 함수**를 전달하여 `props` 변경 여부를 직접 제어할 수 있습니다.

  ```jsx
  ...
  
  export default memo(TodoItem, (prevProps, nextProps) => {
    if (prevProps.id !== nextProps.id) return false;
    if (prevProps.isDone !== nextProps.isDone) return false;
    if (prevProps.content !== nextProps.content) return false;
    if (prevProps.date !== nextProps.date) return false;

    return true;
  });
  ```

- **`true` 반환 시:** `props`가 동일하다고 판단 → **리렌더링 X**
- **`false` 반환 시:** `props`가 변경되었다고 판단 → **리렌더링 O**

---

## ⚡️ 핵심 요약

- `React.memo`는 컴포넌트의 **불필요한 리렌더링을 방지**하여 성능 최적화에 효과적입니다.
- 기본적으로 `props`를 얕은 비교(`===`)로 검사하므로, 객체나 함수의 경우 주의해야 합니다.
- `useCallback`과 `memo` 커스터마이징으로 최적화 효과를 극대화할 수 있습니다.

> 💡 **Tip:** 모든 컴포넌트에 무조건 `React.memo`를 적용하는 것은 오히려 성능 저하를 일으킬 수 있으니, **리렌더링 비용이 높은 컴포넌트에만 적용**하세요!

