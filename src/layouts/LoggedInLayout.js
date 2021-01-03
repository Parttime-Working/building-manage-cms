import Layout, { Header } from "antd/lib/layout/layout";
import { CopyrightFooter } from "../components/CopyrightFooter";
import { MarginContent } from "../components/MarginContent";
import { Nav } from "../components/Navigation";

export const LoggedInLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Nav />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <MarginContent>{children}</MarginContent>
        <CopyrightFooter />
      </Layout>
    </Layout>
  );
};
