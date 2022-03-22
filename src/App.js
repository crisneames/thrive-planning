import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { RoutesComponent } from './routes/routes';
import ThrivePlanningNavbar from './components/navbar/ThrivePlanningNavbar';
import NewEmployeeSignUpForm from './components/registration/NewEmployeeSignUpForm';
function App() {
  return (
    <>
      <ThrivePlanningNavbar />
      {/* <BrowserRouter children={RoutesComponent} basename={'/'} /> */}
      <NewEmployeeSignUpForm />
    </>
  );
}
export default App;
