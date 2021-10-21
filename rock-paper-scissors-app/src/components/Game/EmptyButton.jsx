import styles from './EmptyButton.module.css';

function EmptyButton(props) {
  return <div className={`${styles.emptyBtn} ${props.className}`}></div>;
}

export default EmptyButton;
