import { RouterProvider } from "react-router-dom";
import "./reset.css";
import { router } from "./Router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
