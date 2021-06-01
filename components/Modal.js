import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const ModalPopup = ({ open, setOpen }) => {
  return (
    <Modal
      className="flex items-center justify-center"
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className="bg-white p-5 rounded-xl shadow-md w-[45%]">
          <h1 className="text-2xl font-bold">Code Copied</h1>
          <p className="text-[#555]">
            You have copied your twitter intent code to your clipboard. You can
            now start using it in your site. Here is quick example ✌️
          </p>
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalPopup;
