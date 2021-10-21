//tools
import { useState } from 'react';
import ReactDOM from 'react-dom';

// css
import './App.css';

// components
import Main from './components/UI/Main';
import GameScoreHeader from './components/Game/GameScoreHeader';
import SelectionTriangle from './components/Game/SelectionTriangle';
import RulesButton from './components/Game/RulesButton';
import RulesModal from './components/Game/RulesModal';
import Stage from './components/Game/Stage';
function App() {
  // modal functions
  const [modalPresent, modalPresentSet] = useState(false);

  const modalAppear = function () {
    modalPresent ? modalPresentSet(false) : modalPresentSet(true);
  };

  const modal = ReactDOM.createPortal(
    <RulesModal modalControls={modalAppear} />,
    document.getElementById('rules-modal')
  );

  //handling user click game option
  const [playerSelection, setPlayerSelection] = useState('');

  // selection = string
  const onClickPlayerSelectionHandler = function (selection) {
    setPlayerSelection(selection);
  };

  return (
    <Main>
      <GameScoreHeader />
      {playerSelection === '' ? (
        <SelectionTriangle
          playerSelectionPass={onClickPlayerSelectionHandler}
        />
      ) : (
        <Stage playerSelection={playerSelection} />
      )}
      <RulesButton onClick={modalAppear} />
      {modalPresent && modal}
    </Main>
  );
}

export default App;
