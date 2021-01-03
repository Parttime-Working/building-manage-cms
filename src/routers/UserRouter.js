import { Route, Switch, useRouteMatch } from "react-router-dom";
import { UsersListPage, UserEditPage } from "../pages/User";

export const UserRouter = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <UsersListPage />
      </Route>
      <Route exact path={`${path}/add`}>
        <UserEditPage />
      </Route>
      <Route exact path={`${path}/:userNo`}>
        <UserEditPage />
      </Route>
    </Switch>
  );
};
