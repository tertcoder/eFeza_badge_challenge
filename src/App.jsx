import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FormBadge from "./features/FormBadge";
import Badge from "./features/Badge";

const router = createBrowserRouter([
  {
    element:<FormBadge/>,
    path: "/",
  },
  {
    element:<Badge/>,
    path: "/badge",
  },

  
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
