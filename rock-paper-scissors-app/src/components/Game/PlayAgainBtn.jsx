import styles from './PlayAgainBtn.module.css';
import FilledBox from '../UI/FilledBox';
function PlayAgainBtn(props) {
  return (
    <FilledBox className={styles.playAgainText} element="button">
      play again
    </FilledBox>
  );
}

export default PlayAgainBtn;
