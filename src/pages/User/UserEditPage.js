import { PageHeader, Spin } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchUserByNo } from "../../hooks/useFetchUserByNo";
import { isNilOrEmpty } from "../../utils/common";

// Copy from https://ant.design/components/breadcrumb-cn/#routes
const itemRender = (route, params, routes, paths) => {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={`/${paths.join("/")}`}>{route.breadcrumbName}</Link>
  );
};

export const UserEditPage = () => {
  const { userNo } = useParams();
  const { user, fetchUserByNo, isLoading } = useFetchUserByNo();

  useEffect(() => {
    if (!isNilOrEmpty(userNo)) {
      fetchUserByNo({ no: userNo });
    }
  }, [fetchUserByNo, userNo]);

  return (
    <Layout>
      <PageHeader
        className="site-page-header"
        title={userNo ? "Edit User" : "Add User"}
        breadcrumb={{
          routes: [
            {
              path: "/users",
              breadcrumbName: "Users",
            },
            { breadcrumbName: `# ${userNo}` },
          ],
          itemRender,
        }}
      />
      <Spin size="large" spinning={isLoading}>
        <Content>
          {isNilOrEmpty(user) ? (
            <div>add user form?</div>
          ) : (
            <>
              <div>{user.no}</div>
              <div>{user.username}</div>
              <div>{user.createdAt}</div>
              <div>{user.updatedAt}</div>
            </>
          )}
        </Content>
      </Spin>
    </Layout>
  );
};
