import {
  GetAllTeachersParams,
  GetTeachersResponse,
  Teacher,
} from '@/types/teacher';
import { nextApi } from './serverConfig';

export async function getAllTeachers(params: GetAllTeachersParams) {
  const response = await nextApi.get<GetTeachersResponse>('/teachers', {
    params,
  });
  return response.data;
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
