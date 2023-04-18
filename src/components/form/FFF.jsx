import { useState } from "react";

const FFF = () => {
  const [values, setValues] = useState({
    user: "",
    pass: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  console.log({ values });
  return (
    <form onChange={changeHandler}>
      <input type="text" name="user" />
      <input type="text" name="pass" />
    </form>
  );
};
export default FFF;
