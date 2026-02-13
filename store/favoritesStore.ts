import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesState {
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (id) => {
        const current = get().favorites;

        if (current.includes(id)) {
          set({
            favorites: current.filter((el) => el !== id),
          });
        } else {
          set({
            favorites: [...current, id],
          });
        }
      },
    }),
    {
      name: 'favorites-storage',
    }
  )
);
