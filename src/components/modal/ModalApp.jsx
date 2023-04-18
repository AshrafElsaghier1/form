import React, { useState } from "react";

import Modal from "./Modal";

const ModalApp = () => {
  const [modalShow, setModalShow] = useState(false);

  const submitHandler = () => {
    console.log(" OK.. ! ");
    setModalShow(false);
  };
  const cancelHandler = () => {
    console.log(" cancel .. ! ");
    setModalShow(false);
  };

  return (
    <div className="container mx-auto">
      <button
        onClick={() => setModalShow(!modalShow)}
        className="bg-slate-800 text-white p-2 rounded-md block mx-auto my-3 "
      >
        {modalShow ? "Hide modal" : " Show Modal"}
      </button>
      {
        <Modal
          closeModal={setModalShow}
          visible={modalShow}
          onOk={() => submitHandler()}
          onCancel={() => cancelHandler()}
          okText={"Ok"}
          cancelText={"Cancel"}
          closeIcon={"X"}
          removeAction={["", "", ""]}
          title="Pop up title"
          cancelBtnClassName="cancel-button"
          okBtnClassName="ok-button"
          isBlured={true}
        >
          modal Text is dsd Lorem ipsum dolor sit amet consectetur adipisicing
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nulla,
          nesciunt hic, delectus culpa sapiente nihil ex nostrum, obcaecati eum
          dolores recusandae porro exercitationem. Nisi distinctio architecto
          quisquam suscipit repudiandae.
        </Modal>
      }
    </div>
  );
};

export default ModalApp;
