import { create } from 'zustand';
import { getAllTeachers } from '@/services/teachers';
import { Teacher } from '@/types/teacher';

interface TeachersState {
  items: Teacher[];
  page: number;
  isLoading: boolean;
  hasMore: boolean;
  fetchTeachers: (
    loadMore: boolean,
    filters?: Record<string, unknown>
  ) => Promise<void>;
  resetTeachers: () => void;
}

export const useTeachersStore = create<TeachersState>((set, get) => ({
  items: [],
  page: 1,
  isLoading: false,
  hasMore: true,

  fetchTeachers: async (loadMore, filters: Record<string, unknown> = {}) => {
    const currentPage = loadMore ? get().page + 1 : 1;

    set({ isLoading: true });

    try {
      const data = await getAllTeachers({
        page: currentPage,
        perPage: 4,
        ...filters,
      });

      const newItems = loadMore
        ? [...get().items, ...data.teachers]
        : data.teachers;

      set({
        items: newItems,
        page: currentPage,
        hasMore: data.teachers.length === 4,
        isLoading: false,
      });
    } catch (error) {
      console.error(error);
      set({ isLoading: false });
    }
  },

  resetTeachers: () => {
    set({
      items: [],
      page: 1,
      hasMore: true,
    });
  },
}));
