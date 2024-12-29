# **구조 분해 할당 (Destructuring Assignment)**
구조 분해 할당은 배열이나 객체에 저장된 여러 개의 값을 "분해"하여 각기 다른 변수에 할당하는 문법으로, 코드의 가독성을 높이고 편리하게 값을 추출할 수 있게 해줍니다.

## **1. 배열의 구조 분해 할당**

배열에서 값을 분해하여 각각의 변수에 할당할 수 있습니다. 배열의 값의 순서를 기준으로 할당됩니다.

```javascript
let arr = [1, 2, 3, 5];

// 배열 구조 분해 할당
let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);  // 1 2 3 5
```

- `one`, `two`, `three`는 배열의 첫 번째, 두 번째, 세 번째 값을 할당받습니다.
- `four = 4`는 배열에 네 번째 값이 없으면 기본값 `4`를 할당합니다. (기본값을 설정하지 않으면 `undefined`가 할당됩니다.)

**주의**: 배열에서 구조 분해 할당 시, 값이 존재하지 않으면 `undefined`가 할당됩니다.

```javascript
let arr2 = [1, 2];
let [one, two, three = 3] = arr2;
console.log(one, two, three);  // 1 2 3
```

<br/>

## **2. 객체의 구조 분해 할당**

객체에서는 변수명과 프로퍼티 이름을 일치시켜 할당할 수 있습니다. 다른 이름으로 변수에 할당할 수도 있습니다.

```javascript
let person = {
  name: "kwon",
  age: 24,
  hobby: "축구",
};

// 객체 구조 분해 할당
let { name, age: myAge, hobby, extra = "hello" } = person;
console.log(name, myAge, hobby, extra); // kwon 24 축구 hello
```

- `name`, `hobby`는 프로퍼티 이름과 동일한 변수에 할당됩니다.
- `age: myAge`는 `age`의 값을 `myAge`라는 변수에 할당합니다. 즉, 객체의 `age`를 다른 변수명으로 받을 수 있습니다.
- `extra = "hello"`는 객체에 `extra` 프로퍼티가 없으면 기본값 `"hello"`를 할당합니다.

<br/>

## **3. 함수에서 객체 구조 분해 할당 사용**

함수의 매개변수로 객체를 구조 분해하여 전달받을 수 있습니다. 이 방법은 매우 직관적이며, 함수에서 객체의 특정 속성만을 쉽게 사용할 수 있게 해줍니다.

```javascript
const func = ({ name, age, hobby, extra = "nice" }) => {
  console.log(name, age, hobby, extra);
};

let person = {
  name: "kwon",
  age: 24,
  hobby: "축구",
};

// 함수 호출 시 객체 전달
func(person); // kwon 24 축구 nice
```

- 매개변수에서 바로 객체를 구조 분해하여 사용합니다.
- `extra = "nice"`는 `extra` 프로퍼티가 없을 경우 기본값 `"nice"`를 할당합니다.

<br/>

## **4. 구조 분해 할당을 활용한 변수 초기화**

구조 분해 할당은 변수 초기화 시 유용하게 활용할 수 있습니다. 예를 들어, 함수에서 반환된 배열이나 객체의 값을 쉽게 분해하여 받을 수 있습니다.

```javascript
function getUser() {
  return { name: "kwon", age: 24, hobby: "축구" };
}

const { name, age, hobby } = getUser();
console.log(name, age, hobby); // kwon 24 축구
```

**배열 반환 예시**:
```javascript
function getArray() {
  return [1, 2, 3];
}

const [a, b, c] = getArray();
console.log(a, b, c);  // 1 2 3
```

---

> ### **참고**
> 구조 분해 할당에서 값을 할당받은 변수의 순서나 이름이 중요한 경우, 반드시 순서대로 맞추거나 `key: value` 형태로 할당해야 합니다.
