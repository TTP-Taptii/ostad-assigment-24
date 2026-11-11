import useFavoriteStore from "../store/useFavoriteStore";

function UserCard({ user, onDetails }) {
  const favorites = useFavoriteStore((state) => state.favorites);
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);

  const isFavorite = favorites.some((fav) => fav.id === user.id);

  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>

      <div className="btn-row">
        <button onClick={() => onDetails(user)}>Details</button>
        <button
          className={isFavorite ? "fav-btn active" : "fav-btn"}
          onClick={() => toggleFavorite(user)}
        >
          {isFavorite ? "Remove Favorite" : "Add Favorite"}
        </button>
      </div>
    </div>
  );
}

export default UserCard;
