import './App.css';
import { Route, Routes } from 'react-router-dom'
import GetAllStarships from './pages/GetAllStarships';
import StarshipDetails from './pages/StarshipDetails';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h1>Starwars Starships</h1>
      </header>
      <Routes>
        <Route path='/' element={<GetAllStarships />} />
        <Route path='/starship' element={<StarshipDetails />} />
      </Routes>

    </div>
  );
}

export default App;