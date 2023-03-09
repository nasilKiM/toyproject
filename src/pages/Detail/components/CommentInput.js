import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { flexCenter, flexAlignCenter } from "../../../styles/common";
import CommentBoard from "./CommentBoard";
import { useDispatch } from "react-redux";
import { ADD_COMMENT } from "../../../store/diaryCom";

function CommentInput({ commentList, id, deleteComment }) {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const addItem = () => {
    if (!inputValue) return alert("글을 작성해주세요");
    dispatch(ADD_COMMENT({ id, content: inputValue }));
    setInputValue("");
  };
  console.log("댓글추가", id);

  return (
    <>
      <S.list>
        <CommentBoard deleteComment={deleteComment} comList={commentList} id={id} />
      </S.list>
      <S.ComWrapper>
        <input
          value={inputValue}
          type="text"
          placeholder="착한 댓글을 달아주세요"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <S.btn onClick={addItem}>저장</S.btn>
      </S.ComWrapper>
    </>
  );
}

export default CommentInput;

const ComWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  ${flexAlignCenter}
  ${flexCenter}
  & > input {
    width: 800px;
    height: 9rem;
    border: 1px solid #f9d72f;
    border-radius: 10px;
  }
`;

const btn = styled.div`
  width: 70px;
  max-width: 150px;
  height: 5rem;
  background-color: #f9d72f;
  color: black;
  border-radius: 15px;
  ${flexCenter}
  margin: 10px;
`;

const list = styled.div`
  width: 100%;
  box-sizing: border-box;
  ${flexAlignCenter};
`;

const S = {
  ComWrapper,
  btn,
  list,
};
