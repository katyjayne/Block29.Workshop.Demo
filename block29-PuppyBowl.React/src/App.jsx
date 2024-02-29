import './App.css'
import AllPLayers from './components/AllPlayers';
import NavBar from './components/NavBar';
import SinglePlayer from './components/SinglePlayer';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <h1> App</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllPLayers/>}></Route>
        <Route path="/players/:id" element={<SinglePlayer/>}></Route>
      </Routes>
    </>
  )
}

export default App;
