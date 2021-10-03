import './App.css';
import Main from './components/UI/Main';
import GameScoreHeader from './components/Game/GameScoreHeader';
import SelectionTriangle from './components/Game/SelectionTriangle';

function App() {
  return (
    <Main>
      <GameScoreHeader />
      <SelectionTriangle />
    </Main>
  );
}

export default App;
