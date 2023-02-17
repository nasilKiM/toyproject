import { useEffect, useState } from "react";
import styled from "styled-components";
import { flexCenter, flexAlignCenter } from "../../../styles/common";
import moment from "moment";

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
  const [isBtnVisible, setIsBtnVisible] = useState("hidden");

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

  // 날짜 파싱

  const myDate = moment(item.createdAt);
  //const myDate = String(diary.createdAt).split(' ').splice(0, 4).join(' ');

  const today = moment("2023-01-31 23:59:59", "YYYY-MM-DD hh:mm:ss");
  //today에는 오늘 날짜가 moment 객체로 저장

  const diff = today.diff(myDate, "days");
  //diff에는 오늘 날짜와 myDate의 차이가 일 단위로 저장됩니다.

  /*
moment() : 날짜를 비교하고 원하는 포맷으로 변환할 수 있음.
diff에는 오늘 날짜와 myDate의 차이가 일 단위로 저장됩니다.
*/
  let dateString;

  // diff===0 만 있으면 시간 차이가 얼마 안날때 23시55분이나 00시15분때도 같은 날로 인식. day()로 요일정보까지 비교후 같은지 확인.
  console.log("===================> " + myDate);
  if (diff === 0 && myDate.day() === today.day()) {
    dateString = "3시간 전";
  } else if (diff > 2) {
    dateString = myDate.format("YYYY-MM-DD");
  } else if (diff > 0) {
    // console.log(diff);
    dateString = `${diff}일 전`;
  } else {
    dateString = myDate.format("YYYY-MM-DD");
  }

  // 버튼
  const handleEdit = () => {
    if (isEdit === true) {
      setIsEdit(false);
      onEditCom();
    } else {
      setIsEdit(true);
    }
  };

  const handleCancelEdit = () => {
    setIsEdit(false);
  };

  // 내가작성한 코멘트만 수정/삭제 버튼 보이기

  useEffect(() => {
    console.log("=====" + item);
    const newItem = [...item];
    if (newItem.Comments.length > 0 && newItem.Comments.myComment === "Y") {
      setIsBtnVisible("visible");
    }
    return;
  }, [comList]);

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
          // 댓글랜덤으로 불러오는 위치
          <S.Wrapper>
            <S.RandomCom>
              <span style={{ width: "20%" }}>{item.User.nick_name}</span>
              <span>{dateString}</span>
              <S.Buttons style={{ visibility: { isBtnVisible } }}>
                <button onClick={handleEdit}>수정</button>
                {isEdit && <button onClick={handleCancelEdit}>취소</button>}
                {!isEdit && <button onClick={onDeleteCom}>삭제</button>}
              </S.Buttons>
              }
            </S.RandomCom>
            <S.RandomCom>
              <img
                src={item.User.profile_img}
                alt="profile"
                style={{ width: "100px", heigh: "100px", borderRadius: "50%" }}
              ></img>
              <span style={{ width: "80%" }}>{item.content}</span>
            </S.RandomCom>
          </S.Wrapper>
        )}
      </S.CommentItem>
    </>
  );
}

export default CommentList;

const CommentItem = styled.div`
  width: 100%;
  /* height: 70px; */
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;
  border-bottom: 1px solid gray;

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
