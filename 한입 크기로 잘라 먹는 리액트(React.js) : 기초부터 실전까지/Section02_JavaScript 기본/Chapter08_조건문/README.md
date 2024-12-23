# 조건문(Conditional Statement)
- 특정 조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법
- 대표적으로 if, switch 조건문이 존재함

### if 조건문
```
let num = 5;

if (num >= 10) {
  console.log("num은 10 이상입니다");
}
else if (num >= 5) {
  console.log("num은 5 이상입니다");
}
else if (num >= 3) {
  console.log("num은 3 이상입니다");
}
else {
  console.log("조건이 거짓입니다!");
}
```

### Switch 문
- if문과 기능 자체는 동일
- 다수의 조건을 처리할 때 if보다 더 직관적이다.
  ```
  switch-case 문
  
  : 기본적으로 소괄호 안에 있는 변수의 값과 일치하는 케이스를 위에서부터 아래로 차례로 탐색함
  일치하는 case를 만나게 되면 그 아래에 있는 모든 코드를 다 수행 시켜준다.
  
  -> break 문으로 해결 가능
  ```

  ```
  let animal = "owl";

  switch (animal) {
    case "cat": {
      console.log("고양이");
      break;
    }
    case "dog": {
      console.log("강아지");
      break;
    }
    case "bear": {
      console.log("곰");
      break;
    }
    case "snake": {
      console.log("뱀");
      break;
    }
    case "tiger": {
      console.log("호랑이");
      break;
    }
    default: {
      console.log("그런 동물은 전 모릅니다");
    }
  }
  ```
---
