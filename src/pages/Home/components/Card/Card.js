// 다이어리(재사용)
import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../../../styles/common";
import theme from "../../../../styles/theme";

function Card({ diary }) {
  return (
    <S.Wrapper>
      <S.Container>
        <div>
          <S.Date>{String(diary.createdAt)}</S.Date>
          <S.UserName>
            {/* {diary.User.id} */}
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
export default Card;

const Wrapper = styled.div`
  width: 30%;
  height: calc(100vh-50px);
  padding-top: 50px;
  padding-bottom: 50px;
  ${flexCenter}
  ${flexAlignCenter}
`;

const Container = styled.div`
  width: 400px;
  height: 450px;
  padding: 10px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 1.5cm;
  ${flexCenter}
  ${flexAlignCenter}
  flex-direction: column;
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const Title = styled.div`
  width: fit-content;
  height: 50px;
  max-width: 350px;
  color: ${theme.PALETTE.black};
  font-size: ${theme.FONT_SIZE.medium};
  font-weight: ${theme.FONT_WEIGHT.bold};
  ${flexCenter}
  border-top: 2px solid black;
`;

const Date = styled.div`
  width: fit-content;
  max-width: 100px;
  font-size: ${theme.FONT_SIZE.small};
`;

const UserName = styled.div`
  width: fit-content;
  max-width: 100px;
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
