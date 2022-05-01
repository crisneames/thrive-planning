import { Route, Routes } from 'react-router-dom';
import LandingPage from '../components/shared/LandingPage';
import Login from '../components/login/Login';
import CompanySignUpForm from '../components/registration/CompanySignUpForm';
import EmployerSignUpForm from '../components/registration/EmployerSignUpForm';
import ThrivPlanForm from '../components/thrivplan/ThrivPlanForm';
import Unauthorized from '../components/shared/Unauthorized';
import { CompanySignUpPath, EmployerSignUpPath, LandingPagePath, LoginPath, ThrivePlanPath, UnauthorizedPath } from './paths';

export const RoutesComponent = (
  <Routes>
    <Route path={UnauthorizedPath} element={<Unauthorized />} />
    <Route path={LoginPath} element={<Login />} />
    <Route path={LandingPagePath} element={<LandingPage />} />
    <Route
      path={CompanySignUpPath}
      element={<CompanySignUpForm />}
    />
    <Route path={ThrivePlanPath} element={<ThrivPlanForm />} />
    <Route path={EmployerSignUpPath} element={<EmployerSignUpForm />} />
  </Routes>
);
