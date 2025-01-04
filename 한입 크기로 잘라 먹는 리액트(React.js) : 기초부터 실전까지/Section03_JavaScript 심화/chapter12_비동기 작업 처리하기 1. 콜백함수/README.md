## 비동기 작업 처리하기: 콜백 함수와 콜백 지옥 문제

### 개요  
- 비동기 작업은 작업이 끝날 때까지 기다리지 않고 다음 코드를 실행하는 방식이다.
- 자바스크립트에서 비동기 작업을 처리할 때 **콜백 함수**는 가장 기본적인 방법이다.  

여기서는 콜백 함수로 비동기 작업을 처리하는 방법, 콜백 지옥 문제, 그리고 이를 해결할 수 있는 `Promise` 개념을 정리하였다.  

#

### 1. 콜백 함수란?  
- 콜백 함수는 다른 함수에 매개변수로 전달되어 특정 작업이 끝난 뒤에 실행되는 함수이다.
- 비동기 작업의 결과를 처리하거나 후속 작업을 실행할 때 사용된다.  

# 

### 2. 예제 코드  

#### 2-1. 기본적인 콜백 함수  
- 아래 코드는 두 수를 더한 결과를 비동기로 처리하는 예제이다.  

  ```javascript
  function add(a, b, callback) {
    setTimeout(() => {
      const sum = a + b;
      callback(sum);
    }, 3000);
  }
  
  add(1, 2, (result) => {
    console.log(`결과: ${result}`);
  });
  ```  

#### 실행 과정  
1. `add` 함수가 호출되면 `setTimeout` 함수가 실행된다.  
2. 3초 후, 콜백 함수가 호출되어 `sum` 값을 계산한다.  
3. 콜백 함수가 실행되며 결과를 출력한다.  

#

#### 2-2. 콜백 지옥 문제  

- 콜백 함수를 연속으로 호출하면 중첩 구조가 깊어지고 코드의 가독성이 떨어지고, 유지보수가 어려워지는 문제가 생긴다.
- 이를 **콜백 지옥**이라 한다.  

- 다음은 음식을 주문하고, 식히고, 냉동시키는 과정을 콜백 함수로 처리한 예제이다.  

  ```javascript
  function orderFood(callback) {
    setTimeout(() => {
      const food = "떡볶이";
      callback(food);
    }, 3000);
  }
  
  function cooldownFood(food, callback) {
    setTimeout(() => {
      const cooldownedFood = `식은 ${food}`;
      callback(cooldownedFood);
    }, 2000);
  }
  
  function freezeFood(food, callback) {
    setTimeout(() => {
      const freezedFood = `냉동된 ${food}`;
      callback(freezedFood);
    }, 1500);
  }
  
  orderFood((food) => {
    console.log(food);
  
    cooldownFood(food, (cooldownedFood) => {
      console.log(cooldownedFood);
  
      freezeFood(cooldownedFood, (freezedFood) => {
        console.log(freezedFood);
      });
    });
  });
  ```  

#### 문제점  
- 콜백 함수가 중첩되어 코드의 들여쓰기가 깊어진다.  
- 코드 가독성이 떨어지고, 디버깅이나 유지보수가 어렵다.  

# 

## 3. 해결 방법: Promise 사용
- 콜백 지옥 문제를 해결하기 위해 `Promise`나 `async/await`를 사용할 수 있다.
- 이를 통해 코드의 가독성을 높이고 비동기 작업의 체인을 간결하게 표현할 수 있다.


#### 참고: 콜백 지옥 해결 - Promise 예제
```javascript
function orderFood() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const food = "떡볶이";
      resolve(food);
    }, 3000);
  });
}

function cooldownFood(food) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const cooldownedFood = `식은 ${food}`;
      resolve(cooldownedFood);
    }, 2000);
  });
}

function freezeFood(food) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const freezedFood = `냉동된 ${food}`;
      resolve(freezedFood);
    }, 1500);
  });
}

orderFood()
  .then((food) => {
    console.log(food);
    return cooldownFood(food);
  })
  .then((cooldownedFood) => {
    console.log(cooldownedFood);
    return freezeFood(cooldownedFood);
  })
  .then((freezedFood) => {
    console.log(freezedFood);
  });
```

#### 장점  
- 비동기 작업의 흐름을 명확하게 표현할 수 있다.  
- 코드가 간결해지고, 가독성이 높아진다.  

#

### 결론  
- 비동기 작업을 처리할 때 콜백 함수를 사용할 수 있지만, 
- 복잡한 작업에서는 `Promise`를 사용하여 코드 가독성을 높이는 것이 좋다. 
- `Promise`를 더 간결하게 사용할 수 있는 `async/await` 키워드도 있다.
