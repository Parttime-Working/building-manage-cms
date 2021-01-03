import { Layout, PageHeader, Table } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { useFetchUsers } from "../../hooks/useFetchUsers";

const ClickableCell = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const UsersListPage = () => {
  const { path } = useRouteMatch();
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageSize, setCurrentPageSize] = useState(10);

  const { userPage, fetchUsers, isLoading } = useFetchUsers();

  const userColumns = [
    {
      title: "No",
      dataIndex: "no",
      sorter: true,
      render: (no) => <ClickableCell># {no}</ClickableCell>,
      width: "20%",
    },
    {
      title: "Username",
      dataIndex: "username",
      render: (username) => <ClickableCell>{username}</ClickableCell>,
    },
  ];

  const handleTableChange = async ({ current: page, pageSize }) => {
    setCurrentPage(page);
    setCurrentPageSize(pageSize);

    try {
      await fetchUsers({ page, pageSize });
    } catch (error) {
      // Todo: error handling
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Layout>
      <PageHeader className="site-page-header" title="Users List" />
      <Content>
        <Table
          columns={userColumns}
          rowKey={({ no }) => no}
          onRow={({ no }) => ({
            onDoubleClick: (event) => {
              history.push(`${path}/${no}`);
            },
          })}
          dataSource={userPage.items}
          pagination={{
            current: currentPage,
            pageSize: currentPageSize,
            total: userPage.total,
            position: ["topRight", "bottomRight"],
            showSizeChanger: true,
            pageSizeOptions: [5, 10, 20],
          }}
          loading={isLoading}
          onChange={handleTableChange}
        />
      </Content>
    </Layout>
  );
};
