import styles from './RulesButton.module.css';

function RulesButton(props) {
  return (
    <button className={styles.rulesBtn} onClick={props.onClick}>
      rules
    </button>
  );
}

export default RulesButton;
