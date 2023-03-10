import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_COMMENT, EDIT_COMMENT } from "../../store/diaryCom";

import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../styles/common";
import theme from "../../styles/theme";

import CommentInput from "./components/CommentInput";

function DetailPage() {
  const { nick_name } = useParams();
  // const { state } = useLocation();  state가 copy + 객체형태였다
  const diaryPost = useSelector((state) => state.diaryPost);
  //selector에서 직접데이터를 가지고오는 역할(copy가아니라)
  const post = diaryPost.find((post) => post.User.nick_name === nick_name);
  const dispatch = useDispatch();

  const editComment = (id, commentId, editComment) => {
    dispatch(EDIT_COMMENT({ id, commentId, editComment }));
  };

  const deleteComment = (id, commentId) => {
    dispatch(DELETE_COMMENT({ id, commentId }));
  };

  return (
    <S.Wrapper>
      <S.Container>
        <div>
          <S.UserName>{post.User.nick_name}</S.UserName>
          <S.UserName>{post.User.full_name}</S.UserName>
          <img
            src={post.User.profile_img}
            style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          />
        </div>
        <S.Date>{String(post.createdAt)}</S.Date>
        <S.Title>
          <p>{post.title}</p>
        </S.Title>
        <S.DetailContent>
          {post.detailContent}
          <div>
            친구들과 주변 선생님들에게 "오늘의 일기"를 소개해 주세요!
            <p>이용자가 많아질수록 일기주제가 풍부해집니다!</p>
          </div>
        </S.DetailContent>
      </S.Container>
      <CommentInput
        commentList={post.Comments}
        id={post.id}
        editComment={editComment}
        deleteComment={deleteComment}
      />
    </S.Wrapper>
  );
}

export default DetailPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: "#F3F3F3";
  padding: 100px 0;
`;

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  background-color: white;
  border: 1px solid darkgray;
  border-radius: 15px;
  ${flexCenter};
  ${flexAlignCenter};
  flex-direction: column;
  padding: 50px;
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const Title = styled.div`
  width: 300px;
  color: ${theme.PALETTE.black};
  font-size: ${theme.FONT_SIZE.large};
  font-weight: ${theme.FONT_WEIGHT.bold};
  ${flexCenter}
  border-top: 2px solid black;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-top: 20px;
`;

const Date = styled.div`
  width: 100%;
  /* max-width: 100px; */
  font-size: ${theme.FONT_SIZE.large};
  margin-top: 10px;
  padding-bottom: 20px;
`;

const UserName = styled.div`
  width: fit-content;
  max-width: 100px;
  font-size: ${theme.FONT_SIZE.extra};
  font-weight: ${theme.FONT_WEIGHT.bold};
`;

const DetailContent = styled.div`
  line-height: 300%;
  ${flexCenter};
  flex-direction: column;
  & div {
    background-color: #edd200;
    width: 800px;
    margin: 50px 0;
    padding: 50px;
    border-radius: 30px;
  }
`;

const S = {
  Wrapper,
  Container,
  Title,
  Date,
  UserName,
  DetailContent,
};
