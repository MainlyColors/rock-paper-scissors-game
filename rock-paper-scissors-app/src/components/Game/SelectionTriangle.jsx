import GameButton from './GameButton';

// css
import styles from './SelectionTriangle.module.css';

function SelectionTriangle(props) {
  return (
    <div className={styles.triangleContainer}>
      <GameButton
        onClick={props.playerSelectionPass}
        type={'paper'}
        gridLocation={'grid-left'}
      />
      <GameButton
        onClick={props.playerSelectionPass}
        type={'scissors'}
        gridLocation={'grid-right'}
      />
      <GameButton
        onClick={props.playerSelectionPass}
        type={'rock'}
        gridLocation={'grid-bottom'}
      />
    </div>
  );
}

export default SelectionTriangle;
