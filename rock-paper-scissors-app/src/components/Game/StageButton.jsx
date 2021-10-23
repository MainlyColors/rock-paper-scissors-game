import { useState, useEffect } from 'react';

import styles from './StageButton.module.css';
import GameButton from './GameButton';
import EmptyButton from './EmptyButton';

function StageButton(props) {
  const [pcChoosing, setPcChoosing] = useState(false);

  // options player or pc
  const contestant =
    props.player === 'player' ? (
      <h3 className={styles.stageTitle}>You picked</h3>
    ) : (
      <h3
        className={`${styles.stageTitle} ${
          pcChoosing === false ? styles['stageTitle--EmptyBtn'] : ''
        }`}
      >
        The House picked
      </h3>
    );

  useEffect(() => {
    const houseTimer = setTimeout(() => {
      setPcChoosing(true);
    }, 1000);

    return () => {
      clearTimeout(houseTimer);
    };
  });

  return (
    <div className={styles.stageBtnContainer}>
      {props.player === 'pc' && !pcChoosing ? (
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
