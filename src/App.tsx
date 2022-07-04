import "./App.scss";
import { Home, NotFound, Character } from "pages";
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
        <Route path="/busca/:nameStartsWith" element={<Home />} />
        <Route path="/personagem/:id" element={<Character />} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Route>
    </Routes>
  );
}

export default App;
