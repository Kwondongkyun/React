# 비동기 작업 처리: `async`와 `await`

### 개요
`async`와 `await`는 자바스크립트에서 비동기 작업을 간단하고 가독성 높게 처리하기 위한 키워드이다. 기존의 `Promise` 기반 방식인 `then`과 `catch`의 복잡성을 줄이고, 비동기 코드를 동기적으로 작성한 것처럼 보이게 만들어준다.

---

## 1. `async`란?

- `async`는 함수 앞에 붙이는 **키워드**로, 해당 함수를 비동기 함수로 만들어준다.  
- `async`가 붙은 함수는 항상 Promise를 반환**하며, 비동기 작업을 처리하기에 적합하다.

### `async`의 동작

- **값을 반환하는 경우**  
  - `async` 함수가 값을 반환하면, 반환 값은 자동으로 **Promise로 감싸진다**.

   #### 예시
   ```javascript
   async function getData1() {
     return {
       name: "kwon",
       id: "kevin"
     };
   }

   console.log(getData1());
   // 출력: Promise { <fulfilled>: { name: "kwon", id: "kevin" } }
   ```

   - 반환 값 `{ name: "kwon", id: "kevin" }`은 `Promise` 객체로 래핑되어 반환된다.

<br />

- **Promise를 반환하는 경우**  
   - `async` 함수에서 이미 Promise를 반환하는 경우, Promise는 별도의 추가 작업 없이 그대로 반환된다.

   #### 예시
   ```javascript
   async function getData2() {
     return new Promise((resolve) => {
       setTimeout(() => {
         resolve({
             name: "kwon",
             id: "kevin"
         });
       }, 1500);
     });
   }

   console.log(getData2());
   // 출력: Promise { <pending> }
   ```

   - 함수 내부에서 명시적으로 Promise를 생성하더라도, `async`는 이를 그대로 반환한다.

<br />

## 2. `await`란?

- `await`는 **`async` 함수 내부**에서만 사용 가능한 키워드이다.  
- Promise가 완료될 때까지(fulfilled/rejected) **비동기 작업의 결과를 기다렸다가 반환**한다.

### `await`의 동작

- **Promise가 완료되기를 기다림**  
   - `await`는 Promise가 처리될 때까지 대기한 후, 그 결과를 반환한다.

   #### 예시
   ```javascript
   async function fetchUser() {
     const user = await getData2();
     console.log(user); // { name: "kwon", id: "kevin" }
   }
   fetchUser();
   ```

   - `await`는 `getData2`의 비동기 작업이 완료되기를 기다린다.
   - Promise가 완료되면 반환 값을 변수에 할당한다.

<br />

- **`await`와 동기적 코드의 조화**  
   - `await`를 사용하면 비동기 작업을 동기적 코드처럼 작성할 수 있다.

   #### 예시
   ```javascript
   async function process() {
     console.log("Fetching data...");
     const data = await getData2();
     console.log("Data received:", data);
     console.log("Processing complete.");
   }
   process();
   ```

   **출력:**
   ```
   Fetching data...
   Data received: { name: "kwon", id: "kevin" }
   Processing complete.
   ```

   - `await`로 비동기 작업을 순차적으로 처리하여, 코드가 읽기 쉽고 직관적이다.

#
<br />

## 3. 기존 방식(`then`)과의 비교

### 기존 `then` 메서드 사용
`then` 메서드는 Promise의 결과를 처리하는 기본적인 방법이다. 하지만 콜백 중첩으로 인해 코드가 복잡해질 수 있다.

#### 예시
```javascript
function printData() {
  getData2().then((result) => {
    console.log("Data received:", result);
  });
}
printData();
```

<br />

### `async`와 `await` 사용
`async`와 `await`를 사용하면 `then`을 사용하지 않고도 비동기 작업을 처리할 수 있다.

#### 예시
```javascript
async function printData() {
  const data = await getData2();
  console.log("Data received:", data);
}
printData();
```

