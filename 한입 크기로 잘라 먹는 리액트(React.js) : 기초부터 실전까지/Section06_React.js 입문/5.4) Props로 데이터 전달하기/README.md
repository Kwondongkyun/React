# Props의 주요 개념과 활용 정리

### **Props란 무엇인가?**
- Props는 부모 컴포넌트가 자식 컴포넌트에게 값을 전달하는 방법이다.
- 함수의 인수처럼 작동하며, 자식 컴포넌트에서 Props를 받아 다양한 UI를 동적으로 생성할 수 있다.

# 

### Props를 활용한 동적 UI 생성 예시(네이버 메인페이지)
<img width="500" src="https://github.com/user-attachments/assets/9f2f353e-bbf1-4769-ba06-e28439370007"/>

#### **기본 버튼 컴포넌트**
1. **App 컴포넌트에서 여러 개의 버튼 렌더링**  
   반복적인 버튼 생성 코드:

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

2. **Button 컴포넌트에서 Props 출력**  
   부모 컴포넌트에서 전달한 Props를 받아 콘솔로 확인:

   ```jsx
   const Button = (props) => {
     console.log(props); // 전달된 Props 객체 출력
     return <button>{props.text}</button>;
   };

   export default Button;
   ```

   **출력 결과:**  
   App 컴포넌트에서 전달한 값들이 각각 객체 형태로 Button 컴포넌트에 전달된다.
   ```plaintext
   { text: "메일" }
   { text: "카페" }
   { text: "블로그" }
   ```

# 

### 전달된 Props로 스타일링과 텍스트 동적 설정
- 전달받은 Props를 기반으로 버튼의 색상과 텍스트를 렌더링:
  
  ```jsx
  const Button = (props) => {
    return <button style={{ color: props.color }}>{props.text}</button>;
  };

  export default Button;
  ```

**App.jsx:**
```jsx
import Button from "./components/Button";

function App() {
  return (
    <>
      <Button text={"메일"} color={"green"} />
      <Button text={"카페"} color={"blue"} />
      <Button text={"블로그"} />
    </>
  );
}

export default App;
```

**결과:**  
Props로 전달된 값에 따라 버튼의 텍스트와 색상이 다르게 설정된다. Props를 전달하지 않으면 값이 undefined로 표시될 수 있다.

# 

### 기본값 설정 (Default Props)
- Props 값이 전달되지 않았을 때 사용할 기본값을 설정:

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

**App.jsx:**  
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

**결과:**  
`color` Props가 전달되지 않은 버튼은 기본값으로 "black"이 설정되어 렌더링된다.

# 

### Props를 활용한 컴포넌트의 이점
1. **재사용성 증가**: Button 컴포넌트처럼 구조는 동일하지만 데이터에 따라 동작이 다른 컴포넌트를 쉽게 만들 수 있다.
2. **유지보수 용이성**: Props를 활용하면 컴포넌트를 동적으로 제어할 수 있으므로 코드 수정과 확장이 간편하다.
3. **가독성 향상**: 컴포넌트를 함수처럼 호출하듯 Props로 필요한 정보를 명시적으로 전달할 수 있다.

