/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Todos = lazy(() => import("./pages/Todos"));

import "./tailwind.css";

render(
  () => (
    <Router>
      <Routes>
        <Route
          path="/"
          component={Home}
        />
        <Route
          path="/Login"
          component={Login}
        />
        <Route
          path="/Todos"
          component={Todos}
        />
      </Routes>
    </Router>
  ),
  document.body
);
