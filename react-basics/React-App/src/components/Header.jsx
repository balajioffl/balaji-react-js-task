import styles from "./Header.module.css";

const user = 'Guest'

function Header(){
    return(
        <header className={styles.header}>
            <h3>Hello {user}  </h3>
        </header>
    );
}

export default Header;

