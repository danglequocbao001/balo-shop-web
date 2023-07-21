import { Button, Input, Rate } from "antd";
import { useFetchAllCommentByProduct } from "../../hooks/useComment";
import CommentItem from "./CommentItem";
import { useState } from "react";
import { useFetchCurrentCustomer } from "../../hooks/useKhachHang";
import COLOR_CONSTANTS from "../../constants/colors";
import { toast } from "react-toastify";

const { TextArea } = Input;

const Comments = (param) => {
  const ma_mh = param.ma_mh;

  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(0);

  const { comments } = useFetchAllCommentByProduct(ma_mh);
  const { customer } = useFetchCurrentCustomer();

  const onAddComment = () => {
    if (comment === "") {
      toast.warn("Không được bỏ trống bình luận!");
    } else {
      const req = {
        ma_kh: customer.ma_kh,
        ma_mh: ma_mh,
        noi_dung: comment,
        diem_danh_gia: rate,
      };

      console.log(req);
    }
  };

  const addComent = () => {
    return (
      <div
        style={{
          padding: "20px 0",
        }}
      >
        <Rate
          defaultValue={0}
          value={rate}
          style={{ marginBottom: 10 }}
          onChange={(value) => {
            setRate(value);
          }}
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
            }}
            onClick={() => onAddComment()}
          >
            Thêm bình luận
          </Button>
        </div>
      </div>
    );
  };

  const showComments = () => {
    return (
      <>
        {comments.map((comment) => (
          <CommentItem
            key={comment.ma_binh_luan}
            comment={comment}
            customer={customer}
          />
        ))}
      </>
    );
  };

  return (
    <>
      <h3>Bình luận</h3>
      {addComent()}
      {showComments()}
    </>
  );
};

export default Comments;
