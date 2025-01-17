# JSX로 UI 표현하기

<img width="400" alt="스크린샷 2025-01-11 19 47 10" src="https://github.com/user-attachments/assets/11530841-2d68-4c28-a32e-5ff442ffdc79" />

- 자바스크립트에서는 함수가 HTML을 return하도록 만들 수 없다.

<img width="400" alt="스크린샷 2025-01-11 19 47 26" src="https://github.com/user-attachments/assets/7ac76ec8-c205-45ed-9fb2-0a5b228cba6a" />

- 리액트에서는 순수한 자바스크립트 문법이 아닌 JSX라고 불리는 확장된 자바스크립트의 문법을 이용하기 때문에 가능하다.

## JSX(JavaScript Extensions)

- 자바스크립트의 기능을 더 확장한 문법을 말한다.(일종의 자바스크립트 확장판)
- 자바스크립트와 HTML을 혼용하여 사용할 수 있다.
    
  <img width="400" alt="스크린샷 2025-01-11 19 49 43" src="https://github.com/user-attachments/assets/a21b7fc6-f48a-4a82-a0ca-fcd33f0d4b02" />

    
- 동적으로 특정 변수의 값을 HTML로 렌더링하도록 설정 가능하다.
    
    ```jsx
    function Footer() {
    	// 컴포넌트 내부 변수를 선언
    	const myName = "kwon";
    	
    	return (
    		<footer>
    			<h1>안녕 내 이름은 {myName}이야</h1>
    			<h1>footer</h1>
    		</footer>
    	);
    }
    ```
- `jsx` 문법내에서 자바스크립트의 값을 HTML로 렌더링하고 싶다면 중괄호 `{ }`안에 작성하면 된다.

- 중괄호 `{ }` 안에 가능한 값 : 숫자나 문자열 값으로써 평가될 수 있는 식이면 무엇이든지 가능하다.
    
    ```jsx
    const Main = () => {
      const number = 10;
      return (
        <main>
          <h1>main</h1>
          <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
        </main>
      );
    };
    
    export default Main;
    ```
    
<br />

### 예시코드

- `Main.jsx`

  ```jsx
  const Main = () => {
    const number = 10;
    return (
      <main>
        <h1>main</h1>
        <h2>{number}</h2>
      </main>
    );
  };
  
  export default Main;
  ```

# 

## JSX 문법 주의사항

### 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.

- 자바스크립트 표현식
    - 삼항 연산자, 값, 변수의 이름처럼 특정한 값으로 평가될 수 있는 식을 의미한다.
    - 조건문, 반복문은 불가능하다.

<br />

### 2. JSX에서는 숫자나 문자열 또는 배열의 값만 정상적으로 렌더링된다.
<img width="300" alt="스크린샷 2025-01-11 20 04 19" src="https://github.com/user-attachments/assets/f0d43c78-17f6-44e4-a68b-817502df37ea" />

```jsx
const Main = () => {
  const number = 10;
  return (
    <main>
      <h1>main</h1>
      <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
      {10}
      {number}
      {[1, 2, 3]}
      {true}
      {undefined}
      {null}
    </main>
  );
};

export default Main;

```

- `true`, `undefined`, `null` 같은 값은 오류를 발생시키지는 않지만 화면에 렌더링 되지 않는다.
- 객체 또한 렌더링 할 수 없다.
    
    ➡️ 점 표기법을 사용하여 문자열이나 숫자값을 렌더링 하도록 바꿔줘야한다. 
    
    ```jsx
    const Main = () => {
      const number = 10;
      const obj = { a: 1 };
      return (
        <main>
          <h1>main</h1>
          <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
          {10}
          {number}
          {[1, 2, 3]}
          {true}
          {undefined}
          {null}
          {obj}  // 오류 발생
          {obj.a} // 점 표기법 사용
        </main>
      );
    };
    
    export default Main;
    ```
<br />

### 3. 모든 태그는 닫혀있어야 한다.

<br />

### 4. 최상위 태그는 반드시 하나여야 한다.

- 최상위 태그
    - 리턴문의 소괄호 안에서 가장 높은 위치에 있는 태그(`main`, `div` 등)
- 적절한 최상위 태그가 없을 경우 빈 태그로 묶어주면 된다.(`<>`, `</>`)

# 

## 예시 코드
- `Main` 컴포넌트가 조건에 따라 각각 다른 UI 랜더링 하기

  ```jsx
  const Main = () => {
    const user = {
      name: "kwon",
      isLogin: true,
    };
    if (user.isLogin) {
      return <div>로그아웃</div>;
    } else {
      return <div>로그인</div>;
    }
    // return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
  };
  
  export default Main;
  ```

# 

## JSX 문법 상에서 HTML 요소(DOM 요소)에 스타일 적용하기

### 1. DOM 요소에 직접 스타일 속성 설정하기

- `return`문 안에 직접적으로 스타일링 코드 작성
    
    ```jsx
    const Main = () => {
      const user = {
        name: "kwon",
        isLogin: true,
      };
      if (user.isLogin) {
        return (
          <div style={{ backgroundColor: "red", borderBottom: "5px solid blue" }}>
            로그아웃
          </div>
        );
      } else {
        return <div>로그인</div>;
      }
      // return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
    };
    
    export default Main;
    ```
    

### 2. 별도의 CSS 파일 생성

### `Main.css`

```css
.logout {
  background-color: ivory;
  border-bottom: 5px solid green;
}
```

### `Main.jsx`

<img width="300" alt="스크린샷 2025-01-11 20 23 36" src="https://github.com/user-attachments/assets/6f08f396-49d0-415d-859e-4f6f33b23885" />

```jsx
import "./Main.css";

const Main = () => {
  const user = {
    name: "kwon",
    isLogin: true,
  };
  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
  // return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
};

export default Main;
```


**`import "./Main.css";`** 

- 컴포넌트에서 CSS 파일을 불러올 때는 import 뒤에 파일의 경로만 입력하면 된다.

**`className`** 

- `JSX`에서는 자바스크립트와 `HTML`을 함께 사용하고 있기 때문에 자바스크립트의 예약어인 `class` 사용 불가하다.
