// components
import Score from './Score';

// css stuff
import styles from './GameScoreHeader.module.css';
import logo from '../../../../images/logo.svg';
// import { ReactComponent as Logo } from '../../../../images/logo.svg';

function GameScoreHeader(props) {
  return (
    <div className={styles.GameScoreHeaderContainer}>
      <Logo />
      <Score />
    </div>
  );
}

export default GameScoreHeader;

{
  /* <img src={logo} alt="Rock, Paper, Scissors" /> */
}
