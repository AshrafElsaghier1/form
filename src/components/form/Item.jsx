import { cloneElement, useEffect } from "react";

function Item(props) {
  const { label, name, children, setValues, setRules, rules, errors } = props;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues((old) => ({
      ...old,
      [name]: value,
    }));
  };

  const clonedElement = cloneElement(children, {
    name,
    onChange: changeHandler,
  });

  useEffect(() => {
    setRules((prevState) => ({ ...prevState, [name]: rules }));
  }, []);

  return (
    <>
      <style jsx="true">
        {`
          .form-item {
            display: flex;
            gap: 10px;
            align-items: center;
            // margin: auto;
            margin-bottom: 15px;
            justify-content: center;
            flex-direction: column;
          }
          label {
            color: #333;
            min-width: 100px;
            text-align: center;
            font-weight: 600;
          }
          input {
            padding: 5px 10px;
          }
        `}
      </style>
      <div className="form-item mx-auto">
        <div>
          <label> {label} </label>

          {clonedElement}
        </div>

        {errors[name] && <p className="block"> {errors[name]} </p>}
      </div>
    </>
  );
}
export default Item;
