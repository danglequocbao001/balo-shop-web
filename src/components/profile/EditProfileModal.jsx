import React, { useState } from "react";
import { Button, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useFetchCurrentCustomer } from "../../hooks/useKhachHang";

const EditProfileModal = () => {
  const { customer } = useFetchCurrentCustomer();
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Button type="text" className="mt-1" onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={faPencil} />
      </Button>

      <Modal
        title="Vertically centered modal dialog"
        centered
        open={isOpen}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};

export default EditProfileModal;
