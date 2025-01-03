# JavaScript Date 객체 사용법

### 1. Date 객체 생성하기
#### 기본 생성자 사용
- `new Date()`는 현재 날짜와 시간을 기준으로 `Date` 객체를 생성한다.
  ```javascript
  let date1 = new Date(); 
  console.log(date1); // 현재 시간이 출력됩니다.
  ```


#### 특정 날짜와 시간으로 Date 객체 생성

- 문자열을 이용해 날짜와 시간을 지정할 수 있다. <br />`new Date("YYYY/MM/DD HH:mm:ss")` 형태로 작성
  ```javascript
  let date2 = new Date("1997/01/07 10:10:10");
  console.log(date2); // Tue Jan 07 1997 10:10:10 GMT+0900 (한국 시간)
  ```
  
- 날짜와 시간을 다른 형식으로 입력할 수도 있다.
  ```javascript
  let date3 = new Date("1997, 1, 7, 23, 59, 59");
  console.log(date3); // Tue Jan 07 1997 23:59:59 GMT+0900
  ```
  
#

### 2. 타임스탬프 사용하기
- 타임스탬프는 "1970.01.01 00:00:00 UTC"로부터 경과한 밀리초(ms)를 나타낸다.

- 현재 시간의 타임스탬프 얻기
  - `getTime()` 메서드는 현재 날짜와 시간을 타임스탬프(밀리초)로 반환합니다.
  
    ```javascript
    let ts1 = date1.getTime();
    console.log(ts1); // 예시: 1735907372588 (현재 시간의 밀리초)
    ```
  
  - 타임스탬프를 사용해 새로운 Date 객체 생성
    ```javascript
    let date4 = new Date(ts1);
    console.log(date4); // date1과 동일한 값이 출력됩니다.
    ```

# 

### 3. 시간 요소 추출하기

- `Date` 객체에서 다양한 시간 요소를 추출할 수 있다.

  ```javascript
  let year = date1.getFullYear();
  let month = date1.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
  let date = date1.getDate();
  let hour = date1.getHours();
  let minute = date1.getMinutes();
  let seconds = date1.getSeconds();
  
  console.log(year, month, date, hour, minute, seconds);
  // 예시 출력: 2025 1 3 15 45 20
  ```

# 

### 4. 시간 수정하기

- `set` 메서드를 사용하여 날짜 및 시간 요소를 수정할 수 있다.

  ```javascript
  // 년, 월, 일, 시간, 분, 초 수정
  date1.setFullYear(2023);
  date1.setMonth(2);  // 3월 (0부터 시작)
  date1.setDate(30);  // 30일
  date1.setHours(23);
  date1.setMinutes(59);
  date1.setSeconds(59);
  
  console.log(date1); // 수정된 시간 출력
  ```

# 

### 5. 시간 포맷 출력하기

- `Date` 객체를 다양한 형식으로 출력할 수 있다.

  #### 날짜만 출력
  - `toDateString()` 메서드는 날짜만 출력하며, 시간 정보는 제외됩니다.
  
    ```javascript
    console.log(date1.toDateString()); // 예시: "Fri Mar 30 2023"
    ```
  
  #### 현지화된 시간 출력
  - `toLocaleString()`은 현지화된 시간 형식으로 출력된다.
<br/> Ex) 한국 : "YYYY. MM. DD. 오전/오후 HH:mm:ss" 형식
    ```javascript
    console.log(date1.toLocaleString()); // 예시: "2023. 3. 30. 오후 11:59:59"
    ```
