import { Link } from 'react-router-dom';

function NavBar () {
  // TODO better - not generating new random numbers after we click
  const id = Math.floor(Math.random() * 10 + 1);
  return (
    <>
      {/* <h2>Nav Bar Component</h2> */}
      <Link to="/">All Players</Link>
      <br></br>
      <Link to={`/players/${id}`}>Random Player</Link>
    </>
  );
}

export default NavBar;