## 라이브러리란?

- 프로그램 개발에 필요한 다양한 기능들을 미리 만들어 모듈화한 코드의 집합.
- 원하는 기능이 있으면, 해당 기능을 제공하는 라이브러리를 설치해 사용 가능.
- 대표적인 예:
  - 날짜와 시간 관련 기능을 제공하는 **날짜 라이브러리**
  - 수학 계산 기능을 제공하는 **수학 라이브러리**

# 

### npmjs
<img width="700" alt="npmjs사이트" src="https://github.com/user-attachments/assets/4d0f6098-1465-4c33-a429-51209911d13a" />

- [npmjs 공식 사이트](https://www.npmjs.com/): Node.js 라이브러리의 집합체이자 패키지 관리 시스템.
- 다양한 라이브러리를 검색, 설치, 관리 가능.



# 

### 예제: randomcolor 라이브러리 사용하기

#### 1. 라이브러리 검색
<img width="700" alt="image" src="https://github.com/user-attachments/assets/2796e195-3aeb-41e1-9563-6b9ce568f27e" />

- `npmjs` 사이트에서 `randomcolor`를 검색.

#### 2. 라이브러리 설치 방법
- 설치 명령 확인 후, **VS Code 터미널**에서 설치 진행:
  ```bash
  npm install randomcolor
  ```
  
#### 3. 설치 후 주요 변화
- `package.json` 파일의 `dependencies` 항목에 설치된 라이브러리와 버전 정보가 추가됨:
  ```json
  "dependencies": {
      "randomcolor": "^0.6.2"
  }
  ```

- 파일 탐색기에 생성된 추가 항목:
  - `node_modules`: 설치한 라이브러리들이 저장되는 폴더.
  - `package-lock.json`: 설치된 라이브러리와 그 버전 정보를 정밀하게 기록한 파일.


# 

### `node_modules` 및 `package-lock.json` 삭제 시 대처 방법

- **문제**:  
  라이브러리의 실제 코드가 저장된 `node_modules` 폴더가 사라지면 실행 오류 발생:
  ```
  Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'randomcolor'
  ```

- **해결 방법**:
  1. 터미널에서 아래 명령어 실행:
     ```bash
     npm install
     // npm i
     ```
  2. 이 명령어는 `package.json` 파일에 기록된 `dependencies` 정보를 기준으로 모든 라이브러리를 다시 설치.

# 

### 정리

- `npm install` 명령어는 개발 환경 복구에 중요한 도구.
- `package.json`과 `package-lock.json`은 프로젝트의 의존성을 관리하는 핵심 파일.
- 라이브러리 설치 시, 이를 통해 효율적이고 체계적인 개발 환경 구축 가능.
