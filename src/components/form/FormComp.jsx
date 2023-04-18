import React, { useEffect, useState } from "react";
import validationForm from "./validation";

const FormComp = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.phone === "") {
      setErrors((errors) => {
        return { ...errors, phone: "form is required" };
      });
    }
    if (formData.email === "") {
      setErrors((errors) => {
        return { ...errors, email: "email is required" };
      });
    }

    if (
      !formData.email.length ||
      errors.email.length > 0 ||
      !formData.phone.length ||
      errors.phone.length > 0
    ) {
      console.log("errr");
    } else {
      console.log("valid");

      console.log({ formData });
    }
  };

  useEffect(() => {
    setErrors((err) => {
      return { ...err, ...validationForm(formData) };
    });
  }, [formData]);
  return (
    <>
      <style jsx="true">
        {`
          form {
            width: 100%;
            max-width: 450px;
            margin: 20px auto;
            background-color: #222;
            border-radius: 10px;
            padding: 20px;
          }

          .form-controller {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 15px;
          }
          .input-container {
            max-width: 350px;
            width: 100%;

            margin: 0 auto 15px;
          }

          input {
            color: #ccc;
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
            margin-bottom: 8px;
            display: block;
            font-size: 12px;
            transition: all 0.2s ease-in-out;
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
            display: block;

            text-align: center;
          }

          input[type="number"]::-webkit-outer-spin-button,
          input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          button {
            width: 100%;
            max-width: 350px;
            border-radius: 7px;
            background: #ccc;
            color: #222;
            display: block;
            margin: 0 auto;
            height: 35px;
            outline: 0;
            border: 0;
            cursor: pointer;
            font-weight: bold;
            text-transform: capitalize;
          }

          select {
            width: 100%;
            max-width: 350px;
            border-radius: 5px;
            background-color: #222;

            border: 1px solid #ccc;
            height: 40px;
            padding: 0 10px;
            text-transform: capitalize;
            color: #ccc;
          }
        `}
      </style>
      <pre style={{ textAlign: "center" }}> {JSON.stringify(errors)} </pre>
      <pre style={{ textAlign: "center" }}> {JSON.stringify(formData)} </pre>
      <form onSubmit={submitHandler}>
        <div className="input-container">
          <label htmlFor="email"> Email </label>
          <input
            placeholder="Enter your Email"
            type="email"
            id="email"
            name="email"
            onChange={changeHandler}
          />
          {errors?.email && <span className="error-msg">{errors.email}</span>}
        </div>
        <div className="input-container">
          <label htmlFor="phone"> Phone </label>
          <input
            placeholder="Enter your phone"
            type="tel"
            onChange={changeHandler}
            id="phone"
            name="phone"
          />

          {errors?.phone && <span className="error-msg">{errors.phone}</span>}
        </div>
        {/* <div className="input-container">
          <label htmlFor="phone"> Car </label>
          <select name="selectCar" id="selectCar">
            <option value="select"> select your car </option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>

         {formError?.selectCarErr && (
            <span className="error-msg">{formError.selectCarErr}</span>
          )} 
        </div> */}
        <button> submit </button>
      </form>
    </>
  );
};

export default FormComp;
