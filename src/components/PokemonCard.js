import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({card}) {
const [value, setValue] = useState(true)

  const {id, name, hp, sprites} = card
  const {front, back} = sprites

  return (
    <Card>
      <div>
        <div className="image">
        {  value ? <img onClick={() => setValue(!value)} src={front} alt="oh no!" /> :   <img onClick={() => setValue(!value)} src={back} alt="oh no!" />}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
