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

  const dynamicSvgSizeClass =
    props.type === 'paper'
      ? 'paperSize'
      : props.type === 'scissors'
      ? 'scissorsSize'
      : 'rockSize';

  return (
    <button
      className={`${styles.btnContainer} ${styles[props.type]} ${
        styles[props.gridLocation]
      }`}
    >
      <div
        className={`${styles.symbolBackground} ${styles[dynamicSvgSizeClass]}`}
      >
        <img src={svgType} alt={props.type} />
      </div>
    </button>
  );
}

export default GameButton;
