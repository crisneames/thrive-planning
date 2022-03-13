import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import EmployerRegistrationForm from './components/registration/EmployerRegistrationForm';
import ThrivPlanForm from './components/thrivplan/ThrivPlanForm';

function App() {
  return (
    <div>
      <h1 className='text-center'>Thrive Planning</h1>
      {/* <EmployerRegistrationForm /> */}
      <ThrivPlanForm />
    </div>
  );
}

export default App;
