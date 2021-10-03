import GameButton from './GameButton';

// css
import styles from './SelectionTriangle.module.css';

function SelectionTriangle(props) {
  return (
    <div className={styles.triangleContainer}>
      <GameButton type={'paper'} />
      <GameButton type={'rock'} />
      <GameButton type={'scissors'} />
    </div>
  );
}

export default SelectionTriangle;
