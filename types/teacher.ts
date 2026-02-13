export interface GetAllTeachersParams {
  page?: number;
  perPage?: number;
  languages?: string;
  levels?: string;
  price_per_hour?: number;
}

export interface GetTeachersResponse {
  teachers: Teacher[];
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface Teacher {
  _id: string;
  name: string;
  surname: string;
  languages: string[];
  levels: string[];
  rating: number;
  price_per_hour: number;
  lessons_done: number;
  avatar_url: string;
  lesson_info: string;
  conditions: string;
  experience: string;
  createdAt: string;
  updatedAt: string;
}
