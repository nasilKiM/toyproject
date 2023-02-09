import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { flexCenter, flexAlignCenter } from "../../../styles/common";
import CommentBoard from "./CommentBoard";

function CommentInput(props) {
  const [inputValue, setInputValue] = useState(""); //input창 빈문자열로 시작
  const [comList, setCommentList] = useState(JSON.parse(localStorage.getItem("comList") || "[]"));
  const addItem = (e) => {
    setCommentList([...comList, inputValue]); //기존유지+ 새로운 input value
    setInputValue(""); // 바꾸고싶은 값만 넣기
  };
  useEffect(() => {
    localStorage.setItem("comList", JSON.stringify(comList)); // 웹브라우저에 저장하기(첫번째는 key, 두번째는 값(value))
  }, [comList]); // comList 값이 바뀔때마다 localstorage에 값을 저장,삭제,수정한다.
  // f12 -> application -> local storage -> localhost에서 확인가능
  // JSON.stringfy -> 문자화시키는거 + JSON.parse는 배열화하는거

  return (
    <>
      <S.list>
        <CommentBoard comList={comList} setCommentList={setCommentList} />
      </S.list>
      <S.ComWrapper>
        <input
          value={inputValue}
          // 버튼을 클릭했을 때, input 의 value 값을 비운다.}
          type="text"
          placeholder="착한 댓글을 달아주세요"
          onChange={(event) => setInputValue(event.target.value)}
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
    /* ${flexCenter} */
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
  max-width: 1400px;
  margin: 15px;
  box-sizing: border-box;

  ${flexCenter};
`;

const S = {
  ComWrapper,
  btn,
  list,
};
