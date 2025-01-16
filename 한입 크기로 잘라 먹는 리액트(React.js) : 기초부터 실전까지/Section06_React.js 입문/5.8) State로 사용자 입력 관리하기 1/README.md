# 사용자의 입력을 처리하는 방법

## **개념 정리**

### 1. **React의 상태 관리**

- React에서는 `useState`를 사용하여 컴포넌트의 상태를 관리합니다.
- `useState`는 다음과 같이 사용됩니다:
    
    ```jsx
    const [state, setState] = useState(initialValue);
    
    ```
    
    - `state`: 현재 상태 값을 나타냅니다.
    - `setState`: 상태를 업데이트하는 함수입니다.
    - `initialValue`: 상태의 초기값입니다.
- 상태는 React 컴포넌트가 다시 렌더링되도록 만드는 핵심 요소입니다. 입력값이 변경되면 `setState`를 호출하여 새로운 값을 업데이트하고, 변경된 상태에 따라 UI가 다시 렌더링됩니다.

#

### 2. **폼 입력 관리**

- HTML 입력 요소 (`<input>`, `<textarea>`, `<select>` 등)는 사용자와의 상호작용을 통해 값을 입력받습니다.
- React에서는 이러한 입력 요소의 값을 `state`로 연결하여 **제어형 컴포넌트**(controlled component)를 만듭니다.
> **제어형 컴포넌트**란 React 상태(state)가 해당 입력 요소의 값을 제어하는 방식입니다.

#

### 3. **컴포넌트 구조**

- **폼 필드와 상태 연결**:
    - 각 입력 필드는 상태와 연결되어 있으며, `value` 속성으로 상태를 표시합니다.
    - `onChange` 이벤트 핸들러를 사용하여 입력값이 변경될 때 상태를 업데이트합니다.

#

## **코드 구조 및 설명**

### 1. **상태 정의**

```jsx
const [name, setName] = useState("이름");
const [birth, setBirth] = useState("");
const [country, setCountry] = useState("");
const [bio, setBio] = useState("");
```

- `useState`를 사용해 폼 입력값을 관리합니다.
    - `name`: 이름 입력 필드의 상태 (초기값은 `"이름"`).
    - `birth`: 생년월일 입력 필드의 상태 (초기값은 빈 문자열).
    - `country`: 국적 선택 필드의 상태 (초기값은 빈 문자열).
    - `bio`: 자기소개 텍스트 입력 필드의 상태 (초기값은 빈 문자열).

#

### 2. **이벤트 핸들러 정의**

- 각 상태를 업데이트하는 함수를 정의합니다. 예:

  ```jsx
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  ```

- `e.target.value`는 사용자가 입력한 값을 나타냅니다.
- 입력값이 변경되면 해당 상태가 업데이트됩니다.

#

### 3. **UI 구조**

- 각 입력 필드는 상태와 연결됩니다.

### 3.1 **이름 입력**

```jsx
<input value={name} onChange={onChangeName} placeholder="이름" />
```

- `value`로 상태 값을 표시하고, `onChange`로 상태를 업데이트합니다.

### 3.2 **생년월일 입력**

```jsx
<input value={birth} type="date" onChange={onChangeBirth} />
```

- `type="date"`는 HTML 날짜 입력을 활성화합니다.

### 3.3 **국적 선택**

```jsx
<select value={country} onChange={onChangeCountry}>
  <option value=""></option>
  <option value="kr">한국</option>
  <option value="us">미국</option>
  <option value="uk">영국</option>
</select>
```

- `<select>` 요소와 `onChange`를 통해 선택값을 상태로 관리합니다.

### 3.4 **자기소개**

```jsx
<textarea value={bio} onChange={onChangeBio} />
```

- `<textarea>`는 여러 줄의 입력을 받을 수 있습니다.

---

## **제어형 컴포넌트의 장점**

1. **단방향 데이터 흐름**: 상태는 컴포넌트의 단일 소스에서 관리되어 유지보수가 용이합니다.
2. **상태 기반 렌더링**: 입력값에 따라 컴포넌트가 자동으로 업데이트됩니다.
3. **유효성 검사 가능**: 입력값을 상태에 저장하므로 유효성 검사가 쉽습니다.

---

## **실행 예시**

1. 초기 화면:
    - 이름: "이름"
    - 생년월일: 빈 값
    - 국적: 선택되지 않음
    - 자기소개: 빈 값
2. 사용자가 값을 입력할 때마다, 각 상태가 업데이트되고 UI에 즉시 반영됩니다.

   <img width="500" alt="스크린샷 2025-01-16 17 15 43" src="https://github.com/user-attachments/assets/4d3b278f-4aa4-42d4-a9c1-12190884bcef" />
