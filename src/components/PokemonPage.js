import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokeList, filterName, addNewPoke}) {
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPoke={addNewPoke} />
      <br />
      <Search filterName={filterName}/>
      <br />
    <PokemonCollection pokeList={pokeList} />
    </Container>
  );
}

export default PokemonPage;
