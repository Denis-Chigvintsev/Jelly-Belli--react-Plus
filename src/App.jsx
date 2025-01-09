import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/pages/Home";
import Beans from "./components/pages/Beans";
import Combinations from "./components/pages/Combinations";
import Facts from "./components/pages/Facts";
import NotFound from "./components/pages/NotFound";
import Recepies from "./components/pages/Recepies";
import History from "./components/pages/History";
import MainLayout from "./components/layouts/MainLayout/MainLayout";
import Review from "./components/pages/Review";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="beans" element={<Beans />}></Route>
          <Route path="facts" element={<Facts />}></Route>
          <Route path="recepies" element={<Recepies />}></Route>
          <Route path="combinations" element={<Combinations />}></Route>
          <Route path="history" element={<History />}></Route>
          <Route path="review" element={<Review />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
