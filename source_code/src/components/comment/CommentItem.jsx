import { Rate } from "antd";
import { MDBCardImage } from "mdb-react-ui-kit";
import COLOR_CONSTANTS from "../../constants/colors";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { commentApi } from "../../api";
import { toast } from "react-toastify";

const CommentItem = (param) => {
  const comment = param.comment;
  const customer = param.customer;

  const isCurrentCustomer = comment.ma_kh === (customer && customer.ma_kh);

  const deleteComment = async () => {
    await commentApi
      .delete(comment.ma_binh_luan)
      .then(() => {
        toast.success("Xóa bình luận thành công!");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const items = [
    {
      label: (
        <p
          style={{
            color: COLOR_CONSTANTS.ERROR,
          }}
          onClick={() => deleteComment()}
        >
          Xóa bình luận
        </p>
      ),
      key: "0",
    },
  ];

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
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
              isCurrentCustomer ? "(Bạn)" : ""
            }`}</p>
            <Rate value={comment.diem_danh_gia} disabled />
          </div>
        </div>
        {isCurrentCustomer && (
          <div>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <p
                onClick={(e) => e.preventDefault()}
                style={{
                  cursor: "pointer",
                  marginTop: -10,
                  marginRight: -5,
                }}
              >
                <DownOutlined />
              </p>
            </Dropdown>
          </div>
        )}
      </div>
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
