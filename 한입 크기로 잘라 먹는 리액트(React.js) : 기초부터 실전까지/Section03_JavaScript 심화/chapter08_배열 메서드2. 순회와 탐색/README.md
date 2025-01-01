# 5가지 요소 순회 및 탐색 메서드

### 1. `forEach`
- **설명**:
  - 배열의 모든 요소를 순회하며 각 요소에 대해 특정 동작을 수행하는 메서드

- **특징**:
  - 콜백 함수의 인수로 요소 값, 인덱스, 배열 자체를 받을 수 있음
  - 값을 반환하지 않으며, 주로 부수 효과(side effect)를 위해 사용

- **코드 예제**:
  ```javascript
  let arr1 = [1, 2, 3];
  
  // 각 요소를 순회하며 인덱스와 두 배 값을 출력
  arr1.forEach((item, idx) => {
    console.log(`인덱스: ${idx}, 값의 두 배: ${item * 2}`);
  });
  
  // 배열 요소의 두 배 값을 새로운 배열에 추가
  let doubledArr = [];
  arr1.forEach((item) => doubledArr.push(item * 2));
  console.log(doubledArr); // [2, 4, 6]
  ```

<br />

### 2. `includes`
- **설명**:
  - 배열에 특정 요소가 포함되어 있는지 확인하는 메서드입니다.

- **특징**:
  - 불리언 값(`true` 또는 `false`)을 반환합니다.
  - **대소문자를 구분**하며, 객체의 참조값을 확인합니다.

- **코드 예제**:
  ```javascript
  let arr2 = [1, 2, 3];
  let isInclude = arr2.includes(10);
  console.log(isInclude); // false
  ```

<br />

### 3. `indexOf`
- **설명**:
  - 특정 요소의 **첫 번째 인덱스**를 반환하는 메서드입니다. 요소가 존재하지 않으면 `-1`을 반환합니다.

- **특징**:
  - 배열의 **왼쪽에서 오른쪽**으로 탐색합니다.
  - 원시값 비교를 사용하므로, 객체 비교에는 적합하지 않습니다.

- **코드 예제**:
  ```javascript
  let arr3 = [1, 2, 3];
  let index = arr3.indexOf(2);
  console.log(index); // 1
  ```

<br />

### 4. `findIndex`
- **설명**:
  - 콜백 함수에서 조건을 만족하는 **첫 번째 요소의 인덱스**를 반환하는 메서드입니다. 조건을 만족하는 요소가 없으면 `-1`을 반환합니다.

- **특징**:
  - 콜백 함수로 요소를 직접 탐색하므로 객체 배열에서도 사용할 수 있습니다.

- **코드 예제**:
  ```javascript
  let arr4 = [1, 2, 3];
  const findedIndex = arr4.findIndex((item) => item === 999);
  console.log(findedIndex); // -1
  
  let objectArr = [{ name: "kwon" }, { name: "kim" }];
  
  // indexOf로 객체를 찾으려 하면 -1 반환 (얕은 비교)
  console.log(objectArr.indexOf({ name: "kwon" })); // -1
  
  // findIndex로 객체 내부 값을 비교
  console.log(objectArr.findIndex((item) => item.name === "kwon")); // 0
  ```

### **⭐️주의⭐️**:
  - `indexOf`는 **원시값 비교**를 사용하므로, 객체 비교에는 사용할 수 없습니다. 객체 배열에서 조건에 맞는 요소를 찾으려면 `findIndex`를 사용하세요.

<br />

### 5. `find`
- **설명**:
  - 콜백 함수에서 조건을 만족하는 **첫 번째 요소**를 반환합니다. 조건을 만족하는 요소가 없으면 `undefined`를 반환합니다.

- **특징**:
  - 요소 자체를 반환하므로, 객체 배열에서 특정 조건에 맞는 객체를 찾는 데 유용합니다.

- **코드 예제**:
  ```javascript
  let arr5 = [{ name: "kwon" }, { name: "park" }];
  const finded = arr5.find((item) => item.name === "kwon");
  console.log(finded); // { name: 'kwon' }
  ```

---

### 정리
| 메서드       | 반환값                 | 주요 사용 사례                                           |
| ------------ | --------------------- | ------------------------------------------------------ |
| `forEach`    | 없음                  | 배열 순회 및 부수 효과 발생                              |
| `includes`   | `true` / `false`     | 배열에 특정 값 포함 여부 확인                             |
| `indexOf`    | 인덱스 (없으면 `-1`)  | 특정 원시값의 인덱스 확인                                 |
| `findIndex`  | 인덱스 (없으면 `-1`)  | 조건에 맞는 요소의 인덱스 찾기 (객체 배열 포함)            |
| `find`       | 요소 (없으면 `undefined`) | 조건에 맞는 요소 자체 반환 (객체 배열 포함)              |
```
