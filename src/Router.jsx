import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Awards from "./pages/Awards";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home  },
      { path: "projects", Component: Projects  },
      { path: "awards", Component: Awards  },
      { path: "testimonials", Component: Testimonials  },
      { path: "blog", Component: Blog  },
      { path: "contact", Component: Contact  },
    ],
  },
], {
  basename: "/test",
});

export default Router;

