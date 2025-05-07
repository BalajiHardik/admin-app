import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Admin from './Components/Admin';
import User from './Components/User';
import Insurance from './Components/Insurance';
import BiddingPage from './Components/BiddingPage';

function App() {

  return (
<BrowserRouter>
<Routes>
<Route path="/register" element={<Register />} />
<Route path="/" element={<Login />} />
<Route path="/admin" element={<Admin />} />
<Route path="/user" element={<User />} />
<Route path="/Insurance" element={<Insurance />} />
<Route path="/Bid" element={<BiddingPage />} />
</Routes>
</BrowserRouter>

  );

}

export default App;
 