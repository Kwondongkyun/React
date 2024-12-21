# HTML 살펴보기

## HTML(Hyper Text Markup Language)

- 마크업 언어의 한 종류
    ```
    마크업 : 문서나 데이터를 처리하기 위해 문서에 추가되는 정보를 의미함
    ```
- 웹사이트의 뼈대를 구성하기 위해서 사용하는 마크업 언어이다.

<br />

## 웹사이트의 뼈대를 구성하는 태그들

**`<html></html>`**

- HTML의 시작과 끝을 알리는 태그

**`<head></head>`**

- 웹사이트가 어떤 웹사이트인지 알 수 있는 여러 가지 속성(제목, 설명 등)을 담고 있는 곳
- 속성 : 메타데이터라고도 부름

**`<body></body>`**

- 실제로 웹사이트에서 보이는 콘텐츠가 들어가게 된다.

<br />

## SPA

- 각 페이지별로 HTML 파일이 따로 존재하며, 페이지를 이동하게 될 경우 브라우저에서는 해당 페이지의 HTML 파일을 받아와서 화면에 표시해준다.
    
    → 수많은 페이지가 존재하는 사이트의 경우 HTML파일이 수십~수백 개가 된다. (-)
    → 해결 : **SPA**(Single Page Application)

<br />

## MPA vs SPA

### MPA(Multi Page Application)

- 사용자가 페이지를 요청할 때마다 새로운 페이지가 로딩되어 화면에 나타남
- 각 페이지는 각각의 HTML 파일을 갖고 있음

### SPA(Single Page Application)

- 단 하나의 페이지만 존재하는 웹사이트이다.
    - HTML 파일이 하나라는 뜻

<p align="center">
  <img src="https://velog.velcdn.com/images/yejine2/post/b03fd089-9b7d-49d8-a408-55c3c543d838/image.png" alt="Image 1" width="300" />
  <img src="https://velog.velcdn.com/images/sang-mini/post/af8a7243-3d72-4126-b6b7-ef655ad6eafe/image.png" alt="Image 2" width="300" />
</p>

<br />


## 자바스크립트란 무엇인가?

: 정식 명칭 : ECMAScript (버전 : ES5, ES6,  …)

- 런타임에 코드가 해석되고 실행된다(↔ C, Java : 컴파일 언어)\

<br />

## 자바스크립트의 자료형

: 자바스크립트는 변수를 선언할 때가 아닌 변수에 데이터가 대입되는 시점에 해당 변수의 자료형이 결정된다.

- 동적으로 자료형이 결정되는 것 : 동적 타이핑 → 자바스크립트의 방식

<br />

## Undefined vs Null

**Undefined** : 값이 아직 정의되지 않은 상태

**Null** : 값이 정의되긴 했으나 정의된 그 값이 null인 것

<br />

## 자바스크립트의 함수

프로그래밍에서 함수 : 입력(파라미터 or 인자)을 받아서 정해진 출력을 하는 것

자바스크립트에서 함수 정의

- `function statement`
- `arrow function expression`

```jsx
// function statement를 사용
function sum(a, b) {
	return a + b;
}

console.log(sum(10, 20));
// 30

const multiply = (a, b) => {
	return a * b;
}

console.log(multiply(10, 20));
// 200

```

<br />


## Node.js, npm

- 버전 확인
    
    ```
    node --version
    ```
    
    ```
    npm --version
    ```
    

---
