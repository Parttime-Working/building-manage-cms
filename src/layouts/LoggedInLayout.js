import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { CopyrightFooter } from "../components/CopyrightFooter";
import { Nav } from "../components/Navigation";

export const LoggedInLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Nav />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>{children}</Content>
        <CopyrightFooter />
      </Layout>
    </Layout>
  );
};
