import styles from './GameButton.module.css';
import paper from '../../images/icon-paper.svg';
import rock from '../../images/icon-rock.svg';
import scissors from '../../images/icon-scissors.svg';

function GameButton(props) {
  const svgType =
    props.type === 'paper'
      ? paper
      : props.type === 'scissors'
      ? scissors
      : rock;

  return (
    <div
      className={`${styles.btnContainer} ${styles[props.type]} ${
        styles[props.gridLocation]
      }`}
    >
      <div className={styles.symbolBackground}>
        <img src={svgType} alt={props.type} />
      </div>
    </div>
  );
}

export default GameButton;
