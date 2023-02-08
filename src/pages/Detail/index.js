// 작성게시글 상세페이지 (클릭한 게시물이랑 상관없이?)

import { useLocation, useParams } from "react-router-dom";
import { MockPost } from "../../__mocks__/post";
import Button from "./components/Button";
import DetailCard from "./components/DetailCard";

function DetailPage() {
  const DetailPost = MockPost(1);
  return (
    <>
      {DetailPost.map((diary) => {
        return <DetailCard diary={diary} />;
      })}
      <Button />;
    </>
  );
}
export default DetailPage;
