import Layout from "antd/lib/layout/layout";

export const LoggedOutLayout = ({ children }) => {
  return <Layout style={{ minHeight: "100vh" }}>{children}</Layout>;
};
