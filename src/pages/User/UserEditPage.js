import { Breadcrumb } from "antd";
import { Link, useParams } from "react-router-dom";
import { isNilOrEmpty } from "../../utils/common";

export const UserEditPage = () => {
  const { userNo } = useParams();

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>
          <Link to="/users">Users</Link>
        </Breadcrumb.Item>
        {!isNilOrEmpty(userNo) && <Breadcrumb.Item>{userNo}</Breadcrumb.Item>}
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        Bill is a cat.
      </div>
    </>
  );
};
