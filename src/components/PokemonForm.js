import React, {useState, useEffect} from "react";
import { Form } from "semantic-ui-react";
import {v4 as uuid} from "uuid"

function PokemonForm({addNewPoke}) {

  const [pokeObj, setPokeObj] = useState({
    id: uuid(),
    name: '',
    hp: 0,
    sprites: {
      front: '',
      back: '' 
    }
  })
  





  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
         addNewPoke(pokeObj)
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={e => setPokeObj({...pokeObj, name: e.target.value})} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={e => setPokeObj({...pokeObj, hp: e.target.value})}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={e => setPokeObj({...pokeObj, sprites: {...pokeObj.sprites, front: e.target.value}})}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={e => setPokeObj({...pokeObj, sprites: {...pokeObj.sprites, back: e.target.value}})}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