### `then` 방식 vs `async/await` 방식 비교

| 구분                | `then` 메서드 사용               | `async/await` 사용              |
|---------------------|----------------------------------|----------------------------------|
| 코드 가독성         | 콜백 중첩으로 다소 복잡해질 수 있음 | 간결하고 직관적이다.             |
| 오류 처리 방식       | `catch` 메서드를 사용             | `try-catch` 블록으로 처리         |
| 동기적 표현 가능 여부 | 비동기적으로만 처리됨             | 동기적 코드처럼 작성 가능          |

# 
<br />

## 4. `async/await`의 장점

1. **가독성**: 비동기 작업을 동기적으로 작성한 것처럼 표현할 수 있어 코드 가독성이 좋아진다.
2. **디버깅 용이**: 코드 흐름이 명확해져 디버깅이 쉬워진다.
3. **콜백 중첩 방지**: 기존 `then` 방식에서 발생할 수 있는 콜백 지옥을 해결할 수 있다.

# 
<br />

## 5. 추가 예시: `async/await`와 `try-catch`

### 예시: 오류 처리
비동기 작업에서 오류가 발생할 수 있다.
- 기존 방식 : then 뒤에 catch를 사용하여 오류를 처리한다.
- `async/await` : `try-catch` 블록을 사용하여 오류를 처리한다.


```javascript
async function fetchData() {
  try {
    const data = await getData2();
    console.log("Data received:", data);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}
fetchData();
```
> #### 코드 흐름 설명
> 1. 비동기 작업 시작
> - fetchData 함수는 async 함수이므로 Promise를 반환합니다.
> - 함수 내부에서 await를 사용해 getData2의 결과를 기다립니다.
> 2. 성공 처리
> - getData2 함수의 Promise가 **성공(fulfilled)** 하면 data 변수에 결과가 저장됩니다.
> - 그 다음, console.log로 데이터를 출력합니다.
> 3. 오류 처리
> - getData2의 Promise가 **실패(rejected)** 하면 오류가 발생합니다.
> - 이 오류는 try 블록을 빠져나가 catch 블록으로 전달됩니다.
> - catch 블록에서 console.error로 오류를 출력합니다.

- `getData2` 함수의 Promise가 reject되면 `catch` 블록으로 오류가 전달된다.
- 기존 `then`의 `catch` 메서드 대신, 동기 코드와 유사한 구조로 오류를 처리할 수 있다.

# 
<br />

## 6. `async/await`를 활용한 순차 처리

비동기 작업을 순차적으로 처리해야 할 때, `async/await`는 효과적인 해결책을 제공한다.

#### 예시: 순차 처리
```javascript
async function processSteps() {
  console.log("Step 1: Fetching user...");
  const user = await getData2();
  console.log("User fetched:", user);

  console.log("Step 2: Fetching orders...");
  const orders = await new Promise((resolve) =>
    setTimeout(() => resolve(["order1", "order2"]), 1000)
  );
  console.log("Orders fetched:", orders);

  console.log("All steps complete!");
}
processSteps();
```

**출력:**
```
Step 1: Fetching user...
User fetched: { name: "kwon", id: "kevin" }
Step 2: Fetching orders...
Orders fetched: ["order1", "order2"]
All steps complete!
```

#
<br />

## 7. 결론

`async`와 `await`는 비동기 작업을 보다 간결하고 직관적으로 작성할 수 있도록 도와준다.  
Promise 기반 작업이 많아질수록, `async/await`를 활용한 코드는 더 큰 장점을 발휘한다.

### 요약

- **`async`**: 함수를 비동기 함수로 변환. 항상 Promise를 반환.
- **`await`**: Promise의 완료를 기다리고, 결과 값을 반환.
- **장점**:
  - 가독성 향상
  - 코드의 동기적 표현
  - 콜백 지옥 방지
  - 디버깅 및 오류 처리 용이
