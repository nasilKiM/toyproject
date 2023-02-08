import React from "react";
import CommentList from "./CommentList";

function CommentBoard(props) {
  console.log("CommentBoard", props.comList);
  return (
    <div>
      <h3>댓글리스트</h3>
      {props.comList.map((item) => (
        <CommentList item={item} />
      ))}
    </div>
  );
}

export default CommentBoard;
