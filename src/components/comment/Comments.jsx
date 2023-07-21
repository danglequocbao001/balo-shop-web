import { useFetchAllCommentByProduct } from "../../hooks/useComment";
import CommentItem from "./CommentItem";

const Comments = (param) => {
  const ma_mh = param.ma_mh;
  const { comments } = useFetchAllCommentByProduct(ma_mh);

  const showComments = () => {
    return (
      <>
        {comments.map((comment) => (
          <CommentItem comment={comment} />
        ))}
      </>
    );
  };

  return (
    <>
      <h3>Bình luận</h3>
      {showComments()}
    </>
  );
};

export default Comments;
