import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Emailsubscribe from "./tailwind-projects/Emailsubscribe";
import login from "./tailwind-projects/login";
import cards from "./tailwind-projects/cards";
import gallery from "./tailwind-projects/gallery";
import product from "./tailwind-projects/product";
import instapage from "./tailwind-projects/instapage";
import vishalcard from "./tailwind-projects/vishalcard";



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
      path: "/Email",
      element: Emailsubscribe(),
    },{
      path: "/vishalcard",
      element: vishalcard(),
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
      path: "/gallery",
      element: gallery(),
    },
    {
      path: "/product",
      element: product(),
    },
]);