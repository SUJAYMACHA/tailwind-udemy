import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Emailsubscribe from "./tailwind-projects/Emailsubscribe";
import login from "./tailwind-projects/login";
import cards from "./tailwind-projects/cards";
import gallery from "./tailwind-projects/gallery";
import product from "./tailwind-projects/product";
import instapage from "./tailwind-projects/instapage";
import card from "./tailwind-projects/card"
import PricingCard from "./tailwind-projects/card";
import tempalte from "./tailwind-projects/template";
import whatsappweb from "./tailwind-projects/whatsappweb";
import Homepage from "./tailwind-projects/Homepage";
import blog from "./tailwind-projects/blog"



export const router = createBrowserRouter([
    {
      path: "/",
      element: App(),
    },
    {
      path: "/blog",
      element: blog(),
    },
    {
      path: "/homepage",
      element: Homepage(),
    },
    {
      path: "/download",
      element: whatsappweb(),
    },
    
  
    {
      path: "/Email",
      element: Emailsubscribe(),
    },
    {
      path: "/card",
      element: PricingCard(),
    },
    {
        path: "/instapage",
        element: instapage(),
    },
    {
      path: "/template",
      element: tempalte(),
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