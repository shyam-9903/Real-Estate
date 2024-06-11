import {Layout, RequireAuth} from "./routes/layout/layout";
import HomePage from "./routes/homepage/homepage";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";
import Login from "./routes/login/login";
import ProfilePage from "./routes/profilePage/profilePage";
import Register from "./routes/register/register";
import About from "./routes/About/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import NewPostPage from "./routes/newPostPage/newPostPage";
import { listPageLoader, singlePageLoader, profilePageLoader } from "./lib/loaders";
import Contact from "./routes/contact/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader:listPageLoader,
        },
        {
          path:"/:id",
          element:<SinglePage/>,
          loader:singlePageLoader,
        },
        {
          path:"/login",
          element:<Login/>
        },

        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        }
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children:[
        {
          path:"/profile",
          element:<ProfilePage/>,
          loader:profilePageLoader,
        },
        {
          path:"/profile/update",
          element:<ProfileUpdatePage/>
        },
        {
          path:"/add",
          element:<NewPostPage/>
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
