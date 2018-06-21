import React from 'react';

import TeamNameSelector from './teamNameSelector/TeamNameSelector';

const NewGame = () => (
  <div>
    <TeamNameSelector teamIndex={0} />
    <TeamNameSelector teamIndex={1} />
  </div>
);

export default NewGame;
