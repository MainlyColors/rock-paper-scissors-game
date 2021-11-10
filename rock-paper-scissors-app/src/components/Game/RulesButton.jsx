import styles from './RulesButton.module.css';

function RulesButton(props) {
  const marginControl = 'rulesBtn--normal';

  return (
    <button
      className={`${styles.rulesBtn} ${styles[marginControl]}`}
      onClick={props.onClick}
    >
      rules
    </button>
  );
}

export default RulesButton;
