import Front from "../app/components/front/front.js";
import DefaultLayout from "../app/components/layout";

const routes = [
  {
    path: "/",
    exact: true,
    component: Front,
    layout: DefaultLayout,

  }
];
export default routes;
