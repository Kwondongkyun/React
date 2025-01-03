# 5가지 배열 변형 메서드

### 1. `filter`
#### 설명
- 배열의 **모든 요소를 순회**하며, **조건을 만족하는 요소들만 필터링**하여 새로운 배열로 반환하는 메서드

#### 특징
- **원본 배열은 변경되지 않는다.**
- 콜백 함수에서 조건을 지정하여 필터링할 수 있다.
- 조건에 맞는 요소가 없으면 빈 배열을 반환한다.

#### 코드 예제
```javascript
let arr1 = [
  { name: "kwon", hobby: "테니스" },
  { name: "park", hobby: "테니스" },
  { name: "choi", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");

console.log(tennisPeople);
// [{ name: "kwon", hobby: "테니스" }, { name: "park", hobby: "테니스" }]
```

# 

### 2. `map`
#### 설명
- 배열의 모든 요소를 순회하면서, **각 요소에 대해 콜백 함수를 실행**한 결과값을 **새로운 배열**로 반환하는 메서드

#### 특징
- **원본 배열은 변경되지 않는다.**
- 반환된 배열의 길이는 원본 배열과 동일하다.
- 데이터 변환 및 매핑 작업에 적합하다.

#### 코드 예제
```javascript
let arr2 = [1, 2, 3];

const mapResult = arr2.map((item) => item * 2);
console.log(mapResult); // [2, 4, 6]

let names = arr1.map((item) => item.name);
console.log(names); // ["kwon", "park", "choi"]
```

# 

### 3. `sort`
#### 설명
- 배열의 요소를 **사전순으로 정렬**하는 메서드 (숫자와 문자의 경우 다르게 동작)

#### 특징
- **원본 배열을 변경한다.**
- 기본 정렬 기준은 "유니코드 포인트 순서"이다.
- 숫자 정렬 시 올바르게 작동하려면 **비교 함수(콜백함수)** 를 전달해야 한다.

#### 코드 예제
- 문자열 정렬
  ```javascript
  let arr4 = ["c", "a", "b"];
  arr4.sort();
  console.log(arr4); // ["a", "b", "c"]
  ```

- 숫자 정렬 (오름차순)
  ```javascript
  let arr3 = [10, 3, 5];
  
  arr3.sort((a, b) => a - b);
  console.log(arr3); // [3, 5, 10]
  ```

# 

### 4. `toSorted`
#### 설명
- **정렬된 새로운 배열**을 반환하는 메서드
- `sort` 메서드와 달리 원본 배열은 변경되지 않는다.

#### 특징
- **원본 배열은 그대로 유지**된다.
- 최신 ES 사양에서 추가된 메서드로, 기존 `sort` 메서드의 부작용을 방지한다.

#### 코드 예제
```javascript
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5); // ["c", "a", "b"]
console.log(sorted); // ["a", "b", "c"]
```

# 

### 5. `join`
#### 설명
- 배열의 모든 요소를 **하나의 문자열로 합쳐서 반환**하는 메서드

#### 특징
- **구분자(delimiter)** 를 지정할 수 있다
- 구분자를 지정하지 않으면 기본값은 `,`(쉼표)이다.

### 코드 예제
```javascript
let arr6 = ["hi", "im", "kwon"];

// 구분자 설정
const joined = arr6.join(" ");
console.log(joined); // "hi im kwon"
```
