import styled from "styled-components";

import LoginForm from "./LoginForm";

const FormContainer = styled.div`
  width: 60%;
  max-width: 600px;
  min-width: 400px;
  margin: 15% auto;
`;

const Login = () => {
  return (
    <>
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </>
  );
};

export default Login;
