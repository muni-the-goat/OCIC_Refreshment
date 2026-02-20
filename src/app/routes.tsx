import { createHashRouter } from "react-router-dom";
import { Layout } from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Sectors from "./pages/Sectors";
import CSR from "./pages/CSR";
import NewsMedia from "./pages/NewsMedia";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

export const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/sectors", element: <Sectors /> },
      { path: "/csr", element: <CSR /> },
      { path: "/news-media", element: <NewsMedia /> },
      { path: "/careers", element: <Careers /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
