import useFavoriteStore from "../store/useFavoriteStore";

function FavoriteList() {
  const favorites = useFavoriteStore((state) => state.favorites);
  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);

  return (
    <section className="favorites">
      <h2>Favorite Users</h2>
      {favorites.length === 0 ? (
        <p className="empty">No favorite users yet. Click "Add Favorite" on a user.</p>
      ) : (
        <ul>
          {favorites.map((user) => (
            <li key={user.id}>
              <span>{user.name}</span>
              <button className="small" onClick={() => removeFavorite(user.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default FavoriteList;
