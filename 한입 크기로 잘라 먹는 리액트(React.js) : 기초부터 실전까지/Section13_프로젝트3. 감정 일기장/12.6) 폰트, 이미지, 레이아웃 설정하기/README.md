# `public` 폴더 vs `src/assets` 폴더

- 둘 다 정적인 폰트 파일이나 이미지 파일을 보관할 수 있습니다.

### 감정일기장 파일 구조

- **폰트 파일** → `public` 폴더
- **이미지 파일** → `src/assets` 폴더

➡️ 이는 Vite가 내부적으로 수행하는 이미지 최적화 설정 때문입니다.
- **이미지 최적화 필요 없음** → `public` 폴더에 저장
- **이미지 최적화 필요** → `src/assets` 폴더에 저장

#

## `public` 폴더

- `src` 경로를 통해 불러옵니다.

  ```jsx
  <div>
    <img src={"/emotion1.png"} />
    <img src={"/emotion2.png"} />
    <img src={"/emotion3.png"} />
    <img src={"/emotion4.png"} />
    <img src={"/emotion5.png"} />
  </div>;
  ```

- Vite의 자동 이미지 최적화가 동작하지 않습니다.
- 빌드 시 별도의 최적화 과정 없이 그대로 배포됩니다.

<br />

## `src/assets` 폴더

- `import`를 통해 불러옵니다.

  ```jsx
  import emotion1 from "./assets/emotion1.png";
  import emotion2 from "./assets/emotion2.png";
  import emotion3 from "./assets/emotion3.png";
  import emotion4 from "./assets/emotion4.png";
  import emotion5 from "./assets/emotion5.png";
  
  <div>
    <img src={emotion1} />
    <img src={emotion2} />
    <img src={emotion3} />
    <img src={emotion4} />
    <img src={emotion5} />
  </div>;
  ```

- Vite가 자동으로 이미지 최적화를 수행합니다.
- 빌드 시 **Data URL 형식**으로 변환되어 브라우저 캐싱 최적화에 유리합니다.



> ### Data URL
> - 이미지와 같은 외부 데이터를 문자열 형태로 변환해 브라우저 메모리에 저장하는 포맷입니다.
> - 자동으로 브라우저 메모리에 캐싱되어 새로고침 시에도 빠르게 로드됩니다.
> - 다시는 불러오지 않도록 최적화됩니다.


<br />

## 최적화 확인하기

### 리액트 앱 빌드 후 결과물 확인

```bash
npm run build
```

- `dist` 폴더 생성 → 빌드된 결과물이 저장됩니다.

<br />

### 빌드된 결과물 실행

```bash
npm run preview
```
<img width="250" alt="`public` 폴더에서 불러온 이미지 형식" src="https://github.com/user-attachments/assets/1cb8ab8d-dabd-4bea-9482-5e44a0c8c3ce" />

- `public` 폴더에서 불러온 이미지는 일반 URL 방식으로 로드됩니다.

<img width="400" alt="`src/assets` 폴더에서 불러온 이미지 형식" src="https://github.com/user-attachments/assets/096bfa8a-e62a-4449-af0a-26ca6f39cdff" />

- `src/assets` 폴더에서 불러온 이미지는 Data URL 방식으로 최적화됩니다.

# 

## 개발자 도구 - Network 탭 분석
<img width="300" alt="개발자 도구 - Network 탭" src="https://github.com/user-attachments/assets/f94f8a2f-3037-4e66-865a-72d17474abbd" />

- 리액트 앱의 모든 네트워크 요청을 모니터링할 수 있습니다.

### Size 비교

- **일반 주소(URL)로 불러온 이미지(`public`):** 매번 새로 로드합니다.
- **Data URL 형식의 이미지(`src/assets`):** 메모리 캐시 덕분에 다시 불러오지 않고 메모리에서 바로 로드합니다.

### Time 비교

- **일반 URL 이미지(`public`):** 로드 시간 3ms 이상 소요
- **Data URL 이미지(`src/assets`):** 0ms로 즉각 로드됨

# 

## 주의사항

### 다수의 이미지를 사용하는 경우

- Data URL 형식은 브라우저 메모리에 저장되므로, 이미지가 많으면 메모리 사용량이 증가할 수 있습니다.
- **이미지가 많을 경우** → `public` 폴더에 저장하여 메모리 과부하 방지
- **자주 사용되는 이미지** → `src/assets` 폴더에 저장하여 빠른 로드 속도 확보

---

## 결론

- **폰트 파일:** 최적화 필요 없음 → `public` 폴더에 저장
- **소량의 중요한 이미지:** 빠른 로드 필요 → `src/assets` 폴더에 저장
- **대량의 이미지:** 메모리 효율 고려 → `public` 폴더에 저장
