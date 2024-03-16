import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layout/MainLayout";
import Home from "../page/Home/Home";
import PostDetails from "../component/PostDetails";
import ALLPost from "../page/AllPost/AllPost";
import Login from "../page/Login/Login";
import Registration from "../page/Registration/Registration";
import PieChat from "../page/Dashboard/PieChat";
import AllSupplyPost from "../page/Dashboard/AllSupplyPost";
import UserDashboard from "../page/Dashboard/UserDashboard";
import CreateSupply from "../component/CreateSupply";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/relief-goods/:id",
        element: <PostDetails />,
      },
      { path: "/relief-goods", element: <ALLPost /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Registration /> },
    ],
  },
  {
    path: "/dashboard",
    element: <UserDashboard />,
    children: [
      { path: "/dashboard/piechart", element: <PieChat /> },
      { path: "/dashboard/allsupplypost", element: <AllSupplyPost /> },
      { path: "/dashboard/create-supply", element: <CreateSupply /> },
    ],
  },
]);
