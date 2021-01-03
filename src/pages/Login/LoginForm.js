// Copy from https://ant.design/components/form/
import { useTranslation } from "react-i18next";
import { Form, Input, Button, Checkbox, Spin } from "antd";
import styled from "styled-components";

import { useProvideAuth } from "../../hooks/useProvideAuth";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  const { login, isLoading } = useProvideAuth();

  // onFinish is on form validation finished, same as onFinishFailed
  const onFinish = async (values) => {
    try {
      await login(values);
      history.push("/users");
    } catch (error) {
      // Todo: handle login fail
    }
  };

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };

  return (
    <Spin size="large" spinning={isLoading}>
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
              message: t("loginForm.errorMessages.usernameRequired"),
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
              message: t("loginForm.errorMessages.passwordRequired"),
            },
          ]}
        >
          <Input.Password />
        </StyledForm.Item>

        <StyledForm.Item
          {...tailLayout}
          name="remember"
          valuePropName="checked"
        >
          <Checkbox>{t("loginForm.remember")}</Checkbox>
        </StyledForm.Item>

        <StyledForm.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            {t("common.submit")}
          </Button>
        </StyledForm.Item>
      </StyledForm>
    </Spin>
  );
};

export default LoginForm;
