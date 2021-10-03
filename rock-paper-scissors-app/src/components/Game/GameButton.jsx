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

  const btnContainerStyles = {
    backgroundColor: `var(--clr-game-icon-${props.type}-secondary)`,
  };

  return (
    <div className={`${styles.btnContainer} ${styles[props.type]}`}>
      <div className={styles.symbolBackground}>
        <img src={svgType} alt={props.type} />
      </div>
    </div>
  );
}

export default GameButton;
