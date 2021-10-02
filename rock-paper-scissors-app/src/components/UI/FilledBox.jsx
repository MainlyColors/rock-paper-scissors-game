import styles from './FilledBox.module.css';

function FilledBox(props) {
  return (
    <div className={`${styles['filled-box']}  ${props.className}`}>
      {props.children}
    </div>
  );
}

export default FilledBox;
