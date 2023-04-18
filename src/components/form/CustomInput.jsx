import { useRef, useState } from "react";

const CustomInput = (props) => {
  const inputRef = useRef();
  const [formStatus, setFormStatus] = useState({
    isError: false,
    isValid: false,
    message: "",
  });

  const { isError, isValid, message } = formStatus;

  const {
    errorMsg,
    label,
    isInput,
    formInputs,
    onSubmit,
    pattern,
    setFormData,
    tagName,
    ...options
  } = props;

  const onBlur = (e) => {
    if (inputRef.current.value) {
      inputRef.current.nextElementSibling.classList.add("label");
    } else {
      inputRef.current.nextElementSibling.classList.remove("label");
    }
    if (e.target.value === "") {
      setFormStatus({
        isError: true,
        isValid: false,
        message: "field is required",
      });
    }
  };

  const changeHandler = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });

    formInputs.forEach((item) => {
      if (
        item.name === e.target.name &&
        e.target.value.length > 0 &&
        item.pattern
      ) {
        if (item.pattern.test(e.target.value) && e.target.value !== "") {
          setFormStatus({
            isValid: true,
            isError: false,
          });
        } else {
          setFormStatus({
            isError: true,
            isValid: false,
          });
        }
      }
    });
    if (e.target.tagName === "SELECT") {
      if (e.target.value.length > 0) {
        setFormStatus({
          isError: false,
          isValid: true,
        });
      } else {
        setFormStatus({
          isError: true,
          isValid: false,
        });
      }
    }
  };

  return (
    <>
      <style jsx="true">
        {`
          .form-controller {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 15px;
            position: relative;
          }
          .input-container {
            position: relative;
            max-width: 350px;
            width: 100%;
            z-index: 1;
          }

          input {
            color: #ffffff;
            caret-color: #0e4a6b;
            width: 100%;
            border-radius: 10px;
            padding: 0 15px;
            height: 40px;
            outline: none;
            background: transparent;
            border: 1px solid #ccc;
            font-size: 14px;
            box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
          }

          input:focus,
          select:focus {
            outline: none;
          }
          label {
            color: #ccc;
            position: absolute;
            left: 15px;
            top: 20px;
            transform: translateY(-9px);
            font-size: 12px;
            transition: all 0.2s ease-in-out;
            z-index: -1;
          }
          input:focus ~ label,
          .label {
            left: 15px;
            font-size: 11px;
            z-index: 2;
            top: 1px;
            background: #222;
          }
          select.error ~ span {
            display: block;
          }
          input.valid,
          select.valid {
            border-color: #7ed67e;
          }
          input.error,
          select.error {
            border-color: #f49393;
          }
          .error-msg {
            margin-top: 10px;
            font-size: 12px;
            letter-spacing: 1px;
            color: #f49393;
            text-transform: capitalize;
            display: none;
          }
          input.error ~ span {
            display: inline-block;
          }
          input[type="number"]::-webkit-outer-spin-button,
          input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        `}
      </style>
      {isInput && (
        <div className="form-controller">
          <div className="input-container">
            <input
              {...options}
              onChange={changeHandler}
              ref={inputRef}
              onBlur={onBlur}
              className={`${isValid ? "valid" : ""}  ${
                isError ? "error" : ""
              } `}
            />
            <label> {label} </label>
            <span className="error-msg">
              {message || (isError && errorMsg)}
            </span>
          </div>
        </div>
      )}
      {tagName === "select" && (
        <div className="form-controller">
          <select
            name="selectCar"
            id="cars"
            className={`${isValid ? "valid" : ""}  ${isError ? "error" : ""} `}
            required
            onChange={changeHandler}
          >
            <option value=""> select your car </option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <span className="error-msg">{message || (isError && errorMsg)}</span>
        </div>
      )}
    </>
  );
};

export default CustomInput;
