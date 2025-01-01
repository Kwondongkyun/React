# 콜백함수
<p>자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미 함</p>

  ```javascript
  function main(value) {
    value();
  }
  ```
  <p>sub : 콜백함수</p>
  
  ```javascript
  function sub() {
      console.log("1");
  }
  main(sub);
  
  main(function sub() {
      console.log("2");
  });
  
  main(function () {
      console.log("3");
  });
  
  main(() => {
      console.log("4");
  });
  ```
# 콜백함수 활용
```javascript
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});
```
