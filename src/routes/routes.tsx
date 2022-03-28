import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import Login from "../components/login/Login";
import EmployerRegistrationForm from "../components/registration/EmployerRegistrationForm";
import ThrivPlanForm from "../components/thrivplan/ThrivPlanForm";
import Unauthorized from "../components/Unauthorized";

export const RoutesComponent = (
  <Routes>
    <Route path="/unauthorized" element={<Unauthorized />} />
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<LandingPage />} />
    <Route
      path="/registration/employer"
      element={<EmployerRegistrationForm />}
    />
    <Route path="/thrivplan" element={<ThrivPlanForm />} />
  </Routes>
);
