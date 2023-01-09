import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ExampleA from "./tailwind_examples/ExampleA";
import ExampleB from "./tailwind_examples/ExampleB";
import ExampleC from "./tailwind_examples/ExampleC";
import ExampleD from "./tailwind_examples/ExampleD";



export const router = createBrowserRouter([
    {
      path: "/",
      element: App(),
    },
    {
        path: "/examplea",
        element: ExampleA(),
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