import {configureRoutes} from "pawjs/src/utils/bundler";
// routes
import * as Front from "./pages/front"
import * as Front2 from "./pages/front2"
//import * as Alumni from "./pages/alumnis";

export default configureRoutes([
  Front,
  Front2
]);