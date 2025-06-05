import { createRouter, RootRoute, Route } from "@tanstack/react-router";
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

export const router = createRouter({
  routeTree,
});
