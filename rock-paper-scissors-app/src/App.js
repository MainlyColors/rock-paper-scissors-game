//tools
import { useState } from 'react';
import ReactDOM from 'react-dom';

// css
import './App.css';

// components
import GameScoreHeader from './components/Game/GameScoreHeader';
import SelectionTriangle from './components/Game/SelectionTriangle';
import RulesButton from './components/Game/RulesButton';
import RulesModal from './components/Game/RulesModal';
import Stage from './components/Game/Stage';

function App() {
  // modal functions
  const [isModalOpen, setIsModalOpen] = useState(false);

  // modal window toggle - controlled by rules button
  const modalAppear = function () {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
  };

  // modal portal for better ally
  const modal = ReactDOM.createPortal(
    <RulesModal modalControls={modalAppear} />,
    document.getElementById('rules-modal')
  );

  //handling user click game option
  const [playerSelection, setPlayerSelection] = useState('');

  return (
    <main>
      <GameScoreHeader />
      {playerSelection === '' ? (
        <SelectionTriangle
          playerSelectionSetFunction={(selection) => {
            setPlayerSelection(selection);
          }}
        />
      ) : (
        <Stage playerSelection={playerSelection} />
      )}
      <RulesButton onClick={modalAppear} />
      {isModalOpen && modal}
    </main>
  );
}

export default App;
