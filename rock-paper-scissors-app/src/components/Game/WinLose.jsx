import styles from './WinLose.module.css';
import PlayAgainBtn from './PlayAgainBtn';
function WinLose(props) {
  const results = props.result ? 'you win' : 'you lose';

  return (
    <div className={styles.winLoseContainer}>
      <div className={styles.winLoseTitle}>{results}</div>
      <PlayAgainBtn />
    </div>
  );
}

export default WinLose;
