# 동적 경로(Dynamic Segments)란?

동적 경로(Dynamic Segments)는 URL 내에서 특정 값이 동적으로 변경될 수 있는 부분을 의미한다. 이를 통해 특정 데이터를 URL을 통해 전달하고 활용할 수 있다.

#

## 동적 경로 방식

### 1. URL Parameter

- `/` 뒤에 특정 아이템의 `id`나 고유 값을 명시하여 경로를 설정하는 방식
- 예시:
  - `~/product/1`
  - `~/product/2`
  - `~/product/3`
- **특징**
  - 주로 변경되지 않는 고유한 데이터를 전달하는 데 사용됨 (예: 게시글 ID, 사용자 ID 등)
  - 서버에서 해당 값을 이용하여 특정 데이터를 조회할 수 있음

<br />

### 2. Query String

- `?` 뒤에 변수명과 값을 명시하여 데이터를 전달하는 방식
- 예시:
  - `~/search?q=검색어`
  - `~/filter?category=electronics&sort=price`
- **특징**
  - 주로 사용자의 입력값이나 검색어처럼 자주 변경되는 데이터를 전달하는 데 사용됨
  - 여러 개의 값을 동시에 전달할 수 있음

#

## `URL Parameter` 사용 방법

### 1. `URL Parameter` 설정하기

React Router에서 `:id`와 같은 형식으로 동적 경로를 정의할 수 있다.

```jsx
import { Routes, Route } from "react-router-dom";
import Diary from "./Diary";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/diary/:id" element={<Diary />} />
      </Routes>
    </Router>
  );
}

export default App;
```

- `/diary/:id` → `:id` 부분이 동적으로 변할 수 있는 값임을 의미함

<br />

### 2. 다이어리 컴포넌트에서 `URL Parameter` 값 가져오기

다이어리 페이지(`Diary.jsx`)에서 `useParams` 훅을 사용하여 동적 경로의 값을 가져올 수 있다.

```jsx
import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  console.log(id); // URL에서 동적 값 출력

  return <div>Diary {id}</div>;
};

export default Diary;
```

### 3. 예제 실행 결과
- URL이 http://localhost:5173/Diary/100일 때
- `console.log(params);`의 출력값: `{ id: "100" }`
  <img width="350" alt="스크린샷 2025-01-30 16 31 28" src="https://github.com/user-attachments/assets/45347f18-f573-4ed3-86f0-701fcd2ad5db" />



#

## Query String 사용 방법

### 1. Query String 값을 가져오기

React Router의 `useSearchParams` 훅을 사용하여 Query String 값을 가져올 수 있다.

```jsx
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const value = searchParams.get("value"); // ?value=hello → "hello"

  return <div>Query Value: {value}</div>;
};

export default Home;
```

- `http://localhost:5173/?value=hello`로 접근하면 `value` 변수에 `hello`가 저장된다.

<br />

### 2. Query String 값 변경하기

`setSearchParams` 함수를 사용하여 Query String 값을 동적으로 변경할 수 있다.

```jsx
const handleClick = () => {
  setSearchParams({ value: "world" });
};

return (
  <div>
    <button onClick={handleClick}>Change Query</button>
  </div>
);
```

- 버튼을 클릭하면 `http://localhost:5173/?value=world`로 Query String이 변경된다.

#

## 동적 경로와 Query String 차이점 비교

| 구분 | URL Parameter | Query String |
|------|--------------|--------------|
| 경로 예시 | `/diary/100` | `/search?q=hello` |
| 사용 목적 | 특정 리소스 조회 (게시글, 사용자 프로필 등) | 검색, 필터링, 옵션 설정 등 |
| 특징 | 변경 가능하지만 일반적으로 고유 ID 전달 | 여러 개의 값을 동시에 전달 가능 |
| 데이터 전달 방식 | URL의 일부로 포함됨 | `?` 뒤에 변수명과 값을 전달 |
| 접근 방법 | `useParams()` 사용 | `useSearchParams()` 사용 |

---

## 결론

- **URL Parameter**: 변경되지 않는 특정 데이터를 URL에 포함시킬 때 사용
- **Query String**: 검색어, 필터, 정렬 방식 등 자주 변경되는 데이터를 전달할 때 사용
- React Router에서 `useParams()`와 `useSearchParams()`를 활용하여 동적 경로와 Query String을 효과적으로 처리할 수 있다.

