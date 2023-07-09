import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeList}) {
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokeList.map((card) => <PokemonCard key={card.id} card={card}/>)}
    </Card.Group>
  );
}

export default PokemonCollection;
