## React Context란?

`React Context`는 컴포넌트 간 데이터 전달을 보다 효율적으로 처리할 수 있도록 도와주는 내장 API입니다. 이를 통해 **Props Drilling** 문제를 해결하고, 부모 → 자식으로만 데이터를 전달해야 했던 기존의 `props` 방식을 보완할 수 있습니다.

# 

## Props Drilling의 한계

### Props Drilling이란?
React에서 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 때 **중간 계층의 컴포넌트가 데이터를 직접적으로 필요로 하지 않더라도**, 전달하기 위해 반드시 `props`를 거쳐야 하는 상황을 말합니다.  
이는 코드가 복잡하고 가독성이 떨어지는 문제를 야기할 수 있습니다.
     
<img width="127" alt="스크린샷 2025-01-28 15 02 45" src="https://github.com/user-attachments/assets/15511c43-bb92-4baa-839f-d673f181aa3c" />

<br />

### Props Drilling의 문제점
1. **불필요한 코드 증가**  
   - 중간 계층이 데이터를 사용하지 않아도, 데이터 전달을 위해 코드 작성이 필요합니다.
   
2. **유지보수 어려움**  
   - 데이터가 여러 계층을 거쳐 전달되면, 추적 및 수정이 어려워집니다.

3. **가독성 저하**  
   - 코드가 반복되고 복잡해지면서 전체적인 가독성이 떨어집니다.

<br />

### 예시: Props Drilling
```jsx
// App -> ChildA -> ChildB -> ChildC 로 데이터를 전달해야 하는 경우
function App() {
  const data = "Hello from App";
  return <ChildA data={data} />;
}

function ChildA({ data }) {
  return <ChildB data={data} />;
}

function ChildB({ data }) {
  return <ChildC data={data} />;
}

function ChildC({ data }) {
  return <div>{data}</div>;
}
```
위 코드에서는 `ChildC`에서만 데이터를 사용하지만, 모든 중간 계층 컴포넌트가 `data`를 전달해야 합니다.

# 

## React Context를 활용한 Props Drilling 해결

### Context란?
`Context`는 데이터를 저장하는 **중앙 저장소 역할**을 하는 객체입니다. 이를 통해 `props` 없이도 컴포넌트 트리 전체에서 데이터를 공유할 수 있습니다.  
즉, **부모 → 자식 간 데이터 전달의 한계를 극복**하고, 중간 컴포넌트를 거치지 않고도 필요한 곳에서 데이터를 접근할 수 있습니다.

<br />

### Context 사용 구조
1. **`React.createContext()`**: Context를 생성합니다.
2. **`Provider`**: 데이터를 공급하는 역할을 합니다.
3. **`Consumer` 또는 `useContext` Hook**: 데이터를 소비합니다.

# 

## Context 구현 예시

```jsx
import React, { createContext, useContext } from "react";

// 1. Context 생성
const DataContext = createContext();

function App() {
  const data = "Hello from App";

  return (
    // 2. Provider로 데이터 공급
    <DataContext.Provider value={data}>
      <ChildA />
    </DataContext.Provider>
  );
}

function ChildA() {
  return <ChildB />;
}

function ChildB() {
  return <ChildC />;
}

function ChildC() {
  // 3. useContext로 데이터 소비
  const data = useContext(DataContext);
  return <div>{data}</div>;
}
```

<br />

### 위 코드의 장점
- 중간 계층인 `ChildA`, `ChildB`는 데이터를 전달할 필요가 없습니다.
- `ChildC`에서 직접적으로 `Context` 데이터를 사용하여 Props Drilling 문제를 해결합니다.

# 

## Context의 주요 특징

1. **Props Drilling 방지**  
   - 데이터를 직접적으로 필요한 컴포넌트에서 사용할 수 있습니다.

2. **다양한 Context 생성 가능**  
   - 여러 `Context`를 생성하여 독립적으로 관리할 수 있습니다.

   ```jsx
   const UserContext = createContext();
   const ThemeContext = createContext();
   ```

3. **Provider 중첩 가능**  
   - 필요에 따라 여러 개의 `Provider`를 중첩해서 사용할 수 있습니다.
   
   ```jsx
   <UserContext.Provider value={user}>
     <ThemeContext.Provider value={theme}>
       <App />
     </ThemeContext.Provider>
   </UserContext.Provider>
   ```

4. **전역 상태 관리 대체**  
   - 간단한 상태 관리의 경우, Context만으로도 전역 상태 관리 도구(`Redux`, `MobX`)를 대체할 수 있습니다.

# 

## Context 사용 시 주의할 점

1. **불필요한 렌더링 발생 가능**  
   - Context 값이 변경되면, 이를 사용하는 모든 컴포넌트가 리렌더링됩니다.  
     → 성능 최적화를 위해 `React.memo` 또는 `useMemo`를 함께 사용할 수 있습니다.

2. **컴포넌트 구조 복잡화**  
   - 많은 `Provider` 중첩은 코드 가독성을 떨어뜨릴 수 있습니다.  
     → 상태를 독립적으로 관리하거나, Custom Hook으로 Context를 분리해 사용하는 것이 좋습니다.

# 

## Context vs 전역 상태 관리 도구
Context는 간단한 데이터 전달(예: 테마, 언어 설정)에는 적합하지만, 복잡한 상태 관리(예: 비동기 로직, 복잡한 데이터 흐름)에는 **Redux, Zustand, Recoil** 같은 전역 상태 관리 도구가 더 적합합니다.
