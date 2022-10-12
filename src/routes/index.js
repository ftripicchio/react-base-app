import Home from "../pages/Home";
import Page1 from "../pages/Page1";
import Page1Child1 from "../pages/Page1-Child1";
import Page2 from "../pages/Page2";

export const routes = [
  {
    id: "Home",
    path: "/",
    component: Home,
    children: null,
  },
  {
    id: "page1",
    path: "page1",
    component: Page1,
    children: [
      {
        id: "page1child1",
        path: "page1/child1",
        component: Page1Child1,
        children: null
      }
    ],
  },
  {
    id: "page2",
    path: "page2",
    component: Page2,
    children: null,
  }
];
