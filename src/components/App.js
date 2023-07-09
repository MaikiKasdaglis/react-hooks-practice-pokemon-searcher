import React, {useState, useEffect} from "react";
import PokemonPage from "./PokemonPage";

function App() {

  const [pokeList, setPokeList] = useState([])
  const [filterWord, setFilterWord] = useState('')

  useEffect (()=> {
    fetch(` http://localhost:3001/pokemon`)
    .then(r => r.json())
    .then(d => setPokeList(d))
  },[])

  function filterName(input) {
   setFilterWord(input)
  }
  function addNewPoke(pokeObj){
    setPokeList([...pokeList, pokeObj])

      fetch(` http://localhost:3001/pokemon/`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokeObj)
        })
  
  }

  let newArray = filterWord? pokeList.filter((card) => card.name.includes(filterWord)) : pokeList

 
  

  return (
    <div className="App">
      <PokemonPage pokeList={newArray} filterName={filterName} addNewPoke={addNewPoke} />
    </div>
  );
}

export default App;
