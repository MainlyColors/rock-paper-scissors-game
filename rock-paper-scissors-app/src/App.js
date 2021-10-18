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

function App() {
  const [modalPresent, modalPresentSet] = useState(false);

  const modalAppear = function () {
    modalPresent ? modalPresentSet(false) : modalPresentSet(true);
  };

  const modal = ReactDOM.createPortal(
    <RulesModal modalControls={modalAppear} />,
    document.getElementById('rules-modal')
  );

  return (
    <Main>
      <GameScoreHeader />
      <SelectionTriangle />
      <RulesButton onClick={modalAppear} />
      {modalPresent && modal}
    </Main>
  );
}

export default App;
