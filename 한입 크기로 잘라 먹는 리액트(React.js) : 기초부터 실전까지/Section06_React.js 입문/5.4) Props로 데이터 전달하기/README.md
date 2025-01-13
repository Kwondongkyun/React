# Props의 주요 개념과 활용 정리

### **Props란 무엇인가?**
- Props는 부모 컴포넌트가 자식 컴포넌트에게 값을 전달하는 방법이다.
- 함수의 인수처럼 작동하며, 자식 컴포넌트에서 Props를 받아 다양한 UI를 동적으로 생성할 수 있다.

# 

## Props를 활용한 동적 UI 생성 예시(네이버 메인페이지)
<img width="500" src="https://github.com/user-attachments/assets/9f2f353e-bbf1-4769-ba06-e28439370007"/>

### **기본 버튼 컴포넌트**
#### 1. **App 컴포넌트에서 여러 개의 버튼 렌더링**  

- 반복적인 버튼 생성 코드: `App.jsx`

   ```jsx
   import Button from "./components/Button";

   function App() {
     return (
       <>
         <Button text={"메일"} />
         <Button text={"카페"} />
         <Button text={"블로그"} />
       </>
     );
   }

   export default App;
   ```

#### 2. **Button 컴포넌트에서 Props 출력**  

- 부모 컴포넌트에서 전달한 Props를 받아 콘솔로 확인: `Button.jsx`
   ```jsx
   const Button = (props) => {
     console.log(props); // 전달된 Props 객체 출력
     return <button>{props.text}</button>;
   };

   export default Button;
   ```

   **출력 결과:**  
   - App 컴포넌트에서 전달한 값들이 각각 **객체 형태**로 Button 컴포넌트에 전달된다.
      ```plaintext
      { text: "메일" }
      { text: "카페" }
      { text: "블로그" }
      ```

# 

## 전달된 Props로 스타일링과 텍스트 동적 설정
전달받은 `Props`를 기반으로 버튼의 색상과 텍스트를 렌더링:


- **Button.jsx**
  ```jsx
  const Button = (props) => {
    return <button style={{ color: props.color }}>{props.text}</button>;
  };

  export default Button;
  ```

- **App.jsx:**
   ```jsx
   import Button from "./components/Button";
   
   function App() {
     return (
       <>
         <Button text={"메일"} color={"green"} />
         <Button text={"카페"} />
         <Button text={"블로그"} />
       </>
     );
   }
   
   export default App;
   ```

- **결과:**  

  <img width="200" alt="스크린샷 2025-01-11 21 15 26" src="https://github.com/user-attachments/assets/802994e5-b032-408f-92b3-5bb321ad7cdc" />
   
   - Props로 전달된 값에 따라 버튼의 텍스트와 색상이 다르게 설정된다. Props를 전달하지 않으면 값이 undefined로 표시될 수 있다.

# 

## 기본값 설정 (Default Props)
### 기본값을 설정하지 않았을 때: 

  <img width="200" alt="기본값 없을 때" src="https://github.com/user-attachments/assets/d145cafc-83ac-4273-9546-da5b2c51ecba" />


### Props 값이 전달되지 않았을 때 사용할 기본값을 설정:

#### `defaultProps` 사용하기
- **Button.jsx**
  ```jsx
  const Button = (props) => {
    return (
      <button style={{ color: props.color }}>
        {props.text} - {props.color}
      </button>
    );
  };

  Button.defaultProps = {
    color: "black", // 기본값
  };

  export default Button;
  ```

- **App.jsx:**  
   ```jsx
   import Button from "./components/Button";
   
   function App() {
     return (
       <>
         <Button text={"메일"} color={"green"} />
         <Button text={"카페"} />
         <Button text={"블로그"} />
       </>
     );
   }
   
   export default App;
   ```

- **결과:**

   <img width="277" alt="스크린샷 2025-01-11 21 20 37" src="https://github.com/user-attachments/assets/769e0867-f9c7-4c1d-ae00-141b82c4e898" />

   - `color` Props가 전달되지 않은 버튼은 기본값으로 "black"이 설정되어 렌더링된다.

<br />

#### 자식 컴포넌트의 Props 기본값 설정
- **Button.jsx**
  ```jsx
  function Button({ text, color = "red", a = 3, children }) {
     return (
        <button style={{ color }}>
           {text} - {color} - {a}
           {children}
        </button>
     );
  }

  export default Button;
  ```

- **App.jsx**
  ```jsx
  import "./App.css";
  import Header from "./components/Header";
  import Main from "./components/Main";
  import Footer from "./components/Footer";
  import Button from "./components/Button";
   
  function App() {
     const buttonProps = {
        text: "메일",
        color: "green",
        a: 1,
        b: 2,
        c: 3,
     };
     return (
        <>
           <Button {...buttonProps} />
           <Button text={"카페"} color="blue" a="4">
              <Footer />
            </Button>
           <Button text={"블로그"}>
              <Header />
           </Button>
        </>
     );
  }
   
  export default App;
  ```

