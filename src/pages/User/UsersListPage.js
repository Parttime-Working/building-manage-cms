import { Layout, PageHeader, Pagination, List, Table } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import { useHistory, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

const FullPageLayout = styled(Layout)`
  min-height: 100%;
  min-width: 100%;
  max-width: 100%;
`;

const userColumns = [
  {
    title: "No",
    dataIndex: "no",
    sorter: true,
    render: (no) => `# ${no}`,
    width: "20%",
  },
  {
    title: "Username",
    dataIndex: "username",
  },
];

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
  let { path } = useRouteMatch();
  const history = useHistory();

  const handleTableChange = (...args) => {
    console.log(args);
  };

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
          dataSource={data.items}
          pagination={{
            current: 1,
            pageSize: 10,
            total: 200,
          }}
          loading={false}
          onChange={handleTableChange}
        />
      </Content>
    </FullPageLayout>
  );
};
