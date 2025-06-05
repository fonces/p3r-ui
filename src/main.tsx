import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createRouter,
  RootRoute,
  Route,
} from "@tanstack/react-router";
import App from "./App";
import Skill from "./views/Skill";

const rootRoute = new RootRoute({
  component: App,
});

const skillRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/skill",
  component: Skill,
});

const routeTree = rootRoute.addChildren([skillRoute]);

const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
