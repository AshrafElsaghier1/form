import React from "react";

const Modal = ({
  children,
  visible,
  onCancel,
  okText,
  cancelText,
  onOk,
  removeAction,
  closeIcon,
  title,
  cancelBtnClassName,
  okBtnClassName,
  isBlured,
}) => {
  return (
    <>
      {visible && (
        <>
          <style jsx="true">
            {`
              .modal {
                backdrop-filter: ${visible && isBlured && "blur(2px)"};
                position: fixed;
                inset: 0;
                background-color: #c1b2b257;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 999;
              }
              .modal-content {
                width: 350px;
                background-color: #fff;
                border-radius: 8px;
                padding: 10px 15px;

                box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
              }
              .header {
                border-bottom: 1px solid #ccc;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                position: sticky;
                top: 0px;
                transition: 0.5s ease-in-out;
                background: #fff;
              }
              .title {
                font-size: 1.2rem;
                margin-bottom: 0;
                font-weight: bold;
              }
              .close-btn-icon {
                width: 30px;
                height: 30px;
                color: #fff;
                border-radius: 5px;
                background-color: #a7727d;
              }
              .btn {
                padding: 3px 15px;
                border-radius: 8px;
                color: #fff;
              }
              .ok-btn {
                background-color: #333;
              }
              .cancel-btn {
                background-color: #a7727d;
              }

              .btns-container {
                display: flex;
                gap: 10px;
                margin: 10px 0;
              }

              .modal-content-inner {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-direction: column;
                margin-top: 15px;
              }
            `}
          </style>

          <div className={`modal`} onClick={onCancel}>
            <div
              className={` modal-content`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="header">
                <h3 className="title"> {title} </h3>

                {!removeAction.includes("showCloseIcon") && (
                  <button className="  close-btn-icon " onClick={onCancel}>
                    {closeIcon}
                  </button>
                )}
              </div>

              <div className="modal-content-inner">
                {children}

                <div className="btns-container modal-footer  ">
                  {!removeAction.includes("cancel") && (
                    <button
                      className={`btn cancel-btn ${cancelBtnClassName}`}
                      onClick={onCancel}
                    >
                      {cancelText}
                    </button>
                  )}

                  {!removeAction.includes("ok") && (
                    <button
                      className={`btn ${okBtnClassName}   ok-btn `}
                      onClick={onOk}
                    >
                      {okText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
