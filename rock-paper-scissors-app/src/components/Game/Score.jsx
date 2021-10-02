import FilledBox from '../UI/FilledBox';
import styles from './Score.module.css';

function Score(props) {
  return (
    <FilledBox className={styles.scoreContainer}>
      <div className={styles.scoreHeader}>score</div>
      <div className={styles.scoreNumber}>11</div>
    </FilledBox>
  );
}

export default Score;
