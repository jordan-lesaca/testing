function Header({ user, onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <div>
        <p>Welcome, {user}!</p>
        <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Header;