
# 라우팅 설정하기

## React Router 라이브러리

- `react-router-dom`은 [npmjs.com](http://npmjs.com)에 등록된 라우팅 라이브러리로, 대부분의 리액트 애플리케이션에서 사용된다.

<br />

### 라이브러리 설치

```bash
npm install react-router-dom
```

#

## 기본 설정

### `main.jsx`

```jsx
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

1. `BrowserRouter`를 불러온다.
2. `App` 컴포넌트를 `BrowserRouter`로 감싸 전체 라우팅을 관리할 수 있도록 한다.

<br />

### `BrowserRouter` 역할

- 현재 브라우저의 주소를 저장하고 감지하는 역할을 한다.
- 리액트 앱의 모든 컴포넌트가 현재 주소를 사용할 수 있도록 하며, 주소 변화에 반응할 수 있게 한다.
- `App` 컴포넌트를 감싸 전체 애플리케이션의 루트 역할을 한다.
  <img width="300" alt="스크린샷 2025-01-29 23 03 58" src="https://github.com/user-attachments/assets/723f10f3-ea85-4cea-8301-1efebbd478c1" />

# 

# 페이지 라우팅 설정

### 라우팅할 페이지

1. `/` : 전체 일기를 조회하는 **Home 페이지**
2. `/new` : 새로운 일기를 작성하는 **New 페이지**
3. `/diary` : 특정 일기를 조회하는 **Diary 페이지**

<br />

### 페이지별 컴포넌트 생성

- `Home.jsx`
- `Diary.jsx`
- `New.jsx`

<br />

### `Routes`와 `Route` 설정

```jsx
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/diary" element={<Diary />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
```

<br />

### `Routes`와 `Route` 동작 방식

- `Routes`는 `switch-case` 문과 유사하게 동작하며, 위에서부터 순차적으로 `path`를 검사한다.
- 현재 브라우저의 경로와 일치하는 `Route`를 찾아 해당 `element`를 렌더링한다.
- 만약 `/new` 경로로 이동하면 `New` 컴포넌트가 렌더링된다.

<br />

### 존재하지 않는 경로 처리 (404 페이지)

- 존재하지 않는 경로로 접근하면 기본적으로 아무것도 렌더링되지 않는다.
- 이를 방지하기 위해 `path="*"`을 사용하여 `NotFound` 컴포넌트를 렌더링한다.

```jsx
<Route path="*" element={<NotFound />} />
```

- `*`는 와일드카드로, 기존 설정된 모든 `Route`에 해당하지 않는 경우 실행된다.
- `switch-case` 문에서 `default`와 같은 역할을 한다.

---

## 주의 사항

1. **`Routes` 안에는 `Route` 컴포넌트만 포함될 수 있다.**
   - 다른 JSX 요소를 포함하면 오류가 발생한다.

2. **`Routes` 외부에 배치된 요소는 모든 페이지에서 공통적으로 렌더링된다.**
   - 예: `Header`, `Footer` 등의 컴포넌트는 `Routes` 바깥에 배치해야 한다.

