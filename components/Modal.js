import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const ModalPopup = ({ open, setOpen }) => {
  const code =
    '<a href="https://twitter.com/intent/tweet?text=Hello%20there%20%F0%9F%91%8B%0A%0ACheck%20out%20https://tweeter.now.sh%20by%20@SavioMartin7,%20sharing%20to%20twitter%20made%20easy%20%F0%9F%91%80%0A%0A%23producthunt%20%23DEVCommunity">\nShare On Twitter\n</a>';
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
          <p className="text-[#555] mb-3">
            You have copied your twitter intent code to your clipboard. You can
            now start using it in your site. Here is quick example ✌️
          </p>
          <div className="bg-[#1F0E27] text-white p-3 rounded-md break-words Fira font-medium">
            {code}
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalPopup;
