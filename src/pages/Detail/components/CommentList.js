import { useState } from "react";
import styled from "styled-components";
import { flexCenter, flexAlignCenter } from "../../../styles/common";

function CommentList({ item, comList, setCommentList }) {
  //댓글삭제
  const onDeleteCom = () => {
    const newComList = comList.filter((com) => {
      return com !== item;
    });
    setCommentList(newComList);
  };

  // 삭제버튼을 누르면 일치하는 저장된 값을 비운다.
  // comList에 값을 하나씩 꺼내서 비교하고 일치하는 값을 잘라준다.
  // 새로운 배열도 넣어줬고..
  // 삭제 버튼을 클릭했을 때, onDeleteCom을 실행

  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(item);

  //댓글수정 값 저장
  const onEditCom = () => {
    const newComList = comList.map((com) => {
      if (com === item) {
        return inputValue;
      } else {
        return com;
      }
    });
    setCommentList(newComList);
  };

  //삼항연산자를 활용해서 isEdit === true일때 false일때 버튼,input의 역할지정
  return (
    <>
      <S.CommentItem>
        {isEdit === true ? (
          <input
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
        ) : (
          <>
            <img src={item.User.profile_img} alt="profile"></img>
            <span>{item.content}</span>
          </>
        )}
        <button
          onClick={() => {
            if (isEdit === true) {
              setIsEdit(false);
              onEditCom();
            } else {
              setIsEdit(true);
            }
          }}
        >
          수정
        </button>
        {isEdit === true ? (
          <button
            onClick={() => {
              setIsEdit(false);
            }}
          >
            취소{" "}
          </button>
        ) : (
          <button onClick={onDeleteCom}>삭제</button>
        )}
      </S.CommentItem>
    </>
  );
}

export default CommentList;

const CommentItem = styled.div`
  width: 700px;
  height: 50px;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;
  border-bottom: 1px solid gray;
  ${flexAlignCenter}
  ${flexCenter}
`;

const S = {
  CommentItem,
};
