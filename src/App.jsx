import Form from "./components/form/Form";

const App = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  const onFailed = (errors) => {
    console.log(errors);
  };

  return (
    <div className="container mx-auto px-2 md:px-0 text-center">
      {/* <ModalApp /> */}

      <Form onFinish={onFinish} onFailed={onFailed}>
        <Form.Item
          rules={[
            {
              required: true,
              message: "this field is required",
            },
          ]}
          placeholder="Enter your email"
          label="username"
          name="username"
        >
          <input type="text" />
        </Form.Item>
        <Form.Item
          label="pass"
          name="pass"
          rules={[
            {
              required: true,
              message: "this field is required",
            },
          ]}
          placeholder="Enter your password"
        >
          <input type="" />
        </Form.Item>

        <button type="submit"> submit </button>
      </Form>
    </div>
  );
};

export default App;
