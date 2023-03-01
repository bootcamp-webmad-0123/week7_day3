import { Route, Routes } from 'react-router-dom';
import AboutPage from './AboutPage/AboutPage';
import './App.css';
import HomePage from './HomePage/HomePage';
import Navbar from './NavBar/Navbar';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import ProjectsPage from './ProjectsPage/ProjectsPage';
import ParamsExample from './ParamsExample/ParamsExample';
import StringsExample from './StringsExample/StringsExample';
import ProfileProtectedPage from './ProfileProtectedPage/ProfileProtectedPage';

function App() {

  // Posible usuario contectado para la ruta protegida
  const user = undefined
  // const user = { username: 'Popino', email: 'kdhhd@msn.es', id: '93768736' }

  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sobre-mi' element={<AboutPage />} />
        <Route path='/proyectos' element={<ProjectsPage />} />
        <Route path='/perfil' element={<ProfileProtectedPage user={user} />} />
        <Route path='/vuelos/:origin/:destination/:departure' element={<ParamsExample />} />
        <Route path='/resultados' element={<StringsExample />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </div>
  );
}

export default App;
