import styles from './StageButton.module.css';
import GameButton from './GameButton';
import EmptyButton from './EmptyButton';

function StageButton(props) {
  // options player or pc
  const contestant =
    props.player === 'player' ? (
      <h3 className={styles.stageTitle}>You picked</h3>
    ) : (
      <h3 className={styles.stageTitle}>The House picked</h3>
    );
  return (
    <div className={styles.stageBtnContainer}>
      {props.player === 'pc' && false ? (
        <EmptyButton className={styles.stageBtn} />
      ) : (
        <GameButton
          isDisabled={true}
          className={styles.stageBtn}
          type={props.selection}
          onClick={() => {
            console.log('button clicked in stage');
          }}
        />
      )}
      {contestant}
    </div>
  );
}

export default StageButton;
