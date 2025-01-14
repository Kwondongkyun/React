## State를 Props를 통해 자식 컴포넌트에 전달하기

### 개념 정리

`State`와 `Props`는 리액트에서 데이터를 관리하고 전달하는 핵심 요소입니다.

**`State`**: 
- 컴포넌트 내부에서 관리되는 데이터입니다. 각 컴포넌트는 고유의 `state`를 가질 수 있으며, `useState`를 통해 생성 및 관리됩니다.  
  - `state` 값이 변경되면 해당 컴포넌트가 리렌더링됩니다.
  
**`Props`**:
- 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터입니다.  
  - Props는 읽기 전용이므로 자식 컴포넌트에서는 값을 수정할 수 없습니다.  

➡️ State를 Props로 전달하면 부모 컴포넌트에서 관리되는 상태를 자식 컴포넌트에서도 사용할 수 있습니다. 이를 통해 컴포넌트 간 데이터 흐름을 구현합니다.

# 

### 예제 코드

- 부모 컴포넌트에서 상태(`light`)를 정의하고, 이를 자식 컴포넌트에 Props로 전달하여 UI를 업데이트

  ```jsx
  import { useState } from "react";
  
  const Bulb = ({ light }) => {
    return (
      <div>
        {light === "ON" ? (
          <h1 style={{ backgroundColor: "orange" }}>ON</h1>
        ) : (
          <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
        )}
      </div>
    );
  };
  
  function App() {
    const [light, setLight] = useState("OFF");
  
    return (
      <>
        <div>
          <Bulb light={light} />
          <button
            onClick={() => {
              setLight(light === "ON" ? "OFF" : "ON");
            }}
          >
            {light === "ON" ? "전구 끄기" : "전구 켜기"}
          </button>
        </div>
      </>
    );
  }
  
  export default App;
  ```

<br />

### 코드 설명

1. **`Bulb` 컴포넌트**:
   - 부모 컴포넌트인 `App`으로부터 `light` 상태를 Props로 전달받습니다.
   - `light` 값이 "ON"이면 배경이 주황색(`Orange`)으로 표시되고, "OFF"이면 회색(`gray`)으로 표시됩니다.

2. **`App` 컴포넌트**:
   - `light`라는 상태를 정의(`useState`)하고, 상태를 변경하는 버튼을 제공합니다.
   - 버튼 클릭 시, 상태 값을 "ON"과 "OFF"로 토글(toggle)합니다.
   - `Bulb` 컴포넌트에 Props로 `light` 값을 전달하여, 전구의 상태를 나타냅니다.

# 

### State를 Props로 전달해야 하는 이유

#### **데이터 흐름 관리**: 
- 리액트는 단방향 데이터 흐름을 따릅니다.
- 부모 컴포넌트에서 정의한 상태는 자식 컴포넌트에 Props를 통해 전달해야만 공유할 수 있습니다.

#### **UI 동기화**: 
- 부모 컴포넌트에서 관리되는 상태를 자식 컴포넌트의 UI와 동기화하여 전체 애플리케이션이 일관된 상태를 유지할 수 있습니다.

# 

## 리액트 컴포넌트가 리렌더링되는 3가지 주요 상황

1. **컴포넌트 내부에서 관리하는 `state`가 변경되었을 때**
2. **컴포넌트가 전달받은 `props`가 변경되었을 때**
3. **부모 컴포넌트가 리렌더링되면, 자식 컴포넌트도 리렌더링된다**


> #### 리렌더링 관련 추가 설명
> 2. **Props가 변경되면 자식 컴포넌트는 리렌더링된다**:
>   - `App` 컴포넌트에서 `light` 상태가 변경되면, `Bulb` 컴포넌트에 전달된 Props도 변경됩니다.
>   - 이로 인해 `Bulb` 컴포넌트가 리렌더링되어, 새로운 상태에 맞는 UI를 표시합니다.
>   <br />
>
> 3. **부모 컴포넌트가 리렌더링되면 자식 컴포넌트도 리렌더링된다**:
>   - 예를 들어, `App` 컴포넌트에 또 다른 상태(`count`)가 추가되고, 이 값이 변경되면 `App`이 리렌더링됩니다.
>   - 이때 `Bulb`도 함께 리렌더링됩니다. 하지만 `Bulb`는 `count` 상태와 관계가 없으므로, 이는 불필요한 리렌더링입니다.

