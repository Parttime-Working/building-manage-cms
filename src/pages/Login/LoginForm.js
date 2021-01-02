// Copy from https://ant.design/components/form/
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Form, Input, Button, Checkbox, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { useLogin } from "../../hooks/useLogin";
import { isNilOrEmpty } from "../../utils/common";

const antIcon = <LoadingOutlined style={{ fontSize: 30 }} spin />;

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
  const {
    login,
    isLoading,
    // currentUser,
    loginError,
  } = useLogin();

  // onFinish is on form validation finished, same as onFinishFailed
  const onFinish = async (values) => {
    await login(values);
  };

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };

  // useEffect(() => {
  //   if (!isNilOrEmpty(currentUser)) {
  //     console.log("currentUser", currentUser);
  //   }
  // }, [currentUser]);

  useEffect(() => {
    if (!isNilOrEmpty(loginError)) {
      // TODO: show login fail
      console.log("loginError:", loginError);
    }
  }, [loginError]);

  return (
    <Spin indicator={antIcon} spinning={isLoading}>
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
