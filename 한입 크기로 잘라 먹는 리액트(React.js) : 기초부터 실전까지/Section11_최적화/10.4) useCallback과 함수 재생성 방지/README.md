# useCallback

- `useCallback`은 리액트의 성능 최적화 훅으로, 함수가 불필요하게 재생성되는 것을 방지하여 렌더링 성능을 개선하는 데 도움을 줍니다.
- 함수가 변경되지 않도록 메모이제이션하는 기능을 제공하여, 자식 컴포넌트에 함수가 `props`로 전달될 때 불필요한 리렌더링을 방지할 수 있습니다.

## `useCallback` 기본 사용법

```jsx
useCallback(() => {}, []);
```
#### useCallback은 두 개의 인자를 받습니다:
- **첫 번째 인수:** 최적화하고 싶은 함수(불필요한 재생성을 방지할 함수 / 메모이제이션할 함수)를 전달합니다.
- **두 번째 인수 (`deps`):** 의존성 배열을 전달하여, 해당 값이 변경될 때만 함수가 다시 생성됩니다.

#

## 활용

```jsx
const func = useCallback(() => {}, []);
```

- `useCallback`은 첫 번째 인자로 받은 콜백 함수를 그대로 반환하여, **불필요한 함수 재생성**을 방지합니다.
- `deps`가 변경될 때만 함수가 새롭게 생성됩니다(함수 메모이제이션 효과).
- `deps`를 빈 배열(`[]`)로 설정하면, **컴포넌트가 처음 마운트될 때만 함수가 생성**되며, 이후 리렌더링이 발생해도 함수는 재생성되지 않습니다.

#

## 예제 코드

### `onDelete` 함수 최적화

#### 기존 코드
```jsx
const onDelete = (targetId) => {
  dispatch({
    type: "DELETE",
    targetId: targetId,
  });
};
```

<br />

#### `useCallback`을 적용한 코드
```jsx
const onDelete = useCallback((targetId) => {
  dispatch({
    type: "DELETE",
    targetId: targetId,
  });
}, [dispatch]);
```

- 위 코드에서 `dispatch`는 `useReducer`에서 제공하는 함수로, `deps`에 포함해야 올바르게 동작합니다.

# 

### 추가 예제: `useCallback`과 이벤트 핸들러

```jsx
import React, { useState, useCallback } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // useCallback을 사용하여 함수 메모이제이션
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // 의존성 배열이 비어 있어, 컴포넌트가 리렌더링 되어도 함수는 재생성되지 않음

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Counter;
```

#### 예시 설명
- `handleClick` 함수는 `useCallback`을 사용하여 메모이제이션합니다.
- `handleClick` 함수는 의존성 배열(`[]`)을 가지고 있기 때문에, 부모 컴포넌트가 리렌더링 되더라도 `handleClick` 함수는 한 번만 생성됩니다.
- 만약 `handleClick`에 의존하는 상태나 props가 없다면, 그 함수는 계속해서 동일한 참조를 유지하게 됩니다.

➡️ `handleClick` 함수는 `useCallback`을 사용하여 **컴포넌트가 리렌더링될 때도 동일한 함수**를 유지하도록 최적화됩니다.

#

### 왜 useCallback을 사용해야 할까?

- 리액트는 기본적으로 함수가 `props`로 자식 컴포넌트에 전달될 때마다 새로운 함수 참조를 생성합니다.
- 자식 컴포넌트가 이 함수들을 의존성으로 사용하는 경우, 매 렌더링마다 자식 컴포넌트가 리렌더링될 수 있습니다. `useCallback`은 이런 불필요한 리렌더링을 방지하는 데 도움이 됩니다.

#

### 최적화의 대상

- **모든 코드에 무조건 `useCallback`을 적용하는 것은 오히려 성능을 저하시킬 수 있습니다.**
- 아래와 같은 경우에만 `useCallback`을 사용하면 유용합니다:
  - 부모 컴포넌트가 자식 컴포넌트에 **함수를 `Props`로 전달할 때** (불필요한 리렌더링 방지)
  - **비용이 큰 연산을 수행하는 함수** (예: 데이터 변환, API 호출 등)
  - **이벤트 핸들러를 최적화**할 때 (예: `onClick`, `onChange` 등)

#

### 정리

- `useCallback`은 **불필요한 함수 재생성을 방지**하여 성능을 최적화하는 훅입니다.
- `deps` 배열을 통해 언제 함수를 재생성할지 제어할 수 있습니다.
- **무조건 적용하는 것이 아니라, 필요할 때만 사용해야 합니다.**
- 주로 부모-자식 간의 **불필요한 리렌더링을 방지**하거나, **비용이 큰 연산이 있는 함수**에 적용하면 효과적입니다.

