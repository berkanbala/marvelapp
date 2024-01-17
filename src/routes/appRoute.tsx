import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "../pages/home/home";
import { CharacterDetails } from "../pages/characterDetails/characterDetails";
import { AppLayout } from "../layout/appLayout";

export const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<CharacterDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};
