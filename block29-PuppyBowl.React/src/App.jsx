import './App.css'
import AllPLayers from './components/AllPlayers';
import NavBar from './components/NavBar';
import NewPlayerForm from './components/NewPlayerForm';
import SinglePlayer from './components/SinglePlayer';

function App() {

  return (
    <>
      <h1> App</h1>
      <NavBar />
      <AllPLayers />
      <SinglePlayer />
      <NewPlayerForm />
    </>
  )
}

export default App;
