import {
  GetAllTeachersParams,
  GetTeachersResponse,
  Teacher,
} from '@/types/teacher';
import { nextApi } from './serverConfig';

export async function getAllTeachers(params: GetAllTeachersParams) {
  const response = await nextApi.get<Teacher[]>('/teachers', { params });

  return {
    teachers: response.data,
    page: params.page || 1,
    perPage: params.perPage || response.data.length,
    totalPages: 1,
    totalItems: response.data.length,
    hasNextPage: false,
    hasPreviousPage: false,
  };
}

export async function getTeacherById(id: string) {
  try {
    const response = await nextApi.get<Teacher>(`/teachers/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching teacher by ID:', error);
    throw error;
  }
}

export function createTeacher() {}
export function updateTeacherById() {}
export function deleteTeacherById() {}
