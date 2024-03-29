import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Emailsubscribe from "./tailwind-projects/Emailsubscribe";
import login from "./tailwind-projects/login";
import cards from "./tailwind-projects/cards";
import gallery from "./tailwind-projects/gallery";
import product from "./tailwind-projects/product";
import instapage from "./tailwind-projects/instapage";
import Slideone from "./tailwind-projects/slide-components/Slideone"
import PricingCard from "./tailwind-projects/card";
import tempalte from "./tailwind-projects/template";
import whatsappweb from "./tailwind-projects/whatsappweb";
import Homepage from "./tailwind-projects/Homepage";
import blog from "./tailwind-projects/blog"
import About from "./tailwind-projects/About";
import Slidetwo from "./tailwind-projects/slide-components/Slidetwo";
import Slidethree from "./tailwind-projects/slide-components/Slidethree";
import Slidefour from "./tailwind-projects/slide-components/Slidefour";
import Slidefive from "./tailwind-projects/slide-components/Slidefive";
import Slidesix from "./tailwind-projects/slide-components/Slidesix";
import Slideseven from "./tailwind-projects/slide-components/Slideseven";
import Slideeight from "./tailwind-projects/slide-components/Slideeight";

import Slidenine from "./tailwind-projects/slide-components/Slidenine";
import Slide from "./tailwind-projects/Slide";








export const router = createBrowserRouter([
    {
      path: "/",
      element: App(),
    },
    {
      path: "/Slide",
      element: Slide(),
    },
    {
      path: "/Slideone",
      element: Slideone(),
    },
    {
      path: "/Slidetwo",
      element: Slidetwo(),
    },
    {
      path: "/Slidethree",
      element: Slidethree(),
    },
    {
      path: "/Slidefour",
      element: Slidefour(),
    },
    {
      path: "/Slidefive",
      element: Slidefive(),
    },
    {
      path: "/Slidesix",
      element: Slidesix(),
    },
    {
      path: "/Slideseven",
      element: Slideseven(),
    },
    {
      path: "/Slideeight",
      element: Slideeight(),
    },
    {
      path: "/Slidenine",
      element: Slidenine(),
    },
    

    {
      path: "/about",
      element: About(),
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