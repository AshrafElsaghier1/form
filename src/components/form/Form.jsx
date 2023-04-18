import { Children, cloneElement, useEffect, useState } from "react";
import Item from "./Item";
import { propTypes } from "react-bootstrap/esm/Image";

const handler = {
  // get() {
  //   console.log("hello from get value");
  // },
  set(target, propertyName, value) {
    if (value.length > 0) {
      return true;
    }
    target[propertyName] = `faild ${propertyName} is required`;

    // console.log("hello from set value", target.name, propertyName, value);
    return true;
  },
};
const object = {
  name: "a",
};
const proxy = new Proxy(object, handler);
// console.log((proxy.name = "sada"));
// console.log(proxy.name);

const Form = (props) => {
  const { children, onFinish, onFailed } = props;
  const [values, setValues] = useState({
    username: "",
    pass: "",
  });
  const [rules, setRules] = useState({});

  const [errors, setErrors] = useState({});

  const items = Children.map(children, (child, index) => {
    return child.type.name === "Item"
      ? cloneElement(child, {
          ...child.props,
          setValues,
          setRules,
          errors,
        })
      : cloneElement(child, {
          ...child.props,
        });
  });

  const validator = () => {
    const errors = {};

    Object.entries(rules).forEach((rule) => {
      let propertyName = rule[0];
      let ruleValues = rule[1];

      ruleValues.forEach((singleRule) => {
        if (singleRule.required) {
          if (
            values[propertyName] === undefined ||
            values[propertyName].length === 0
          ) {
            errors[propertyName] = rules[propertyName][0].message;
          }
        }
      });
    });

    setErrors(errors);
    return errors;
  };
  const submitHandler = (e) => {
    e.preventDefault();

    !Object.keys(validator()).length ? onFinish(values) : onFailed(validator());
  };
  return (
    <form className="mt-32" onSubmit={submitHandler}>
      {items}
    </form>
  );
};
export default Form;

Form.Item = Item;
