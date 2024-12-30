# **배열 순회**

## 배열 순회 방법

```javascript
let arr = [1, 2, 3];
```

### 1. 배열 인덱스를 이용한 순회
- 배열의 길이를 기준으로 for 문을 사용하여 인덱스를 통해 각 요소에 접근.
  ```javascript
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 배열의 각 요소를 출력
  }
  ```
  
  - **특징**:
    - 배열의 인덱스를 이용하여 요소에 접근.
    - 인덱스를 사용해 요소의 값뿐만 아니라 인덱스 자체를 활용한 로직 작성 가능.
  
  - **장점**:
    - 배열의 특정 인덱스에 접근하거나, 인덱스를 활용한 계산에 적합.
    - 배열을 원하는 방향(정방향 또는 역방향)으로 순회 가능.

<br />

### 2. **`for...of` 반복문**
- 배열의 요소를 직접 순회.
  ```javascript
  for (let value of arr) {
    console.log(value); // 배열의 각 요소를 순서대로 출력
  }
  ```

  - **특징**:
    - 인덱스를 사용하지 않고 배열의 각 요소를 순서대로 순회.
    - 단순히 배열 요소에 접근만 하는 경우에 유용.
  
  - **장점**:
    - 인덱스가 필요하지 않은 경우 간결하게 요소를 순회.
    - 코드 가독성이 좋음.

<br />

### 3. **`forEach` 메서드**

```javascript
arr.forEach((value, index) => {
  console.log(`Index: ${index}, Value: ${value}`);
});
```

- **특징**:
  - 배열의 각 요소와 인덱스를 동시에 접근 가능.
  - 반복문 내부에서 추가적인 작업을 수행하기에 적합.

---

### **인덱스 이용 방식 vs for...of 반복문**

| **특징**                   | **for 문 (인덱스)**                      | **for...of 문**                     |
|----------------------------|------------------------------------------|-------------------------------------|
| 접근 방식                  | 인덱스를 통해 요소에 접근                 | 요소 값에 직접 접근                  |
| 인덱스 활용 가능 여부      | 가능                                     | 불가능                              |
| 사용 목적                  | 특정 인덱스에 조건을 걸거나 다른 작업 수행 | 단순 순회                           |

---

# **객체 순회**

```javascript
let person = {
  name: "kwon",
  age: 24,
  hobby: "축구",
};
```

### 1. **`Object.keys`**
- `Object.keys`는 객체의 key 값을 배열 형태로 반환.
- 반환된 배열을 순회하면서 각 key에 대응하는 value에 접근 가능.
  ```javascript
  let keys = Object.keys(person);
  
  for (let key of keys) {
    const value = person[key];
    console.log(key, value); // key와 value를 출력
  }
  ```
<br />

### 2. **`Object.values`**
- `Object.values`는 객체의 value 값들만 배열 형태로 반환.
- key는 필요 없고, value만 사용하려는 경우에 유용.
  ```javascript
  let values = Object.values(person);
  
  for (let value of values) {
    console.log(value); // 객체의 각 value를 출력
  }
  ```

<br />

### 3. **`for...in` 반복문**
- 객체의 모든 열거 가능한 프로퍼티를 순회.
- 상속받은 프로퍼티까지 포함될 수 있으므로, 객체 고유의 프로퍼티만 순회하려면 추가 검사가 필요.
  ```javascript
  for (let key in person) {
    const value = person[key];
    console.log(key, value); // key와 value를 출력
  }
  ```
  
  ```javascript
  if (person.hasOwnProperty(key)) {
    console.log(key, person[key]);
  }
  ```

<br />

### 4. **`Object.entries`**
- `Object.entries`는 객체의 key와 value를 `[key, value]` 형태의 배열로 반환.
- key와 value를 동시에 순회하고 싶을 때 유용.


  ```javascript
  let entries = Object.entries(person);
  
  for (let [key, value] of entries) {
    console.log(key, value); // key와 value를 동시에 출력
  }
  ```

---

### **⭐️추가 내용⭐️**

#### **객체와 배열의 혼합된 데이터 순회**
데이터가 배열과 객체가 혼합된 형태인 경우, 적절한 순회 방법을 조합해야 함.

```javascript
let data = [
  { name: "kwon", age: 24 },
  { name: "kim", age: 30 },
];

data.forEach((item) => {
  for (let [key, value] of Object.entries(item)) {
    console.log(key, value);
  }
});
```

---

### **🚨주의사항🚨**
1. **for...in 사용 시 주의**
   - 객체의 key만 순회하며, 배열에 사용하면 비정상적인 동작이 발생할 수 있음.
   - 배열에는 `for...of` 또는 `forEach`를 사용해야 함.

2. **순회 중 데이터 변경**
   - 배열이나 객체를 순회하는 동안 데이터를 수정하면 예기치 않은 동작이 발생할 수 있음.
   - 변경이 필요하면 원본 데이터를 복사 후 처리하는 것이 안전.

---

### **요약**

1. 배열 순회:
   - 인덱스 활용 → for 문.
   - 단순 요소 순회 → for...of, forEach.
2. 객체 순회:
   - key만 필요 → `Object.keys`.
   - value만 필요 → `Object.values`.
   - key와 value 모두 필요 → `Object.entries`.
3. 혼합 데이터 구조:
   - 배열과 객체의 순회 방식을 적절히 조합.
4. 주의:
   - 데이터 순회 중 변경에 유의.
   - for...in은 객체 순회에만 사용.
