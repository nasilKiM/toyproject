import { faker } from "@faker-js/faker";
import shortid from "shortid";
import { createAction } from "../utils/createAction";
import { MockPost } from "../__mocks__/post";

const initialState = MockPost(20);

export const ADD_COMMENT = createAction("ADD_COMMENT");
export const DELETE_COMMENT = createAction("DELETE_COMMENT");
export const EDIT_COMMENT = createAction("EDIT_COMMENT");
export const INFINITE_SCROLL = createAction("INFINITE_SCROLL");

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INFINITE_SCROLL":
      const newState = [...state, ...MockPost(10)];
      return newState;
    case "ADD_COMMENT":
      const newDiary = [...state];
      const diaryIdx = newDiary.findIndex((com) => {
        return com.id === action.payload.id;
      });
      const newUser = {
        id: shortid.generate(),
        User: {
          id: shortid.generate(),
          nick_name: "작성자",
          profile_img: faker.image.avatar(),
        },
        content: action.payload.content,
        createdAt: "2023-01-31",
        myComment: "Y",
      };
      newDiary[diaryIdx].Comments.push(newUser);
      return newDiary;
    case "DELETE_COMMENT":
      const deleteComment = [...state];
      const deleteIdx = deleteComment.findIndex((com) => com.id === action.payload.id);
      console.log("------>> ", deleteComment, deleteIdx);
      const commentDeleted = deleteComment[deleteIdx].Comments.filter(
        (comment) => comment.id !== action.payload.commentId
      );
      console.log("여기!", commentDeleted);
      deleteComment[deleteIdx].Comments = commentDeleted;
      return deleteComment;
    case "EDIT_COMMENT":
      const editComment = [...state];
      const editIndex = editComment.findIndex((com) => com.id === action.payload.id);
      console.log("EDIT COMMENT --->", action.payload, editIndex);
      const findUpdateComment = editComment[editIndex].Comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            content: action.payload.content,
          };
        }
        return comment;
      });
      editComment[editIndex].Comments = findUpdateComment;
      return editComment;
    default:
      return state;
  }
};

export default reducer;
