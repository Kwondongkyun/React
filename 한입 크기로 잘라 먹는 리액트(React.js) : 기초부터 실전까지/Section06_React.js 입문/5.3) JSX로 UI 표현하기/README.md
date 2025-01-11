# 리액트 컴포넌트

리액트에서는 자바스크립트 함수가 HTML 태그를 반환하도록 설정할 수 있다. 이러한 함수를 **컴포넌트**라고 하며, 리액트의 핵심 개념 중 하나이다.

<br />

## 컴포넌트 정의와 사용

- 컴포넌트는 보통 함수의 이름을 따서 부르며, 첫 글자는 반드시 **대문자**로 시작해야한다.
- 함수가 반환하는 HTML 요소들이 브라우저에 렌더링된다.

#### 예시: `App` 컴포넌트
```jsx
import "./App.css";

function App() {
  return (
    <>
      <h1>안녕 리액트!</h1>
    </>
  );
}

export default App;
```

<br /> 

### 함수 컴포넌트

리액트에서 **함수 컴포넌트**는 HTML 구조를 반환하는 함수이다. 

#### 선언 방식
1. **함수 선언식**으로 정의
    ```jsx
    function Header() {
      return (
        <header>
          <h1>Header</h1>
        </header>
      );
    }
    ```

2. **화살표 함수**로 정의
    ```jsx
    const Header = () => {
      return (
        <header>
          <h1>Header</h1>
        </header>
      );
    };
    ```

### 클래스 컴포넌트

이전에는 클래스 형태로 컴포넌트를 정의했으나, 함수 컴포넌트와 훅(Hooks)의 등장 이후로 잘 사용되지 않는다.  

# 

## 컴포넌트 작성 시 주의사항

1. 컴포넌트 이름은 반드시 첫 글자가 대문자로 시작해야 한다. 
   - 소문자로 시작하면 리액트는 이를 일반 HTML 태그로 간주하기 때문
2. 컴포넌트는 **반드시 JSX 구조를 반환**해야 한다.

# 

## 브라우저에 렌더링 확인

`App.jsx` 파일에서 `App` 컴포넌트는 화면에 렌더링되는 루트 컴포넌트이다.

### 초기 상태
```jsx
import "./App.css";

function Header() {
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
}

function App() {
  return (
    <>
      <h1>안녕 리액트!</h1>
    </>
  );
}

export default App;
```

#### 문제
<img width="300" alt="스크린샷 2025-01-11 17 11 09" src="https://github.com/user-attachments/assets/0c557c01-2562-434d-80ae-6b01b6bfd16a" />

- 브라우저에 `App` 컴포넌트만 렌더링되며, `Header` 컴포넌트는 화면에 나타나지 않는다.
- 이유: `App` 컴포넌트가 `Header` 컴포넌트를 포함하지 않기 때문이다.

### 수정된 `App.jsx`
```jsx
import "./App.css";

function Header() {
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
}

function App() {
  return (
    <>
      <Header />
      <h1>안녕 리액트!</h1>
    </>
  );
}

export default App;
```

#### 결과
<img width="300" alt="스크린샷 2025-01-11 17 14 28" src="https://github.com/user-attachments/assets/b4db9d37-da00-4ea2-86d7-d55e7ea40061" />

- `Header` 컴포넌트가 `App` 컴포넌트의 자식으로 포함되어 화면에 렌더링된다.

# 

## 컴포넌트 계층 구조

### 부모 컴포넌트와 자식 컴포넌트
- **`Header`**: 다른 컴포넌트의 리턴문 내부에 포함되는 **자식 컴포넌트**이다.
- **`App`**: 화면에 직접 렌더링되며, 다른 컴포넌트를 포함하는 **부모 컴포넌트**이다.

<br />

### 리액트 컴포넌트 계층 구조
리액트의 모든 컴포넌트는 계층 구조를 가진다.

<img width="400" alt="리액트 컴포넌트 계층구조" src="https://github.com/user-attachments/assets/0107a2f5-3241-41cf-bbf0-631db301822b" />

- **`App` 컴포넌트**: 모든 컴포넌트의 루트가 되는 조상 컴포넌트이다.
- 모든 자식 컴포넌트는 `App` 컴포넌트 안에서 관리된다.

#### 계층 구조 예시
```jsx
<App>
  <Header />
  <Main>
    <Footer />
  </Main>
</App>
```

# 

## 루트 컴포넌트 변경하기

기본적으로 `App` 컴포넌트가 루트 컴포넌트로 설정되지만, 원하는 다른 컴포넌트로 변경할 수 있다.

#### 루프 컴포넌트 변경 예시(App -> Hello)
- `Main.jsx` (렌더링 설정 파일)
  ```jsx
  import { createRoot } from "react-dom/client";
  import App from "./App.jsx";
  
  const Hello = () => {
    return <div>Hello</div>;
  };
  
  createRoot(document.getElementById("root")).render(<Hello />);
  ```

#### 결과
- 이제 `Hello` 컴포넌트가 루트 컴포넌트가 되어 화면에 렌더링된다.

# 

## 컴포넌트 파일 분리

모듈화는 프로젝트 관리의 핵심이다. 컴포넌트별로 파일을 분리해 관리하면 코드 가독성과 유지보수가 훨씬 수월해진다.

### 파일 분리 과정

1. **`src` 아래 `components` 폴더 생성**  
2. **`Header.jsx` 파일 생성**

  #### `Header.jsx`
  ```jsx
  function Header() {
    return (
      <header>
        <h1>Header</h1>
      </header>
    );
  }
  
  export default Header;
  ```

3. **`App.jsx`에서 `Header` 임포트**
  ```jsx
  import Header from "./component/Header";
  
  function App() {
    return (
      <>
        <Header />
        <h1>안녕 리액트!</h1>
      </>
    );
  }
  
  export default App;
  ```

# 

> ## 정리
> - **모든 컴포넌트는 루트 컴포넌트(`App`)의 자식으로 존재해야 렌더링된다.**
> - 컴포넌트를 작성할 때 **첫 글자는 대문자**로 시작한다.
> - 컴포넌트 파일을 분리해 모듈화를 구현하면 프로젝트 관리가 쉬워진다.
