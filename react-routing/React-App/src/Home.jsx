function Home() {
  const loggedIn = true;

  return (
    <div>
      <h1>Home Page</h1>

      {loggedIn ? (
        <h3>Welcome User !</h3>
      ) : (
        <h3>Please Login to Continue</h3>
      )}

    </div>
  );
}

export default Home;