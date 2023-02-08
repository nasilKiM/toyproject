// 일기 상세페이지

import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "styles/common";
import theme from "styles/theme";

function DetailCard({ diary }) {
  return (
    <S.Wrapper>
      <S.Container>
        <div>
          <S.Date>{String(diary.createdAt)}</S.Date>
          <S.UserName>
            {diary.User.id}
            {diary.User.nick_name}
            <img src={diary.User.profile_img} />
          </S.UserName>
        </div>
        <S.Title>
          <p>{diary.id}</p>
        </S.Title>
        <S.DatailContent>{diary.content}</S.DatailContent>
      </S.Container>
    </S.Wrapper>
  );
}
export default DetailCard;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh-50px);
  padding-top: 50px;
  padding-bottom: 50px;
  ${flexCenter}
`;

const Container = styled.div`
  width: 700px;
  max-width: 1000px;
  height: 350px;
  padding: 10px;
  background-color: white;
  border-radius: 15px;
  ${flexCenter}
  flex-direction: column;
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    ${flexAlignCenter}
  }
`;

const Title = styled.div`
  width: 100%;
  height: 50px;
  color: ${theme.PALETTE.black};
  font-size: ${theme.FONT_SIZE.medium};
  font-weight: ${theme.FONT_WEIGHT.bold};
  ${flexCenter}
  border-top: 2px solid black;
`;

const Date = styled.div`
  width: fit-content;
  font-size: ${theme.FONT_SIZE.small};
`;

const UserName = styled.div`
  width: fit-content;
  font-size: ${theme.FONT_SIZE.small};
`;

const DatailContent = styled.div`
  width: 300px;
  height: 100%;
`;

const S = {
  Wrapper,
  Container,
  Title,
  Date,
  UserName,
  DatailContent,
};
