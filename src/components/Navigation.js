import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useProvideAuth } from "../hooks/useProvideAuth";

export const Nav = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const history = useHistory();
  const { logout } = useProvideAuth();

  const onCollapse = (collapsed) => {
    setIsCollapsed(collapsed);
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await logout();
      history.push("/login");
    } catch (error) {
      // TODO: do something?
    }
  };

  return (
    <Sider collapsible collapsed={isCollapsed} onCollapse={onCollapse}>
      <Menu
        theme="dark"
        defaultSelectedKeys={["users"]}
        mode="inline"
        inlineCollapsed={isCollapsed}
      >
        <Menu.Item key="users" icon={<UserOutlined />}>
          <Link to="/users">Users</Link>
        </Menu.Item>
        <Menu.Item key="logout" icon={<LogoutOutlined />}>
          <Link to="/login" onClick={handleLogout}>
            Logout
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
