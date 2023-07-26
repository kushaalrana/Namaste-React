import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
//default import
import Header from "./components/Header";
//named import
// import { Title } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Form from "./components/Form";
import Profile from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import RestaurantMenu from "./components/RestaurantMenu";

const Instamart = lazy(() => {
  return import("./components/Instamart");
}); //Reason for not working: if brackets use return

const Instacart = lazy(() => {
  import("./components/Instacart");
});

const About = lazy(() => import("./components/About"));
//upon onDemandLoading=>upon Render=>Suspends Loading

const AppLayout = () => {
  return (
    //This is <React.Fragment>
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loadingg..</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId", //this id is passed as a params to the useParams in RestaurantMenu component
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/instacart",
        element: (
          <Suspense fallback={<h1>Loadingg..</h1>}>
            <Instacart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
