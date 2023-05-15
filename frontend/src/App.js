import { Routes, Route } from 'react-router';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import Reservation from './screens/Reservation';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/reservation' element={<Reservation />} />
    </Routes>
  );
}

export default App;
