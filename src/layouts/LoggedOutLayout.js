import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { CopyrightFooter } from "../components/CopyrightFooter";

export const LoggedOutLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content>{children}</Content>
      <CopyrightFooter />
    </Layout>
  );
};
