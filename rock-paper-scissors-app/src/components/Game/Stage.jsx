// components
import StageButton from './StageButton';

//css
import styles from './Stage.module.css';

function Stage(props) {
  const randomHouseSelection = function () {
    const pick = Math.round(Math.random() * 3);
    return pick === 0 ? 'paper' : pick === 1 ? 'scissors' : 'rock';
  };

  return (
    <div className={styles.stageContainer}>
      <StageButton player={'player'} selection={props.playerSelection} />
      <StageButton player={'pc'} selection={randomHouseSelection()} />
    </div>
  );
}

export default Stage;
