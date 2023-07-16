import React, { useState } from "react";
import { Button, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const input = {
  marginTop: 10,
};

const EditProfileModal = (param) => {
  const DEFAULT_VALUES = {
    email_kh: param.customer.email_kh,
    ho_kh: param.customer.ho_kh,
    ten_kh: param.customer.ten_kh,
    dia_chi: param.customer.dia_chi,
    sdt: param.customer.sdt,
    so_id: param.customer.so_id,
  };

  const { register, handleSubmit } = useForm({
    defaultValues: DEFAULT_VALUES,
  });

  const [isOpen, setOpen] = useState(false);

  const onUpdate = async (param) => {
    toast.success("Đang thực hiện...")
    console.log(param);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
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
        <form
          className="EditProfileModal"
          onSubmit={handleSubmit(onUpdate)}
          style={{
            display: "inline-grid",
          }}
        >
          <input
            type="email"
            required
            {...register("email_kh")}
            name="email_kh"
            disabled
            style={input}
          />
          <input style={input} type="text" required {...register("ho_kh")} />
          <input style={input} type="text" required {...register("ten_kh")} />
          <input style={input} type="text" required {...register("dia_chi")} />
          <input style={input} type="tel" required {...register("sdt")} />
          <input style={input} type="number" required {...register("so_id")} />
          <input style={input} type={"submit"} />
        </form>
      </Modal>
    </>
  );
};

export default EditProfileModal;
