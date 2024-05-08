import Layout from "./layouts/layout";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import About from "./pages/About";
import OrderingPlatform from "./pages/OrderingPlatform";
import BookingApp from "./pages/BookingApp";

const AppRoutes = () => {
  return (
    <Router>
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
          path="/projects/ordering"
          element={
            <Layout>
              <OrderingPlatform />
            </Layout>
          }
        />
        <Route
          path="/projects/booking"
          element={
            <Layout>
              <BookingApp />
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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
