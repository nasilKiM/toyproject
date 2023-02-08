// 전체 다이어리 표시하는 페이지
import Card from "./components/Card/Card";
import { MockPost } from "../../__mocks__/post";
import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "styles/common";

function HomePage() {
  const post = MockPost(20);
  return (
    <>
      <S.cardFlex>
        {post.map((diary) => {
          return <Card diary={diary} />;
        })}
      </S.cardFlex>

      {/* <div>
        {datas.map((data) => {
          return (
            <Card
              title={data.title}
              date={data.date}
              userName={data.userName}
              content={data.content}
            />
          );
        })}
      </div> */}
    </>
  );
}
export default HomePage;

const cardFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  ${flexCenter}
  ${flexAlignCenter}
`;

const S = {
  cardFlex,
};
