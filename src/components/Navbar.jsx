import useFavoriteStore from "../store/useFavoriteStore";

function Navbar({ totalUsers }) {
  const favoriteCount = useFavoriteStore((state) => state.favorites.length);

  return (
    <nav className="navbar">
      <h2 className="logo">User Manager</h2>
      <div className="counts">
        <span className="badge">Total Users: {totalUsers}</span>
        <span className="badge fav">Favorite Users: {favoriteCount}</span>
      </div>
    </nav>
  );
}

export default Navbar;
