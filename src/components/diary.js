// 다이어리(재사용)
import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../styles/common";
import theme from "../styles/theme";

function Diary({ title, date, userName, content }) {
  return (
    <S.Wrapper>
      <S.Container>
        <div>
          <S.Date>{date}</S.Date>
          <S.UserName>{userName}</S.UserName>
        </div>
        <S.Title>
          <p>{title}</p>
        </S.Title>
        <S.DiaryContent>{content}</S.DiaryContent>
      </S.Container>
    </S.Wrapper>
  );
}
export default Diary;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh-50px);
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Container = styled.div`
  width: 350px;
  height: 350px;
  padding: 10px;
  background-color: white;
  border-radius: 15px;
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

const DiaryContent = styled.div`
  width: 300px;
  height: 100%;
  background-color: yellow;
`;

const S = {
  Wrapper,
  Container,
  Title,
  Date,
  UserName,
  DiaryContent,
};
