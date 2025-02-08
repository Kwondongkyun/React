// Date 객체를 문자열로 변환하는 함수
export const getStringedDate = (targetDate) => {
  // 날짜 -> YYYY-MM-DD 형식으로 변경
  // - createdDate에 저장된 데이트 객체(new Date())를 input 태그에 value 속성으로 넣을 시 input 태그는 Date 객체로 설정된 값은 이해를 못하기 때문이다.
  // -> Date 객체를 문자열로 변환을 해서 value 속성으로 넣어줘야 한다.
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  // MM, DD 형식 맞추기(Ex. 09월 09일)
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};
