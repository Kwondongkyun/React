import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const curDiaryItem = useDiary(params.id);

  // 삭제 버튼이 클릭되었을 때 동작할 이벤트 핸들러 함수
  const onClickDelete = () => {
    if (
      window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요 !")
    ) {
      // 일기 삭제 로직
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  // 수정 완료 버튼 클릭 시
  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      // 뒤로가기 방지
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={
          <Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />
        }
        rightChild={
          <Button
            onClick={onClickDelete}
            text={"삭제하기"}
            type={"NEGATIVE"}
          />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};
export default Edit;
