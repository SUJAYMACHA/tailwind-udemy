import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ExampleA from "./tailwind_examples/instapage";
import ExampleB from "./tailwind_examples/ExampleB";
import ExampleC from "./tailwind_examples/ExampleC";
import ExampleD from "./tailwind_examples/ExampleD";
import instapage from "./tailwind_examples/instapage";



export const router = createBrowserRouter([
    {
      path: "/",
      element: App(),
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