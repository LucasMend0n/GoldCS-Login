import { Route, Routes } from 'react-router-dom';
import './Global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Pages/Login";
import Home from './components/Pages/Home';
import Layout from './components/Layout/Layout';
import RequireAuth from './components/Layout/RequireAuth';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route exact path='/login' element={<Login />} />
        <Route element={< RequireAuth />} >
          <Route exact path='/' element={<Home />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
