import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Emailsubscribe from "./tailwind-projects/Emailsubscribe";
import login from "./tailwind-projects/login";
import cards from "./tailwind-projects/cards";
import ExampleC from "./tailwind-projects/ExampleC";
import ExampleD from "./tailwind-projects/ExampleD";
import instapage from "./tailwind-projects/instapage";



export const router = createBrowserRouter([
    {
      path: "/",
      element: App(),
    },
    {
      path: "/Email",
      element: Emailsubscribe(),
    },
    {
        path: "/instapage",
        element: instapage(),
    },
    {
      path: "/cards",
      element: cards(),
  },
    {
      path: "/login",
      element: login(),
    },
    {
      path: "/examplec",
      element: ExampleC(),
    },
    {
      path: "/exampled",
      element: ExampleD(),
    },
]);