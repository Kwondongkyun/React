# useMemo

## 개요  
`useMemo`는 **메모이제이션** 기법을 활용하여 불필요한 연산을 최적화하는 React 훅입니다.  
컴포넌트가 다시 렌더링될 때 특정 값이 변경되지 않았다면 이전 계산 결과를 재사용하여 성능을 향상시킵니다.

<br />

## 왜 필요한가?  
컴포넌트 내에서 연산이 많거나 성능적으로 부담이 큰 작업이 있을 경우,  
`useMemo`를 사용하여 **불필요한 연산을 방지**하고 **최적화**할 수 있습니다.

<br /> 

## 예제  

### 기존 코드 (`List.jsx`)

```jsx
const getAnalyzedData = () => {
  console.log("getAnalyzedData 호출!");
  const totalCount = todos.length;
  const doneCount = todos.filter((todo) => todo.isDone).length;
  const notDoneCount = totalCount - doneCount;

  return { totalCount, doneCount, notDoneCount };
};

const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

return (
  <div className="List">
    <h4>Todo List 🌱</h4>
    <div>
      <div>total: {totalCount}</div>
      <div>done: {doneCount}</div>
      <div>notDone: {notDoneCount}</div>
    </div>
  </div>
);
```

### 문제점  
- 새로운 **todo**가 추가, 수정, 삭제될 때만 `getAnalyzedData()`가 실행되어야 함.
- 하지만 **검색 바 입력**과 같은 불필요한 렌더링 시에도 함수가 계속 호출됨 → **낭비 발생!**

---

## `useMemo`를 활용한 최적화  

### `useMemo` 기본 문법  

```jsx
import { useMemo } from "react";

useMemo(() => {}, []);
```

- **첫 번째 인수** : 콜백 함수 (메모이제이션할 연산)  
- **두 번째 인수** : 의존성 배열 (`deps`)  
  - 의존성 배열 내 값이 변경될 때에만 연산(콜백 함수)을 다시 수행  
  - `useEffect`와 동작 방식이 유사
  - 콜백 함수가 반환하는 값을 `useMemo`가 다시 반환합니다.

<br />

### `useMemo` 적용 코드  

```jsx
const { totalCount, doneCount, notDoneCount } = useMemo(() => {
  console.log("getAnalyzedData 호출!");
  const totalCount = todos.length;
  const doneCount = todos.filter((todo) => todo.isDone).length;
  const notDoneCount = totalCount - doneCount;

  return { totalCount, doneCount, notDoneCount };
}, [todos]);
```

### 개선된 동작 방식  
- `todos`가 변경될 때만 `getAnalyzedData()` 실행  
- 검색 바 입력 시 **불필요한 함수 호출이 사라짐**  

#

## `useMemo`의 의존성 배열 (`deps`)  

### 1. 빈 배열 (`[]`) 사용  

```jsx
useMemo(() => {
  console.log("최초 한 번만 실행됨!");
  return someHeavyComputation();
}, []);
```

✅ **최초 렌더링 시 한 번만 실행**  
✅ 이후 렌더링에서 **이전 결과값을 재사용**  
❌ `deps`가 없으므로 값이 변경되어도 다시 실행되지 않음  

<br />

### 2. 특정 값 의존 (`[todos]`)  

```jsx
useMemo(() => {
  console.log("todos 변경 시 실행됨!");
  return getAnalyzedData();
}, [todos]);
```

✅ **todos가 변경될 때만 실행**  
✅ 불필요한 재계산 방지  
✅ 검색 바 입력과 같은 불필요한 이벤트에서는 **재계산되지 않음**  

---

## 결론  
- `useMemo`를 활용하면 **불필요한 연산을 방지**하고 **React 성능을 최적화**할 수 있음  
- 의존성 배열을 적절히 설정하여 **최적의 타이밍에 연산을 수행**해야 함  
- 성능이 중요한 대규모 애플리케이션에서 필수적인 최적화 기법 중 하나!
