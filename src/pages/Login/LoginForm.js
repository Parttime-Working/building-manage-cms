// Copy from https://ant.design/components/form/
import { useTranslation } from "react-i18next";
import { Form, Input, Button, Checkbox } from "antd";
import styled from "styled-components";

const StyledForm = styled(Form)`
  padding: 3em;
  background-color: #fafafa;
`;

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 16,
  },
};

const LoginForm = () => {
  const { t } = useTranslation();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <StyledForm
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <StyledForm.Item
        label={t("common.username")}
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </StyledForm.Item>

      <StyledForm.Item
        label={t("common.password")}
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </StyledForm.Item>

      <StyledForm.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </StyledForm.Item>

      <StyledForm.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </StyledForm.Item>
    </StyledForm>
  );
};

export default LoginForm;
