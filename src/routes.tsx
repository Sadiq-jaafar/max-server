import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import StreamingPage from "./pages/StreamingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "id", element: <StreamingPage /> }, // Fixed the path for video ID
    ],
  },
]);
export default router;
