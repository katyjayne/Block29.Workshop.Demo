import { useParams } from "react-router-dom";
import { useGetSinglePlayerQuery } from "../api/playersSlice";

function SinglePlayer() {
  // useParams returns an object -> so we are destructuring that object using the key defined in the <Route> element and creating a local variable in this component with the same name

  const { id } = useParams();
  const { data, isLoading } = useGetSinglePlayerQuery(id);
  const player = data?.data.player;
  
  return (
    <>
      <h2>Player Details</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3>{player.name}</h3>
          <h4>{player.breed}</h4>
          <img src={player.imageUrl} width= "300" alt="player image" />
        </div>
      )}
    </>
  );
}

export default SinglePlayer;