# 

## 불필요한 리렌더링 최적화 방법

### 1. **컴포넌트 분리**: 
- 상태를 사용하는 컴포넌트와 관계없는 컴포넌트를 분리합니다.  
   ➡️ 상태를 별도로 관리하도록 설계하면, 관련 없는 상태 변경으로 인한 리렌더링을 방지할 수 있습니다.

- `Bulb` 컴포넌트
  ```jsx
  // 전구 상태 관리 컴포넌트
  const Bulb = () => {
    const [light, setLight] = useState("OFF");
  
    return (
      <div>
        {light === "ON" ? (
          <h1 style={{ backgroundColor: "orange" }}>ON</h1>
        ) : (
          <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
        )}
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "전구 끄기" : "전구 켜기"}
        </button>
      </div>
    );
  };
  ```

- `Counter` 컴포넌트
  ```jsx
  // 카운터 상태 관리 컴포넌트
  const Counter = () => {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    );
  };
  ```

- `App` 컴포넌트
  ```jsx
  function App() {
    return (
      <>
        <Bulb />
        <Counter />
      </>
    );
  }
  ```

### 2. **React.memo 활용**:
- 자식 컴포넌트를 메모이제이션하여 Props가 변경되지 않는 한 리렌더링을 방지할 수 있습니다.

  ```jsx
  import React, { useState, memo } from "react";
  
  const Bulb = memo(({ light }) => {
    console.log("Bulb 렌더링");
    return (
      <div>
        {light === "ON" ? (
          <h1 style={{ backgroundColor: "orange" }}>ON</h1>
        ) : (
          <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
        )}
      </div>
    );
  });
  
  function App() {
    const [light, setLight] = useState("OFF");
    const [count, setCount] = useState(0);
  
    return (
      <>
        <div>
          <Bulb light={light} />
          <button
            onClick={() => {
              setLight(light === "ON" ? "OFF" : "ON");
            }}
          >
            {light === "ON" ? "전구 끄기" : "전구 켜기"}
          </button>
        </div>
        <div>
          <h1>{count}</h1>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </>
    );
  }
  ```

➡️ 이 방법을 사용하면 `count` 상태가 변경되어도 `Bulb` 컴포넌트는 리렌더링되지 않습니다.

# 

### 개선 결과

- `Bulb`와 `Counter` 컴포넌트가 서로 독립적으로 상태를 관리합니다.
- `count` 버튼을 클릭해도 `Bulb` 컴포넌트가 리렌더링되지 않으며, 반대로 전구 상태 변경도 `Counter` 컴포넌트에 영향을 미치지 않습니다.
- 불필요한 리렌더링이 발생하지 않아 성능이 최적화됩니다.

# 

## ⭐️추가 내용⭐️
### 리렌더링 최적화를 위한 추가 고려 사항

- 리액트에서 상태 분리 외에도 **메모이제이션**(`React.memo`, `useCallback`, `useMemo`)을 활용해 불필요한 리렌더링을 방지할 수 있습니다. 
- 상황에 따라 이 같은 기술을 병행하면 더 높은 성능을 구현할 수 있습니다.

### 결론

- State를 Props로 전달하면 부모와 자식 컴포넌트 간 데이터 흐름을 간단히 관리할 수 있습니다.
- 그러나 리렌더링이 성능 문제로 이어질 수 있으므로 상태를 독립적으로 관리하거나 `React.memo` 같은 최적화 기법을 활용하여 효율적으로 설계하는 것이 중요합니다.
