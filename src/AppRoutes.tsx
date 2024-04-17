import Layout from "./layouts/layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import About from "./pages/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/projects"
        element={
          <Layout>
            <Projects />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
