# useRef

- `useReference`의 줄임말로 컴포넌트 내부에 새로운 레퍼런스 객체를 생성해주는 기능이다.
- 코드예시:
    
    ```jsx
    const refObject = useRef()
    ```
    
- 생성한 레퍼런스 객체는 컴포넌트 내부의 변수로써 일반적인 값들을 저장할 수 있다.
    
    → `useRef`는 `useState`와 비슷해보인다.
  
# 

## `useRef` vs. `useState`

### `useRef`
: Reference 객체 생성

#### 공통점
- 컴포넌트 내부의 변수로 활용 가능

#### 차이점
- 어떤 경우에도 리렌더링을 유발하지 않음

<br />

### `useState`
: State를 생성

### 공통점
- 컴포넌트 내부의 변수로 활용 가능

### 차이점
- 값이 변경되면 컴포넌트 리렌더링

# 

### `useRef` 이용 예시

- 컴포넌트가 렌더링하는 특정 DOM 요소에 접근할 수 있다. 그럼으로써 해당 요소를 조작하는 것도 가능하다.
  ```jsx
  const refObject = useRef()
    
  <div>
    <textarea
      ref={refObject}
      name="bio"
      value={input.bio}
      onChange={onChange}
    />
  </div>
  ```
  <img width="450" alt="스크린샷 2025-01-16 23 46 23" src="https://github.com/user-attachments/assets/ab7d97cf-bd91-4246-a8c7-8a472f6f4669" />



# 

## `useRef` 이용하여 새로운 레퍼런스 객체 생성하기

### `useRef` 내장함수 불러오기

```jsx
import { useRef } from "react";
```

<br />

### 새로운 레퍼런스 객체 생성하기

```
const refObj = useRef();
console.log(refObj);
```
➡️ `current`라는 프로퍼티를 갖는 객체 하나가 출력된다.(이 객체가 레퍼런스 객체이다.)

  <img width="400" alt="스크린샷 2025-01-16 23 49 47" src="https://github.com/user-attachments/assets/78924283-e0dd-4b0e-8b14-7201c5ee7c3a" />

> 레퍼런스 객체란
> - `current`라는 프로퍼티에 현재 보관할 값을 담아두기만 하는 단순한 자바스크립트 객체이다.

<br />

### `useRef`로 새로운 레퍼런스 객체를 생성할 때 인수로 초기값 전달하기

```jsx
const refObj = useRef(0);
console.log(refObj);
```
<img width="400" alt="스크린샷 2025-01-16 23 52 44" src="https://github.com/user-attachments/assets/cdc4d4af-dd67-441f-b141-431bccafd29d" />

➡️ `current` 프로퍼티에 0이라는 초기값을 저장하고 있는 레퍼런스 객체가 출력된다.

<br />

### 레퍼런스 객체의 값 사용하기

- 점 표기법 사용
    
    ```jsx
    const refObj = useRef(0);
    console.log(refObj.current);
    ```
    <img width="400" alt="스크린샷 2025-01-16 23 54 14" src="https://github.com/user-attachments/assets/ccf4f9a7-d5d6-4e0e-94d3-f28dab2a82ae" />

# 

## useRef는 값이 바뀌어도 리렌더링 되지 않는다.

```jsx
...
	
// 새로운 레퍼런스 오브젝트 생성
  const refObj = useRef(0);
  console.log("레지스터 렌더링");

  const onChange = (e) => {
    console.log(e, e.target, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
	};

  return (
    <div>
      <button
        onClick={() => {
          refObj.current++;
          console.log(refObj.current);
        }}
      >
        ref + 1
      </button>
      
      ...
```
<img width="300" alt="스크린샷 2025-01-16 23 58 49" src="https://github.com/user-attachments/assets/dc80f954-6678-45f1-9d0c-accee113f2f4" />

- 이벤트 핸들러만 계속 실행이 될 뿐 컴포넌트를 리렌더링 하진 않는다.

  ➡️ 레퍼런스 객체는 컴포넌트 내부에서 렌더링에 영향을 미치지 않아야 되는 변수를 생성할 때 활용한다.

