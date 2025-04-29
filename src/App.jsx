import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import PersonList from "./pages/PersonList.jsx";
import About from "./pages/About.jsx";
import AddEmployee from "./pages/AddEmployee.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PersonList />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/add",
      element: <AddEmployee />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
