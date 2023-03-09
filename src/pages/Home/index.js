import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Card from "./components/Card/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { INFINITE_SCROLL } from "../../store/diaryCom";

function HomePage() {
  const diaryPost = useSelector((state) => state.diaryPost);
  const dispatch = useDispatch();

  return (
    <InfiniteScroll
      dataLength={diaryPost.length}
      next={() => {
        setTimeout(() => {
          dispatch(INFINITE_SCROLL());
        }, 2000);
      }}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      refreshFunction={() => {}}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
      }
      releaseToRefreshContent={<h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>}
    >
      <Container>
        {diaryPost
          .sort((a, b) => {
            return b.createdAt.getTime() - a.createdAt.getTime();
          })
          .map((diary) => {
            return <Card diary={diary} />;
          })}
      </Container>
    </InfiniteScroll>
  );
}

export default HomePage;

const Container = styled.div`
  /* margin: 0 100px; */
  padding: 100px;
  display: flex;
  border: 1px solid red;
  flex-wrap: wrap;
  background-color: "#F3F3F3";
`;
