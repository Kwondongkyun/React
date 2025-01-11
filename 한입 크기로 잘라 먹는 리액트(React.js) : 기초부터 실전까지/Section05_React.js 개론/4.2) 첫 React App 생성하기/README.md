# React로 만든 웹 서비스

: **React App** 또는 **React Application**이라고 부른다.
- React로 구축된 웹 애플리케이션은 일반 웹페이지의 기능을 넘어, 다양한 기능을 제공하며 **웹 브라우저에서 동작하는 애플리케이션**처럼 느껴지기 때문이다.

<br />

## React App 생성하기

React는 **npm**(Node.js 패키지 관리자)에 등록된 자바스크립트 라이브러리로, React App을 생성하려면 다음 단계를 거칩니다:

1. Node.js 패키지 초기화
2. React 라이브러리 설치
3. 기타 개발 도구 설치 및 설정  

➡️ 이 과정은 복잡하고 까다로울 수 있습니다.

<br />

## Vite를 활용한 React App 생성

**Vite**는 차세대 프론트엔드 개발 도구로, 기본 설정이 적용된 React App을 간편하게 생성할 수 있다.

### **1. Vite 명령어 실행**

- 터미널에서 아래 명령어를 입력합니다.
  ```bash
  npm create vite@latest
  ```

### **2. 프로젝트 이름 설정**
- 명령어 실행 후, 프로젝트 이름을 입력한다.

  <img width="500" alt="스크린샷 2025-01-09 23 47 34" src="https://github.com/user-attachments/assets/48ca4d44-e555-4974-92b9-b521f069c32c" />

### **3. 프레임워크 선택**
- 프레임워크로 **React**를 선택한다.

  <img width="500" alt="스크린샷 2025-01-09 23 46 54" src="https://github.com/user-attachments/assets/e01a0072-7983-44f1-b952-6d586097ee71" />

### **4. 리액트 버전 선택**
- React의 버전을 선택합니다. 일반적으로 JavaScript 또는 TypeScript 기반으로 선택 가능하다.

  <img width="500" alt="스크린샷 2025-01-09 23 48 26" src="https://github.com/user-attachments/assets/ee396fc6-a7ea-458b-bfe1-af0b99936b7c" />

### **5. 생성 완료**
- 위 단계를 완료하면 Vite 기반의 React 프로젝트가 생성된다.

  <img width="200" alt="스크린샷 2025-01-09 23 49 32" src="https://github.com/user-attachments/assets/5b902277-b3c6-415a-8061-1af4c2166f59" />

<br />

## 프로젝트 의존성 설치

- 생성된 프로젝트 디렉토리로 이동한 후, 아래 명령어로 의존성을 설치합니다.

  ```bash
  npm install
  ```

### **설치 중 오류가 발생할 경우**

- 예를 들어, 권한 문제로 오류가 발생하면 아래 명령어로 해결할 수 있습니다.

  <img width="500" alt="스크린샷 2025-01-09 21 29 18" src="https://github.com/user-attachments/assets/25e75b28-949f-46a1-bf9d-11de07cf1cad" />

  ```bash
  sudo chown -R $(whoami) ~/.npm
  ```

- 혹은 시스템 계정에 따라 사용자 경로를 지정해 실행합니다.

---

## 프로젝트 구조와 각 파일의 역할
<img width="173" alt="스크린샷 2025-01-09 21 37 27" src="https://github.com/user-attachments/assets/e18bf7ad-1c0a-41ef-b145-3b982a31128b" />

### `public` 폴더

- `.svg`, `.png`, `.jpg` 같은 이미지 파일이나 폰트, 동영상 등 **정적 파일**을 보관합니다.

### `src` 폴더

- 실제 React 및 JavaScript 코드를 작성하는 폴더입니다.

#### `src/assets`  
- `public` 폴더와 유사하게 정적 파일을 보관하지만, 웹팩이나 번들러로 처리되는 파일입니다.

> **`public` vs `src/assets`**  
> - `public` 폴더의 파일은 빌드 과정에서 그대로 전달되며, 파일 경로를 명시적으로 작성해야 합니다.  
> - `src/assets`는 번들링되어 효율적으로 관리됩니다.

<br />

### 주요 설정 파일들

#### `eslint.config.js`

- **ESLint**의 설정 파일로, 코드 스타일 통일 및 품질 유지를 돕는 도구입니다.

#### `index.html`

- React 애플리케이션의 진입점으로, 앱의 기본 구조를 정의합니다.

#### `vite.config.js`

- Vite의 옵션을 설정하는 파일로, 프로젝트 환경설정과 관련된 내용이 포함됩니다.

<br />

## 리액트 앱 실행

React App 실행은 `package.json`의 `scripts` 항목에 정의된 명령어를 사용합니다.

```json
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
}
```

### 주요 명령어

- **`dev`**: 개발용 서버를 실행해 애플리케이션을 미리 보기.
- **`build`**: 애플리케이션을 배포 가능한 상태로 빌드.
- **`lint`**: 코드 스타일 검사.
- **`preview`**: 빌드된 결과물을 확인.  

React App을 실행하려면 터미널에서 아래 명령어를 입력합니다.

```bash
npm run dev
```  

웹 브라우저에서 애플리케이션이 실행되는 모습을 확인할 수 있습니다.
