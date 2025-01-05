// Ex_1)
const promise = new Promise(() => {
  setTimeout(() => {
    console.log("안녕");
  }, 2000);
});
console.log(promise); 
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "pending"
// [[PromiseResult]]: undefined

 
// Ex_2) resolve
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("안녕");
    resolve("안녕");
  }, 2000);
});
setTimeout(() => {
  console.log(promise1);
}, 3000);


// Ex_3) reject
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("안녕");
    reject("왜 실패했는지 이유...");
  }, 2000);
});
setTimeout(() => {
  console.log(promise2);
}, 3000);


// Ex_4)
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = null;
    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다.");
    }
  }, 2000);
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error); // num이 숫자가 아닙니다.
  });

// Ex_5) 예제
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });
  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);

    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

// 10, 20, 30