# 

## 레퍼런스 객체의 활용 사례 1

- 레퍼런스 객체를 이용해서 레지스터 컴포넌트가 렌더링하고 있는 4개의 폼에 사용자가 얼마나 많은 횟수을 변경을 일으켰는지 수정 횟수 카운트 하기

  ```jsx
  import { useState, useRef } from "react";
  
  const Register = () => {
    const [input, setInput] = useState({
      name: "",
      birth: "",
      country: "",
      bio: "",
    });
  
    // 새로운 레퍼런스 오브젝트 생성
    const countRef = useRef(0);
  
    const onChange = (e) => {
      countRef.current++;
      console.log(countRef.current);
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    };
  
    return (
      <div>
        <div>
          <input
            name="name"
            value={input.name}
            onChange={onChange}
            placeholder="이름"
          />
        </div>
        <div>
          <input
            name="birth"
            value={input.birth}
            type="date"
            onChange={onChange}
          />
        </div>
        <div>
          <select name="country" value={input.country} onChange={onChange}>
            <option value=""></option>
            <option value="kr">한국</option>
            <option value="us">미국</option>
            <option value="uk">영국</option>
          </select>
        </div>
        <div>
          <textarea name="bio" value={input.bio} onChange={onChange} />
        </div>
      </div>
    );
  };
  export default Register;
  ```
  
  <img width="300" alt="스크린샷 2025-01-17 00 05 28" src="https://github.com/user-attachments/assets/0e30e942-4e21-460e-a9d7-c55686b97aa6" />

#

## 레퍼런스 객체의 활용 사례 2

- 레지스터 컴포넌트가 렌더링 하고있는 DOM 요소들을 직접 조작해보기
- 회원가입을 제출하는 기능

1. 제출 버튼 생성
    
    ```jsx
    <button onClick={onSubmit}>제출</button>
    ```
    
2. `onSubmit` 함수 생성
    
    ```jsx
    const onSubmit = () => {
        if (input.name === "") {
          // 이름을 입력하는 DOM 요소에 포커스
        }
    };
    ```
    
    - 사용자가 이름을 입력받는 이름을 정확히 입력했는지 확인하기
    - 특정 DOM요소에 포커스를 주려면 `return`문 안의 이름을 입력하는 DOM 요소인 input 태그에 접근할 수 있어야 한다.
        
        ```jsx
        return (
            <div>
              <div>
                <input
                  name="name"
                  value={input.name}
                  onChange={onChange}
                  placeholder="이름"
                />
              </div>
              
              ...
        ```
        
    
      ➡️ 레퍼런스 객체를 이용하여 접근할 수 있다.
    
    1. 새로운 레퍼런스 객체인 `inputRef` 생성
        
        ```jsx
        const inputRef = useRef();
        ```
        
    2. `input` 태그에 `ref` 속성으로 넣어준다.
        
        ```jsx
        return (
            <div>
              <div>
                <input
                  ref={inputRef} // ref 속성 추가
                  name="name"
                  value={input.name}
                  onChange={onChange}
                  placeholder="이름"
                />
              </div>
        ```
        
        → `input`태그가 렌더링하는 DOM 요소가 `inputRef`라는 레퍼런스 객체에 저장이 되게된다.
        
    3. `onSubmit` 함수안에서 제출버튼 클릭 시 `inputRef`의 `current`값 출력하기
        
        ```jsx
        const onSubmit = () => {
        	if (input.name === "") {
        		 // 이름을 입력하는 DOM 요소에 포커스
             console.log(inputRef.current);
        	}
        };
        ```
        
    4. 제출 버튼 클릭 시 input태그 DOM 요소가 출력된다.
       
       <img width="400" alt="스크린샷 2025-01-17 00 17 03" src="https://github.com/user-attachments/assets/678d63dc-5e96-4fda-bc79-7fd261f138de" />


# 

