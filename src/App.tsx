import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { RoutesComponent } from './routes/routes';
import ThrivePlanningNavbar from './components/navbar/ThrivePlanningNavbar';
function App() {
  return (
    <>
      <ThrivePlanningNavbar />
      <BrowserRouter children={RoutesComponent} basename={'/'} />
    </>
  );
}
export default App;
