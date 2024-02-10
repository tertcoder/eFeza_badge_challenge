import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FormBadge from "./features/FormBadge";
import Badge from "./features/Badge";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <FormBadge />,
        path: "/",
      },
      {
        element: <Badge />,
        path: "/badge",
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
