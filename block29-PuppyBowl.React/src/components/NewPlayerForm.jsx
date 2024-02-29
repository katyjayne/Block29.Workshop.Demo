import { useGetPlayersQuery, useCreatePlayerMutation } from "../api/playersSlice";
import { useState } from "react";

function NewPlayerForm () {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [createPlayer, result] = useCreatePlayerMutation();

  const { refetch } = useGetPlayersQuery();
  
  async function handleSubmit(e) {
    e.preventDefault();
    await createPlayer({name, breed, imageUrl});
    refetch();
  }

  return (
    <>
      <h3>Add a New Player Here:</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
          type="text" 
          name="player-name"
          id="player-name" 
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)} 
          />
        </label>
        <label>
          Breed:
          <input 
          type="text" 
          name="player-breed"
          id="player-breed" 
          placeholder="Breed" 
          value={breed}
          onChange={(e) => setBreed(e.target.value)} 
          />
        </label>
        <label>
          Image:
          <input 
          type="text" 
          name="player-image"
          id="player-image" 
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}  
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default NewPlayerForm;