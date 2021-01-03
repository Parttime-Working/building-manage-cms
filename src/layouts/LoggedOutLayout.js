import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { CopyrightFooter } from "../components/CopyrightFooter";

export const LoggedOutLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: "0 16px" }}>{children}</Content>
      <CopyrightFooter />
    </Layout>
  );
};