- **결과:**

   <img width="277" alt="스크린샷 2025-01-13 19 13 15" src="https://github.com/user-attachments/assets/e4543ea7-0033-44a0-b30a-24dfc197bb11" />

   - `color` Props가 전달되지 않은 버튼은 기본값으로 "red"이 설정되어 렌더링된다.
   - `a` Props가 전달되지 않은 버튼은 기본값으로 3이 설정되어 렌더링된다.

# 

## Props값 편리하게 사용하기
### 객체의 구조분해할당 이용
- 점 표기법으로 `Props`의 값에 접근하지 않는다.
- `Props` ➡️ `{ text, color }`
  ```jsx
   const Button = ({ text, color }) => {
     return (
       <button style={{ color: color }}>
         {text} - {color}
       </button>
     );
   };
   
   Button.defaultProps = {
     color: "black",
   };
   
   export default Button;
   ```
<br />

### 스프레드 연산자(`...`) 이용하기
- 부모 컴포넌트에서 Props 전달 시 사용한다.
  ```jsx
  import "./App.css";
  import Button from "./components/Button";
   
  function App() {
     return (
        <>
           <Button text={"메일"} color={"green"} a={1} b={2} c={3} />
           <Button text={"카페"} />
           <Button text={"블로그"} />
        </>
     );
  }
   
  export default App;
  ```
  -> `Props`로 여러 개의 값을 전달해야 된다면 Props 값들을 객체로 묶어서 전달한다.
  ```jsx
  import "./App.css";
  import Button from "./components/Button";
   
  function App() {
     const buttonProps = {
        text: "메일",
        color: "green",
        a: 1,
        b: 2,
        c: 3,
     };
     return (
        <>
           <Button {...buttonProps} />
           <Button text={"카페"} />
           <Button text={"블로그"} />
        </>
     );
  }
   
  export default App;
  ```
<br />

### Props로 전달할 수 있는 것들
- 일반적인 문자열같은 JavaScript(`text={"카페"}`)
- HTML 요소나 React 컴포넌트도 전달 가능하다.
  ```jsx
   import "./App.css";
   import Button from "./components/Button";
   
   function App() {
     const buttonProps = {
       text: "메일",
       color: "green",
       a: 1,
       b: 2,
       c: 3,
     };
     return (
       <>
         <Button {...buttonProps} />
         <Button text={"카페"} />
         <Button text={"블로그"}>
           <div>자식요소</div>            // HTMl 요소
         </Button>
       </>
     );
   }
   
   export default App;
   ```

<br />

### 자식요소 Props 사용
- 자식 요소로 배치된 `div` 태그가 자동으로 `Button` 컴포넌트에 `children` `Props`로 전달된다.
- 자식 요소들은 자동으로 `children`이라는 `Props`로 전달된다.
   ```jsx
   const Button = ({ text, color, children }) => {
     return (
       <button style={{ color: color }}>
         {text} - {color}
         {children}
       </button>
     );
   };
   
   Button.defaultProps = {
     color: "black",
   };
   
   export default Button;
   ```
   <img width="300" alt="스크린샷 2025-01-11 21 35 45" src="https://github.com/user-attachments/assets/628dd28c-21e6-4eb8-9d41-1504f008de2c" />

- 컴포넌트도 `children` `Props`로 전달 가능하다.
  ```jsx
   import "./App.css";
   import Header from "./components/Header";
   import Button from "./components/Button";
   
   function App() {
     const buttonProps = {
       text: "메일",
       color: "green",
       a: 1,
       b: 2,
       c: 3,
     };
     return (
       <>
         <Button {...buttonProps} />
         <Button text={"카페"} />
         <Button text={"블로그"}>
           <Header />               // 컴포넌트 전달
         </Button>
       </>
     );
   }
   
   export default App;
   ```
  <img width="300" alt="스크린샷 2025-01-11 21 36 54" src="https://github.com/user-attachments/assets/030c7f4a-0390-4b5a-b609-589f41f26db6" />

<br />

### 추가
- `Props`는 부모 컴포넌트에서 자식 컴포넌트로만 전달할 수 있다.
- 자식 ➡️ 부모는 불가능하다.

# 

## Props를 활용한 컴포넌트의 이점
1. **재사용성 증가**: Button 컴포넌트처럼 구조는 동일하지만 데이터에 따라 동작이 다른 컴포넌트를 쉽게 만들 수 있다.
2. **유지보수 용이성**: Props를 활용하면 컴포넌트를 동적으로 제어할 수 있으므로 코드 수정과 확장이 간편하다.
3. **가독성 향상**: 컴포넌트를 함수처럼 호출하듯 Props로 필요한 정보를 명시적으로 전달할 수 있다.

