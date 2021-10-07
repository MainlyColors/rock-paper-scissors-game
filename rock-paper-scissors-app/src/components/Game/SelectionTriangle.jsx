import GameButton from './GameButton';

// css
import styles from './SelectionTriangle.module.css';

function SelectionTriangle(props) {
  return (
    <div className={styles.triangleContainer}>
      <GameButton type={'paper'} gridLocation={'grid-left'} />
      <GameButton type={'scissors'} gridLocation={'grid-right'} />
      <GameButton type={'rock'} gridLocation={'grid-bottom'} />
    </div>
  );
}

export default SelectionTriangle;
