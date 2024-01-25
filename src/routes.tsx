import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import StreamingPage from "./pages/StreamingPage";
import FileUploadPage from "./pages/MediaUpload";
import MediaStreamingPage from "./pages/StreamingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "id", element: <StreamingPage /> },
      { path: "uplaod", element: <FileUploadPage /> },
      { path: "stream/:idm", element: <MediaStreamingPage /> }, // Fixed the path for video ID
    ],
  },
]);
export default router;
