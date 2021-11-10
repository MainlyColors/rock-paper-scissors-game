import styles from './FilledBox.module.css';

function FilledBox(props) {
  if (props.element === 'button') {
    return (
      <button className={`${styles['filled-box']}  ${props.className}`}>
        {props.children}
      </button>
    );
  }

  return (
    <div className={`${styles['filled-box']}  ${props.className}`}>
      {props.children}
    </div>
  );
}

export default FilledBox;
