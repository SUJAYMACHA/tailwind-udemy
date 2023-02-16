import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Emailsubscribe from "./tailwind-projects/Emailsubscribe";
import ExampleB from "./tailwind-projects/ExampleB";
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
      path: "/exampleb",
      element: ExampleB(),
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