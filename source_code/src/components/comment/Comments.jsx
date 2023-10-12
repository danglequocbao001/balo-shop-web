import { Button, Input, Rate } from "antd";
import { useFetchAllCommentByProduct } from "../../hooks/useComment";
import CommentItem from "./CommentItem";
import { useState } from "react";
import { useFetchCurrentCustomer } from "../../hooks/useKhachHang";
import COLOR_CONSTANTS from "../../constants/colors";
import { toast } from "react-toastify";
import { commentApi } from "../../api";
import { TOKEN_LOCAL_STORAGE } from "../../api/constants";

const { TextArea } = Input;

const Comments = (param) => {
  const ma_mh = param.ma_mh;

  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(0);

  const { comments } = useFetchAllCommentByProduct(ma_mh);

  const { customer } = useFetchCurrentCustomer();

  const onAddComment = async () => {
    if (comment.trim() === "") {
      toast.warn("Không được bỏ trống bình luận!");
    } else {
      const req = {
        ma_kh: customer.ma_kh,
        ma_mh: ma_mh,
        noi_dung: comment.trim(),
        diem_danh_gia: rate,
      };

      await commentApi
        .create(req)
        .then(() => {
          toast.success("Thêm bình luận thành công!");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        })
        .catch((err) => {
          toast.error(err);
        });
    }
  };

  const addComent = () => {
    return (
      <div
        style={{
          padding: "20px 0",
        }}
      >
        {!comments.is_can_comment && (
          <p
            style={{
              color: COLOR_CONSTANTS.WARNING,
              fontWeight: "bold",
            }}
          >
            {"*Bạn cần phải mua sản phẩm trước khi có thể bình luận!"}
          </p>
        )}
        <Rate
          defaultValue={0}
          value={rate}
          style={{ marginBottom: 10 }}
          onChange={(value) => {
            setRate(value);
          }}
          disabled={!comments.is_can_comment}
        />
        <TextArea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Nhập bình luận"
          autoSize={{ minRows: 3, maxRows: 5 }}
          style={{
            padding: "10px 15px",
            fontSize: 16,
          }}
          disabled={!comments.is_can_comment}
        />
        <div
          style={{
            display: "flex",
          }}
        >
          <Button
            style={{
              marginLeft: "auto",
              marginTop: 10,
              height: 40,
              backgroundColor: COLOR_CONSTANTS.BLACK,
              color: COLOR_CONSTANTS.WHITE,
              fontWeight: "bold",
              border: "none",
              opacity: comments.is_can_comment ? 1 : 0.3,
            }}
            onClick={() => onAddComment()}
            disabled={!comments.is_can_comment}
          >
            Thêm bình luận
          </Button>
        </div>
      </div>
    );
  };

  const showComments = () => {
    return (
      <div
        style={{
          marginTop: 20,
        }}
      >
        {comments.data.map((comment) => (
          <CommentItem
            key={comment.ma_binh_luan}
            comment={comment}
            customer={customer}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <h3>Bình luận</h3>
      {localStorage.getItem(TOKEN_LOCAL_STORAGE) !== null &&
        comments &&
        addComent()}
      {comments.data && showComments()}
    </>
  );
};

export default Comments;
