import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";

export default function MainRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} errorElement={<NotFound />} />
      <Route path="/home" element={<Home />} errorElement={<NotFound />} />

      <Route path="*" element={<NotFound />} />
      <Route path="/not-found-page" element={<NotFound />} />
    </Routes>
  );
}
