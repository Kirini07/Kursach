import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { SignUp } from "../components/Forms/Employees/SignUp/SignUp";
import { SignIn } from "../components/Forms/Employees/SignIn/SignIn";
import { CreateOrder } from "../components/CreateOrder/CreateOrder";
import { NewOrder } from "../components/Forms/NewOrder/NewOrder";
import { HomePage } from "../pages/HomePage/HomePage";
import { ExistsOrders } from "../components/ExistsOrders/ExistsOrders";
import { Order } from "../components/Order/Order";
import { CategoryList } from "../components/CategoryList/CategoryList";
import { CoursesList } from "../components/CoursesList/CoursesList";
import { SignInAdmin } from "../components/Forms/Administrators/SignIn/SignInAdmin";
import { AddCourse } from "../components/Admin/AddCourse/AddCourse";
import { RemoveList } from "../components/Admin/RemoveCourse/RemoveList";

export const Routes = (isAuthenticated, role) => {
  if (isAuthenticated && role === "admin") {
    return (
      <Switch>
        <Route path="/main">
          <HomePage />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/add-course">
          <AddCourse />
        </Route>
        <Route path="/remove-course">
          <RemoveList />
        </Route>
        <Redirect to="/main" />
      </Switch>
    );
  }
  if (isAuthenticated && role === "employee") {
    return (
      <>
        <Switch>
          <Route path="/main">
            <HomePage />
          </Route>
          <Route path="/choose">
            <CreateOrder />
          </Route>
          <Route path="/exists">
            <ExistsOrders />
          </Route>
          <Route path="/create">
            <NewOrder />
          </Route>
          <Route
            path="/order/:id"
            render={({ match }) => <Order orderId={match.params.id} />}
          />
          <Route
            path="/category/:id"
            render={({ match }) => <CategoryList orderId={match.params.id} />}
          />
          <Route
            path="/course/:id"
            render={({ match }) => {
              const param = match.params.id.split("$$$");
              return <CoursesList orderId={param[1]} category={param[0]} />;
            }}
          />
          <Redirect to="/main" />
        </Switch>
      </>
    );
  }
  return (
    <Switch>
      <Route path="/sign-in" exact>
        <SignIn />
      </Route>
      <Route path="/sign-in/D7EF2F77C496BC03F913E01D3161AA7EB7E7D427">
        <SignInAdmin />
      </Route>
      <Redirect to="/sign-in" />
    </Switch>
  );
};
