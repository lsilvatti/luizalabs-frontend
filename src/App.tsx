import "./App.scss";
import { Home } from "pages";
import { Routes, Route, Outlet } from "react-router-dom";
import { Footer } from "components/common";

function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:nameStartsWith" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
