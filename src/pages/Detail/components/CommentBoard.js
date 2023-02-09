import React from "react";
import CommentList from "./CommentList";

function CommentBoard({ comList, setCommentList }) {
  console.log("CommentBoard", comList);

  return (
    <div>
      <h3>댓글리스트</h3>
      {comList &&
        comList.map((item) => {
          return <CommentList item={item} comList={comList} setCommentList={setCommentList} />;
        })}
    </div>
  );
}

export default CommentBoard;
