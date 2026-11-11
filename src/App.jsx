import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import UserDetails from "./components/UserDetails";
import FavoriteList from "./components/FavoriteList";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Navbar totalUsers={users.length} />

      <main className="container">
        <FavoriteList />

        <h2 className="section-title">All Users</h2>

        {loading && <p className="message">Loading users...</p>}
        {error && <p className="message error">{error}</p>}

        <div className="grid">
          {users.map((user) => (
            <UserCard key={user.id} user={user} onDetails={setSelectedUser} />
          ))}
        </div>
      </main>

      {selectedUser && (
        <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </>
  );
}

export default App;
