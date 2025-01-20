# 리액트 컴포넌트의 라이프사이클

리액트 컴포넌트는 **라이프사이클(Lifecycle)** 을 가지며, 이는 컴포넌트의 생명 주기를 의미합니다. 컴포넌트의 라이프사이클은 크게 세 가지 단계로 나눌 수 있습니다:

1. **Mount (탄생)**: 컴포넌트가 DOM에 추가되는 순간
2. **Update (변화)**: 상태(state)나 속성(props)의 변경으로 인해 리렌더링이 발생하는 순간
3. **Unmount (죽음)**: 컴포넌트가 DOM에서 제거되는 순간

# 

## 1. Mount: 탄생

```jsx
function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // Mount 단계: 컴포넌트가 처음 렌더링될 때 실행
  useEffect(() => {
    console.log("mount");
  }, []);

  ...

}
```

### 특징
- **`useEffect`**:
  - `useEffect`는 두 번째 인수(`deps`)로 빈 배열(`[]`)을 전달하면, **컴포넌트가 Mount 되는 순간에만** 실행됩니다.
  - 이후 컴포넌트가 `Update`되거나 `Unmount`되더라도 이 `useEffect`는 다시 실행되지 않습니다.

### 활용
- 컴포넌트가 처음 마운트될 때, 초기화 작업(예: API 호출, 이벤트 리스너 등록)을 수행할 때 유용합니다.

# 

## 2. Update: 변화, 리렌더링

```jsx
function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  ...

  // Update 단계: 상태나 속성이 변경될 때 실행
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  ...

}
```

### 특징
- `useEffect`에서 두 번째 인수인 `deps`(dependency 배열)를 **생략**하면, **컴포넌트가 업데이트될 때마다** `useEffect`가 실행됩니다.
- **`isMount`**:
  - 컴포넌트가 처음 마운트된 시점을 제외하고, 업데이트될 때만 특정 코드를 실행하고 싶다면 `useRef`를 활용합니다.

#### `deps`에 상태를 명시적으로 포함하는 경우:
```jsx
useEffect(() => {
  console.log("State changed:", count, input);
}, [count, input]);
```
- 위와 같이 특정 상태값을 `deps`에 명시하면, 해당 상태값이 변경될 때만 `useEffect`가 실행됩니다.
- 이때는 `count`, `input` 상태값이 변경될 때만 `useEffect`가 실행됩니다.

### 요약
- `deps`를 생략하면 모든 리렌더링 시 `useEffect`가 실행됩니다.
- 특정 상태값이 변경될 때만 실행되도록 하려면 `deps` 배열에 해당 상태값을 포함합니다.

# 

## 3. Unmount: 죽음

- #### `App.jsx`
  ```jsx
  import "./App.css";
  import Even from "./components/Even";
  import { useState, useEffect, useRef } from "react";
  
  function App() {
    ...
    return (
      <div className="App">
        ...
        <section>
          <Viewer count={count} />
          {count % 2 === 0 ? <Even /> : null}
        </section>
        ...
      </div>
    );
  }
  
  export default App;
  ```

- #### `Even.jsx`
  
  ```jsx
  import { useEffect } from "react";
  
  const Even = () => {
    useEffect(() => {
      return () => {             // 클린업 함수
        console.log("unmount");
      };
    }, []);
    return <div>짝수입니다.</div>;
  };
  export default Even;
  ```

### 특징
- `useEffect`의 콜백 함수에서 반환되는 함수는 **클린업(clean-up) 함수**라고 합니다.
- 클린업 함수는 다음 두 가지 경우에 실행됩니다:
  1. 컴포넌트가 **Unmount**될 때(useEffect가 끝날 때)
  2. 의존성 배열(`deps`)의 값이 변경될 때(기존 효과를 정리하고 새로운 효과를 적용)

### 활용
- 이벤트 리스너 제거, 타이머 정리, 외부 리소스 해제 등 정리 작업이 필요할 때 유용합니다.

# 

## 예제: 모든 라이프사이클 단계 활용
링크 : 

# 

### 최종 요약
1. **Mount**: 컴포넌트가 화면에 처음 나타날 때 실행.
2. **Update**: 상태나 속성이 변경되어 리렌더링될 때 실행.
3. **Unmount**: 컴포넌트가 화면에서 제거될 때 실행.
4. **`useEffect` 활용**:
   - 빈 배열(`[]`): Mount 시점에만 실행.
   - 상태값을 포함한 배열(`[state]`): 해당 상태값 변경 시 실행.
   - 클린업 함수: Unmount 시점 또는 의존성 변경 시 실행.
