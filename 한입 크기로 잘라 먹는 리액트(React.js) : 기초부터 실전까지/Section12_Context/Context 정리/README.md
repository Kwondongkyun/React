# **Context API란?**

React의 **Context API**는 컴포넌트 간에 데이터를 **props 없이** 전달할 수 있도록 설계된 기능입니다. 주로 **Props Drilling 문제**를 해결하기 위해 사용됩니다. 데이터(상태나 함수 등)를 최상위에서 관리하면서, 컴포넌트 계층이 깊어지더라도 데이터가 필요한 컴포넌트에 직접 접근할 수 있게 해줍니다.

#

## **Context API의 주요 개념**

### 1. **Context 생성**

- `React.createContext()`를 사용하여 Context 객체를 생성합니다. 이 객체는 데이터를 공급(`Provider`)하거나 소비(`Consumer`)하는 데 사용됩니다.


### 2. **Provider (공급자)**

- `Context.Provider`는 데이터를 제공하는 역할을 합니다. **Provider의 value 속성**에 제공하고자 하는 데이터를 넣어, 하위 컴포넌트들이 이를 사용할 수 있도록 만듭니다.

### 3. **Consumer (소비자)**

- 데이터를 소비하는 컴포넌트입니다. 하위 컴포넌트는 `useContext(Context)` 훅을 사용하여 **Provider에서 전달된 데이터**를 바로 가져올 수 있습니다.

#

## **Context API의 사용 방법**

### 1. **기본 예제**

- Props Drilling 문제를 해결하기 위해 Context API를 사용하는 간단한 예제

  ```jsx
  import React, { createContext, useContext } from "react";
  
  // 1. Context 생성
  const UserContext = createContext();
  
  function App() {
    const userName = "Alice";
  
    return (
      // 2. Provider로 데이터 공급
      <UserContext.Provider value={userName}>
        <h1>Context API 예제</h1>
        <Parent />
      </UserContext.Provider>
    );
  }
  
  function Parent() {
    return (
      <div>
        <h2>부모 컴포넌트</h2>
        <Child />
      </div>
    );
  }
  
  function Child() {
    return (
      <div>
        <h3>자식 컴포넌트</h3>
        <GrandChild />
      </div>
    );
  }
  
  function GrandChild() {
    // 3. useContext로 데이터 소비
    const userName = useContext(UserContext);
  
    return (
      <div>
        <h4>손자 컴포넌트</h4>
        <p>유저 이름: {userName}</p>
      </div>
    );
  }
  
  export default App;
  
  ```

# 

### **코드 동작 설명**

1. **`createContext()`로 Context 생성**:
    - `UserContext`라는 Context를 생성합니다. 이 Context는 `Provider`와 `Consumer`를 통해 데이터를 공급하거나 사용할 수 있게 합니다.
2. **Provider로 데이터 제공**:
    - `UserContext.Provider`를 사용해 `userName` 데이터를 공급합니다.
    - `Provider`는 트리 구조의 최상단에 위치하며, 하위 컴포넌트는 모두 이 데이터를 사용할 수 있습니다.
3. **useContext로 데이터 소비**:
    - `GrandChild` 컴포넌트는 `useContext(UserContext)`를 호출하여 `userName` 데이터를 직접 받아옵니다.
    - 이를 통해 중간 컴포넌트(`Parent`, `Child`)를 거치지 않고 데이터를 전달받을 수 있습니다.

# 

## **Context API의 특징**

### 1. **Props Drilling 해결**:
  - Context API는 데이터를 트리 구조 전체에 전달하므로, 중간 컴포넌트를 거치지 않고 데이터에 접근할 수 있습니다.

### 2. **전역 상태 관리**:
  - Context API는 전역 상태 관리 도구로 사용될 수 있습니다. 다만 Redux와 같은 도구에 비해 규모가 큰 프로젝트에서는 구조화나 확장성이 떨어질 수 있습니다.

### 3. **재렌더링 문제**:
  - `Provider`에서 전달하는 데이터가 변경될 때, 데이터를 소비하는 모든 하위 컴포넌트가 재렌더링됩니다. 따라서 필요한 데이터를 세분화해서 Context를 나누는 것이 중요합니다.

#

## **Context API의 장점**

### 1. **간단한 전역 상태 관리**:
  - 작은 규모의 애플리케이션에서 Redux 없이 전역 상태를 관리할 수 있습니다.

### 2. **Props Drilling 방지**:
  - 중간 컴포넌트를 거치지 않고 데이터가 필요한 컴포넌트에 직접 전달됩니다.

### 3. **React 내장 기능**:
  - 외부 라이브러리 없이 React만으로 구현할 수 있습니다.

#

## **Context API의 단점**

### 1. **복잡한 구조의 상태 관리에 한계**:
  - 대규모 애플리케이션에서 Redux와 같은 상태 관리 라이브러리보다 복잡한 상태를 관리하기 어렵습니다.

### 2. **성능 이슈**:
  - Provider의 데이터가 변경될 경우, 모든 하위 컴포넌트가 불필요하게 재렌더링될 수 있습니다. 이를 방지하려면 Context를 분리하거나 `React.memo`를 활용해야 합니다.

### 3. **코드 추적 어려움**:
  - Context를 많이 사용하면, 데이터의 흐름을 추적하기 어려워질 수 있습니다.

# 

## **Context API와 Redux의 차이점**

| **특징** | **Context API** | **Redux** |
| --- | --- | --- |
| 사용 목적 | Props Drilling 방지, 간단한 전역 상태 관리 | 복잡한 상태 및 대규모 애플리케이션 관리 |
| 러닝 커브 | 낮음 | 높음 |
| 상태 관리 방식 | React 기본 기능 사용 | 외부 라이브러리 사용 |
| 성능 최적화 | 수동 관리 필요 | 내장된 최적화 기능 제공 |

#

### **Context API의 활용 사례**

1. **다국어 지원**: 애플리케이션의 언어 설정 데이터를 공급하여 모든 컴포넌트에서 사용할 수 있음.
2. **테마 관리**: 다크 모드나 라이트 모드 설정을 전역으로 관리.
3. **인증 상태 관리**: 사용자 로그인 정보나 인증 데이터를 전역으로 관리.

---

### **결론**

Context API는 React의 기본 도구로, **Props Drilling 문제를 해결하고 간단한 전역 상태를 관리하는 데 적합**합니다. 그러나 상태가 복잡하거나 규모가 큰 애플리케이션에서는 Redux, Zustand와 같은 외부 상태 관리 도구를 사용하는 것이 더 나은 선택일 수 있습니다. Context API를 사용할 때는 재렌더링 문제를 고려하여 구조를 설계하는 것이 중요합니다.
