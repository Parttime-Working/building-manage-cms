import { Redirect, Route, Switch } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { LoggedInLayout } from "../layouts/LoggedInLayout";
import { LoggedOutLayout } from "../layouts/LoggedOutLayout";
import { LoginPage } from "../pages/Login/LoginPage";
import { UserRouter } from "./UserRouter";

export const Routes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Switch>
      <Route exact path="/">
        {isAuthenticated() ? (
          <Redirect to="/users" />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>
      <Route exact path="/login">
        <LoggedOutLayout>
          <LoginPage />
        </LoggedOutLayout>
      </Route>
      <Route path="/users">
        <LoggedInLayout>
          <UserRouter />
        </LoggedInLayout>
      </Route>
    </Switch>
  );
};
