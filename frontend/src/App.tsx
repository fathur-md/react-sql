import { createBrowserRouter, RouterProvider } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      // Later: add more pages here
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
