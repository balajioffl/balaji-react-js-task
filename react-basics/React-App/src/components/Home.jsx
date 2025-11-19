import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <h2>Welcome to the Home Page</h2>
      <p>This is my first react app and created few components.</p>
      <p>components created:</p>
      <p>Navbar</p>
      <p>Header</p>
      <p>Main</p>
      <p>Footer</p>
    </div>
  );
}

export default Home;