import { GetAllTeachersParams, GetTeachersResponse } from '@/types/teacher';
import { nextApi } from './serverConfig';

export async function getAllTeachers(params: GetAllTeachersParams) {
  const response = await nextApi.get<GetTeachersResponse>('/teachers', {
    params,
  });
  return response.data;
}

export function getTeacherById() {}

export function createTeacher() {}
export function updateTeacherById() {}
export function deleteTeacherById() {}
