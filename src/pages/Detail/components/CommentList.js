import { useState } from "react";
import styled from "styled-components";
import { flexCenter, flexAlignCenter } from "../../../styles/common";
import dayjs from "dayjs";
import { EDIT_COMMENT } from "../../../store/diaryCom";
import { useDispatch } from "react-redux";

function CommentList({ item, id, deleteComment }) {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(item.content);

  const created = dayjs(item.createdAt);
  const today = dayjs("2023-01-31 23:59", "YYYY-MM-DD HH:mm");
  const dayDiff = today.diff(created, "d");

  // 재사용여지가있는거 util로 빼자
  let DATE;
  if (dayDiff === 0 && created.get("d") === today.get("d")) DATE = "3시간 전";
  if (dayDiff >= 1) DATE = `${dayDiff}일 전`;
  if (dayDiff >= 4) DATE = created.format("YYYY-MM-DD");

  const handleDeleteBtn = () => {
    if (isEdit) {
      setIsEdit(false);
      return;
    }
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      const commentId = item.id;
      deleteComment(id, commentId);
    }
  };

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
    if (isEdit) {
      dispatch(
        EDIT_COMMENT({
          id: id,
          commentId: item.id,
          content: inputValue,
        })
      );
    }
  };

  return (
    <>
      <S.CommentItem>
        <S.Wrapper>
          <S.RandomCom>
            <span style={{ width: "20%" }}>{item.User.nick_name}</span>
            <span>{DATE}</span>
            {item.myComment === "Y" && (
              <S.Buttons>
                <button onClick={handleEdit}>{isEdit ? "저장" : "수정"}</button>
                <button onClick={handleDeleteBtn}>{isEdit ? "취소" : "삭제"}</button>
              </S.Buttons>
            )}
          </S.RandomCom>
          <S.RandomCom>
            <img
              src={item.User.profile_img}
              alt="profile"
              style={{ width: "100px", heigh: "100px", borderRadius: "50%" }}
            ></img>
            {isEdit ? (
              <textarea
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
                style={{ width: "100%" }}
              ></textarea>
            ) : (
              <span style={{ width: "80%" }}>{item.content}</span>
            )}
          </S.RandomCom>
        </S.Wrapper>
      </S.CommentItem>
    </>
  );
}

export default CommentList;

const CommentItem = styled.div`
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;
  border-bottom: 1px solid gray;
  margin: 10px 0 50px 0;
  ${flexAlignCenter}
  ${flexCenter}
`;

const RandomCom = styled.div`
  padding: 10px 30px;
  width: 100%;
  ${flexCenter}
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 100%;
  ${flexCenter}
  flex-direction: column;
`;

const Buttons = styled.div`
  width: 15%;
  ${flexCenter}
  justify-content: space-between;
  right: 0;
  & button {
    padding: 3px 15px;
  }
`;

const S = {
  CommentItem,
  RandomCom,
  Wrapper,
  Buttons,
};
