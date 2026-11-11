import { create } from "zustand";

const STORAGE_KEY = "favoriteUsers";

// Read favorites from Local Storage when the app loads
const loadFavorites = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    return [];
  }
};

// Save favorites to Local Storage whenever the list changes
const saveFavorites = (favorites) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error("Could not save favorites", error);
  }
};

const useFavoriteStore = create((set, get) => ({
  favorites: loadFavorites(),

  addFavorite: (user) => {
    const updated = [...get().favorites, user];
    saveFavorites(updated);
    set({ favorites: updated });
  },

  removeFavorite: (id) => {
    const updated = get().favorites.filter((user) => user.id !== id);
    saveFavorites(updated);
    set({ favorites: updated });
  },

  toggleFavorite: (user) => {
    const exists = get().favorites.some((fav) => fav.id === user.id);
    if (exists) {
      get().removeFavorite(user.id);
    } else {
      get().addFavorite(user);
    }
  },
}));

export default useFavoriteStore;
