### **객체(Object)**

- **정의:** 원시 타입(Primitive Type)이 아닌 **객체 타입**의 자료형으로, **여러 값을 동시에 저장**할 수 있는 구조.  
- **특징:** 객체는 **현실 세계의 사물이나 개념을 표현**하는 데 적합한 데이터 구조.

---

### **1. 객체 생성 방법**

#### **1.1 객체 생성자**
```javascript
let obj1 = new Object();
```

#### **1.2 객체 리터럴 (추천)**
```javascript
let obj2 = {};
```

> **추천 이유:** 객체 리터럴은 간결하며, 현대 JavaScript에서 더 일반적으로 사용됨.

---

### **2. 객체 프로퍼티 (속성)**

- **객체의 프로퍼티**는 키(key)와 값(value)의 쌍으로 구성.  
- 키는 문자열, 숫자 또는 심볼로 표현 가능하며, 값은 모든 자료형을 허용.  

#### **예시 객체**
```javascript
let person = {
  name: "kwon",         // 문자열 key
  age: 25,              // 숫자 value
  hobby: "축구",         // 문자열 value
  job: "Student",       // 문자열 value
  extra: {},            // 빈 객체 value
  10: 20,               // 숫자 key
  "like cat": true,     // 띄어쓰기가 포함된 key (따옴표 사용 필수)
};
```

---

### **3. 객체 프로퍼티를 다루는 방법**

#### **3.1 특정 프로퍼티에 접근**
- **점 표기법:** 객체.프로퍼티 이름
- **괄호 표기법:** 객체["프로퍼티 이름"] (띄어쓰기 등 특수 문자가 포함된 키에 필요)

  ```javascript
  let name = person.name;       // "kwon"
  let age = person["age"];      // 25
  
  let property = "hobby";
  let hobby = person[property]; // "축구"
  ```



#### **3.2 새로운 프로퍼티 추가**
```javascript
person.job = "fe developer";            // 점 표기법
person["favoriteFood"] = "떡볶이";      // 괄호 표기법
```



#### **3.3 프로퍼티 수정**
```javascript
person.job = "educator";
person["favoriteFood"] = "초콜릿";
```



#### **3.4 프로퍼티 삭제**
- **`delete` 연산자**를 사용하여 프로퍼티 삭제
  ```javascript
  delete person.job;
  delete person["favoriteFood"];
  ```



#### **3.5 프로퍼티 존재 유무 확인**
- **`in` 연산자**를 사용해 프로퍼티가 객체에 존재하는지 확인
  ```javascript
  let result1 = "name" in person; // true
  let result2 = "cat" in person;  // false
  ```

---

