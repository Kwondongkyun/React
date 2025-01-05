// Ex_1
async function getData1() {
  return {
    name: "kwon",
    id: "k",
  };
}
console.log(getData1()); // Promise {<fulfilled>: {…}}


// Ex_2
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "kwon",
        id: "k",
      });
    }, 1500);
  });
}

// 기존 then 코드
function printData() {
  getData().then((result) => {
    console.log(result);
  });
}
printData(); // {name: 'kwon', id: 'k'}


// async, await 사용
async function printData() {
  const data = await getData();
  console.log(data);
}
printData(); // {name: 'kwon', id: 'k'}
