# 비동기 작업 처리하기: Promise

## 1. Promise란?
`Promise`는 비동기 작업을 효율적으로 처리하기 위해 제공되는 자바스크립트의 **내장 객체**이다.  
이는 비동기 작업을 감싸(`랩핑`) 주어 상태 관리, 결과 저장, 작업 병렬 처리 등 다양한 기능을 제공한다.

### Promise의 주요 역할
- 비동기 작업을 실행한다.
- 비동기 작업의 상태를 관리한다.
- 작업의 결과를 저장하거나 다시 실행하도록 돕는다.
- 여러 비동기 작업을 병렬로 실행하거나, 순차적으로 실행한다.

### Promise의 상태
`Promise` 객체는 비동기 작업의 진행 상태를 다음 세 가지로 구분하여 관리한다:
- **Pending (대기 상태)**: 작업이 아직 진행 중인 상태.
- **Fulfilled (성공 상태)**: 작업이 성공적으로 완료된 상태.
- **Rejected (실패 상태)**: 작업이 실패한 상태.
<img width="450" alt="스크린샷 2025-01-05 18 39 22" src="https://github.com/user-attachments/assets/55bca01b-2b00-41c6-9bdc-bea60a858de4" />


### 상태 전환
- `Pending` → `Fulfilled`: 작업이 성공적으로 완료됨(이를 **resolve**라고 표현).
- `Pending` → `Rejected`: 작업이 실패함(이를 **reject**라고 표현).
<p align="center">
  <img width="320" alt="스크린샷 2025-01-05 18 38 39" src="https://github.com/user-attachments/assets/54cbfb5e-d57b-46a3-b198-9f0f9cd74c22" />
  <img width="320" alt="스크린샷 2025-01-05 18 38 59" src="https://github.com/user-attachments/assets/6b7bf641-4b72-489a-ad51-522dd90cb921" />
</p>

<br/> 

## 2. Promise 생성 및 사용

### 기본 구조
`Promise` 객체는 `new Promise` 생성자를 통해 생성된다. 생성자에는 **executor 함수**를 전달하며, 이 함수는 실제로 비동기 작업을 실행한다.

```javascript
const promise = new Promise((resolve, reject) => {
  // 비동기 작업 실행
  setTimeout(() => {
    console.log("안녕");
    resolve("작업 성공");
  }, 2000);
});
```

### Promise 상태와 결과 확인
`Promise` 객체는 내부에 두 가지 프로퍼티를 가진다:
- `[[PromiseState]]`: 현재 상태를 나타냄. (예: "pending", "fulfilled", "rejected")
- `[[PromiseResult]]`: 작업의 결과 값. 성공 시 결과 값이 저장되고, 실패 시 오류 메시지가 저장됨.

#### 예시
```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("작업 완료");
  }, 2000);
});

console.log(promise); // Promise {<pending>}

setTimeout(() => {
  console.log(promise); // Promise {<fulfilled>: "작업 완료"}
}, 3000);
```
<p align="center">
  <img width="300" alt="스크린샷 2025-01-05 18 35 28" src="https://github.com/user-attachments/assets/611327d2-5f69-44c7-bd11-c4ef40c9f649" />
  <img width="300" alt="스크린샷 2025-01-05 18 34 45" src="https://github.com/user-attachments/assets/574a30b0-3c74-4c99-b0f3-2a24ee16b4f1" />
</p>
  
<br />


## 3. Promise 사용하기

### 성공 상태 (`resolve`) 처리
`Promise`가 성공 상태로 전환되면, **`then` 메서드**를 사용하여 결과 값을 처리할 수 있다.

#### 예시
```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("작업 성공");
  }, 2000);
});

promise.then((value) => {
  console.log(value); // "작업 성공"
});
```

### 실패 상태 (`reject`) 처리
작업이 실패하면, **`catch` 메서드**를 사용하여 오류를 처리할 수 있다.

#### 예시
```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("작업 실패");
  }, 2000);
});

promise.catch((error) => {
  console.log(error); // "작업 실패"
});
```

<br />

## 4. Promise 체이닝 (Promise Chaining)

`then` 메서드는 또 다른 `Promise`를 반환하므로, 여러 비동기 작업을 순차적으로 실행할 수 있다.

#### 예시
```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

promise
  .then((value) => {
    console.log(value); // 10
    return value + 10;
  })
  .then((value) => {
    console.log(value); // 20
    return value + 10;
  })
  .then((value) => {
    console.log(value); // 30
  })
  .catch((error) => {
    console.error(error);
  });
```

<br />

## 5. 함수로 Promise 객체 생성하기

`Promise`를 함수로 만들어 동적으로 활용할 수 있다. 
- 예) 특정 숫자에 10을 더하는 비동기 작업을 `Promise`로 정의해보기.

### 함수 정의
```javascript
function add10(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });
}
```

### 함수 활용
```javascript
add10(0)
  .then((result) => {
    console.log(result); // 10
    return add10(result);
  })
  .then((result) => {
    console.log(result); // 20
    return add10(result);
  })
  .then((result) => {
    console.log(result); // 30
  })
  .catch((error) => {
    console.error(error); // "num이 숫자가 아닙니다."
  });
```

<br />

## 6. 정리

### Promise의 주요 메서드
- **`then`**: 성공 상태(`resolve`)에서 실행.
- **`catch`**: 실패 상태(`reject`)에서 실행.
- **`finally`**: 성공, 실패 여부와 관계없이 항상 실행.

### Promise의 장점
- 비동기 작업을 단계적으로 체인 형태로 관리할 수 있다.
- 코드 가독성을 높이고, 콜백 지옥을 방지한다.

### Promise의 활용 사례
- API 호출 및 데이터 처리
- 파일 읽기 및 쓰기
- 타이머와 같은 비동기 작업
```
