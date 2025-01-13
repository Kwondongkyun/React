# 이벤트 핸들링(Event Handling)이란?

## 용어

### Event

- **이벤트**란 웹 내부에서 발생하는 사용자의 행동을 의미합니다.  
  예) 버튼 클릭, 메시지 입력, 스크롤 동작 등.

### Handling

- 영어 단어로 "다루다", "처리하다"라는 뜻을 가집니다.

### Event Handling

- 이벤트가 발생했을 때 이를 적절히 처리하는 것을 의미합니다.  
- 예시: 버튼 클릭 시 경고창 표시  
  - 사용자가 버튼을 클릭했을 때 경고창이 뜨는 동작을 실행하는 것이 이벤트 핸들링의 한 사례입니다.

# 

# 이벤트 핸들러란?

- 이벤트를 처리하기 위해 작성된 **함수**입니다.

### `onClick` 이벤트 핸들러 설정
```jsx
  function Button({ text, color = "black", children }) {
    return (
      <button
        onClick={() => {
          console.log(text);
        }}
        style={{ color }}
      >
        {text} - {color}
        {children}
      </button>
    );
  }
  
  export default Button;
  ```

<br />

### 1. **익명 함수로 이벤트 핸들러 설정하기**

```jsx
<button
  onClick={() => {
    console.log(text);
  }}
>
```

<br />

### 2. **컴포넌트 내부에 별도로 함수 정의하기**

```jsx
function Button({ text, color = "black", children }) {
  const onClickButton = () => {
    console.log(text);
  };
  return (
    <button onClick={onClickButton} style={{ color }}>
      {text} - {color}
      {children}
    </button>
  );
}

export default Button;
```

### 주의사항

1. **함수 이름만 전달.**
    - 함수의 호출 결과를 전달하면 안 됩니다.
    ```jsx
    <button onClick={onClickButton()} > {/* X - 호출 결과 전달 */}
      {text} - {color}
      {children}
    </button>
    ```

2. **콜백 함수 전달 규칙을 지켜야 합니다.**

# 

### 추가 예시: `onMouseEnter` 이벤트 핸들러 설정

- `onMouseEnter` 이벤트 예제

  ```jsx
  function Button({ text, color = "black", children }) {
    const onClickButton = () => {
      console.log(text);
    };
    return (
      <button
        onClick={onClickButton}
        onMouseEnter={onClickButton} // 마우스가 버튼 위로 들어오면 실행
        style={{ color }}
      >
        {text} - {color}
        {children}
      </button>
    );
  }
  
  export default Button;
  ```

--- 

# 이벤트 객체(Event Object)

리액트에서 이벤트가 발생하면 **이벤트 객체**가 이벤트 핸들러 함수의 매개변수로 전달됩니다.  
- 이 객체는 발생한 이벤트와 관련된 정보를 담고 있습니다.

## 이벤트 객체 출력 예제

```jsx
function Button({ text, color = "black", children }) {
  const onClickButton = (e) => { // 매개변수 e: 이벤트 객체
    console.log(e); // 이벤트 객체 출력
    console.log(text);
  };
  return (
    <button
      onClick={onClickButton}
      style={{ color }}
    >
      {text} - {color}
      {children}
    </button>
  );
}

export default Button;
```

➡️ 실행하면 `SyntheticBaseEvent` 객체가 출력됩니다.
  
  <img width="300" alt="스크린샷 2025-01-14 00 36 43" src="https://github.com/user-attachments/assets/fc97b736-0cd1-4b0b-b088-476934d63fd2" />

---

# 합성 이벤트(SyntheticBaseEvent)

### 정의

- 리액트에서 사용하는 **합성 이벤트 객체**는 다양한 웹 브라우저의 이벤트 객체를 통일한 형태입니다.
- 이를 통해 **브라우저 간의 비호환성(Cross-Browsing Issue)** 을 해결할 수 있습니다.

### Cross-Browsing Issue란?

- 브라우저마다 이벤트 처리 방식과 규격이 다르기 때문에 발생하는 문제를 말합니다.  
  리액트는 이를 해결하기 위해 브라우저마다 다른 규격을 하나로 통합한 합성 이벤트 객체를 제공합니다.

### 특징

1. 발생한 이벤트와 관련된 모든 정보가 포함되어 있습니다.
2. 모든 브라우저에서 일관된 동작을 보장합니다.


### 합성 이벤트 객체의 주요 속성 예시

#### `target`
- 이벤트가 발생한 **발원지 요소**를 나타냅니다.  
  예) 버튼 클릭 시 `target`은 해당 버튼을 참조합니다.

---

# 요약

1. **이벤트 핸들링**은 사용자가 발생시킨 이벤트를 처리하는 작업이다.
2. **이벤트 핸들러**는 이벤트를 처리하는 데 사용되는 함수이다.
3. 리액트의 **합성 이벤트(SyntheticBaseEvent)** 는 브라우저 간 비호환성 문제를 해결하기 위해 만들어졌.
4. 이벤트 핸들러에는 **콜백 함수**를 전달하며, 매개변수로 이벤트 객체를 사용할 수 있.
   이를 통해 발생한 이벤트와 관련된 정보를 처리할 수 있습니다.