## ⭐️추가 내용⭐️

### `useRef`대신 자바스크립트 `let` 사용하면 되지 않을까?

- **자바스크립트 `let` 사용 코드**
    
    ```jsx
    import { useState, useRef } from "react";
    
    const Register = () => {
      const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
      });
    
      // 새로운 레퍼런스 오브젝트 생성
      const countRef = useRef(0);
      const inputRef = useRef();
    
      let count = 0; // 자바스크립트 let 사용
    
      const onChange = (e) => {
        count++; // 자바스크립트 let 사용
        console.log(count); // 자바스크립트 let 사용
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
      };
    
      const onSubmit = () => {
        if (input.name === "") {
          // 이름을 입력하는 DOM 요소에 포커스
          inputRef.current.focus();
        }
      };
    
      return (
        <div>
          <div>
            <input
              ref={inputRef}
              name="name"
              value={input.name}
              onChange={onChange}
              placeholder="이름"
            />
          </div>
          <div>
            <input
              name="birth"
              value={input.birth}
              type="date"
              onChange={onChange}
            />
          </div>
          <div>
            <select name="country" value={input.country} onChange={onChange}>
              <option value=""></option>
              <option value="kr">한국</option>
              <option value="us">미국</option>
              <option value="uk">영국</option>
            </select>
          </div>
          <div>
            <textarea name="bio" value={input.bio} onChange={onChange} />
          </div>
          <button onClick={onSubmit}>제출</button>
        </div>
      );
    };
    export default Register;
    ```
    
- **결과**

  <img width="400" alt="스크린샷 2025-01-17 00 23 20" src="https://github.com/user-attachments/assets/1313807a-3e24-44b6-96a5-08f45d50b874" />
    
  ➡️ 값이 1로 고정이 된다.
    
- **이유**
    1. `input`에 값을 입력하게 되면 코드상에 `onChange` 이벤트 핸들러가 실행이 되면서 `state`의 값을 변경한다.
        
        ```jsx
        const onChange = (e) => {
        	count++; // 자바스크립트 let 사용
        	console.log(count); // 자바스크립트 let 사용
        	setInput({
        	  ...input,
            [e.target.name]: e.target.value,
        	});
        };
        ```
        
    2. `Register` 컴포넌트가 리렌더링 된다.
        
        → 컴포넌트 역할을 하는 `Register`함수가 다시 호출되므로 함수 안에있는 코드도 모두 다시 실행된다.
        
        → count 변수를 초기화 하고있는 코드(`let count = 0;`)도 다시 실행되어 `count`의 값이 리렌더링 될 때마다 0으로 계속 리셋된다.
        
        → 결국 출력되는 값은 1로 고정이 된다.
        

- `useRef`나 `useState`를 이용해서 만든 리액트의 특수한 변수들은 컴포넌트가 리렌더링 된다고 해도 다시 리셋되지 않는다.

# 

### 변수의 선언을 컴포넌트 외부에 하면 되지 않을까?

```jsx
import { useState, useRef } from "react";

let count = 0; // 자바스크립트 let 사용

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  // 새로운 레퍼런스 오브젝트 생성
  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    count++; // 자바스크립트 let 사용
    console.log(count); // 자바스크립트 let 사용
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소에 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder="이름"
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          type="date"
          onChange={onChange}
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};
export default Register;
```

- 수정횟수가 잘 카운팅 되긴한다.
- 하지만 `Register` 컴포넌트를 한 번만 렌더링하는 상황에서는 문제가 발생하지 않지만 `Register` 컴포넌트를 두 번 렌더링하게 되면 문제가 발생한다.
    
    ➡️ `Register` 컴포넌트가 하나의 변수를 공유한다.
    
    - 이유
        - `Register` 컴포넌트를 두 번 렌더링한 건 `Register` 함수를 그냥 두 번 호출한 것이다.
            
            ➡️ `Register` 함수와 count라는 변수는 두 번 선언된 것이 아니라 한 번만 선언된 것이다.
