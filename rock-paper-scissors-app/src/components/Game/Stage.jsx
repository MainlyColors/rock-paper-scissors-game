//tools
import React, { useState } from 'react';

// components
import StageButton from './StageButton';
import WinLose from './WinLose';
//css
import styles from './Stage.module.css';

function randomPick() {
  const pick = Math.round(Math.random() * 3);
  return pick === 0 ? 'paper' : pick === 1 ? 'scissors' : 'rock';
}

// player1 and 2 will be strings of the options
const gameKey = (player1, player2) => {
  const key = {
    rock: {
      paper: false,
      scissors: true,
      rock: 'tie',
    },
    paper: {
      paper: 'tie',
      scissors: false,
      rock: true,
    },
    scissors: {
      paper: true,
      scissors: 'tie',
      rock: false,
    },
  };

  return key[`${player1}`][`${player2}`];
};

function Stage(props) {
  // lazy useState, runs once initial render
  const [ComputerSelection, setComputerSelection] = useState(() =>
    randomPick()
  );

  // win/lose logic
  const [isResults, setIsResults] = useState('');

  // will trigger after house plays
  const checkResults = (player1, player2) => {
    const result = gameKey(player1, player2);
    setIsResults(result);
    props.scoreKeeper(result);
    props.rulesButtonMarginControlHandler();
  };

  // widens stage container for winLose component to fit in
  const winLoseStyles =
    isResults !== '' ? styles['stageContainer--winLose'] : '';

  return (
    <React.Fragment>
      <div className={`${styles.stageContainer} ${winLoseStyles}`}>
        <StageButton player={'player'} selection={props.playerSelection} />
        {isResults !== '' && window.innerWidth >= 1000 ? (
          <WinLose result={isResults} onPlayAgain={props.onPlayAgain} />
        ) : (
          ''
        )}
        <StageButton
          player={'pc'}
          selection={ComputerSelection}
          afterRender={() => {
            checkResults(props.playerSelection, ComputerSelection);
          }}
        />
      </div>
      {isResults !== '' && window.innerWidth <= 1000 ? (
        <WinLose result={isResults} onPlayAgain={props.onPlayAgain} />
      ) : (
        ''
      )}
    </React.Fragment>
  );
}

export default Stage;
