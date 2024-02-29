function NewPlayerForm () {

  return (
    <>
      <h3>Add a New Player</h3>
      <form>
        <label>
          Name:
          <input 
          type="text" 
          name="player-name"
          id="player-name" 
          placeholder="Lucky" 
          />
        </label>
        <label>
          Breed:
          <input 
          type="text" 
          name="player-breed"
          id="player-breed" 
          placeholder="dalmation" 
          />
        </label>
        <label>
          Image:
          <input 
          type="text" 
          name="player-image"
          id="player-image" 
          placeholder="https://placedog.net/640/480?random" 
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>
  )
}

export default NewPlayerForm;