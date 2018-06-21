import React from 'react';
import { Button } from 'reactstrap';

import TeamNameSelector from './teamNameSelector/TeamNameSelector';
import OverSelector from './overSelector';

class NewGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { step: 0 };
  }

    renderStep1() {
        return (
            <div>
                <TeamNameSelector teamIndex={0} />
                <TeamNameSelector teamIndex={1} />
                <OverSelector />

                <Button onClick={() => { this.setState({ step: 1 }); }}>Next</Button>
            </div>
        );
    }

    renderStep2() {
        return (
            <div>
                <TeamNameSelector teamIndex={0} />
                <TeamNameSelector teamIndex={1} />
                <OverSelector />

                <Button onClick={() => { this.setState({ step: 1 }); }}>Next</Button>
            </div>
        );
    }
}

export default NewGame;
