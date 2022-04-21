import FullComment from "./pages/FullComment/FullComment";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import NewComment from "./pages/NewComment/NewComment";

const routes = [
  { path: "/comment/:id", component: FullComment },
  { path: "/new-comment", component: NewComment },
  { path: "/", component: HomePage, exact: true },
  { component: NotFoundPage },
];
// Always, NotFound page bring the last element of routes array
// better to dont use ([0-9]+) or ([A-Za-z]+) for limitting URL

export default routes;
