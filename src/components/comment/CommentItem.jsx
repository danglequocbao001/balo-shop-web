import { Rate } from "antd";
import { MDBCardImage } from "mdb-react-ui-kit";
import COLOR_CONSTANTS from "../../constants/colors";

const CommentItem = (param) => {
  const comment = param.comment;
  const customer = param.customer;

  return (
    <div
      style={{
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        border: `1px solid ${COLOR_CONSTANTS.GRAY}`,
        paddingBottom: 5,
      }}
    >
      <>
        {customer && (
          <div
            style={{
              display: "flex",
            }}
          >
            <div>
              <MDBCardImage
                src="https://toppng.com/uploads/preview/icon-customers-customer-icon-11563506628qpu3czucoo.png"
                alt="avatar"
                className="rounded-circle"
                style={{ width: "50px" }}
                fluid
              />
            </div>
            <div
              style={{
                marginLeft: 10,
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: -3,
                }}
              >{`${comment.khach_hang.ho_kh} ${comment.khach_hang.ten_kh} ${
                comment.ma_kh === customer.ma_kh ? "(Bạn)" : ""
              }`}</p>
              <Rate value={comment.diem_danh_gia} disabled />
            </div>
          </div>
        )}
      </>
      <div
        style={{
          marginLeft: 50,
          padding: 10,
          paddingBottom: 0,
        }}
      >
        <p>{`"${comment.noi_dung}"`}</p>
      </div>
    </div>
  );
};

export default CommentItem;
