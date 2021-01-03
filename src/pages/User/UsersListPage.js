import { Layout, PageHeader, Table } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { useFetchUsers } from "../../hooks/useFetchUsers";

const FullPageLayout = styled(Layout)`
  min-height: 100%;
  min-width: 100%;
  max-width: 100%;
`;

const ClickableCell = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const data = {
  total: 10,
  totalPages: 1,
  items: [
    {
      no: 1,
      username: "AoiYamada1x",
    },
    {
      no: 3,
      username: "AoiYamada2",
    },
    {
      no: 4,
      username: "AoiYamada3",
    },
    {
      no: 6,
      username: "AoiYamada4",
    },
    {
      no: 7,
      username: "AoiYamada5",
    },
    {
      no: 8,
      username: "AoiYamada6",
    },
    {
      no: 9,
      username: "AoiYamada7",
    },
    {
      no: 10,
      username: "AoiYamada8",
    },
    {
      no: 11,
      username: "AoiYamada9",
    },
    {
      no: 13,
      username: "AoiYamada11",
    },
  ],
};

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
    <FullPageLayout>
      <PageHeader className="site-page-header" title="Users List" />
      <Content style={{ margin: "0 16px" }}>
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
    </FullPageLayout>
  );
};
