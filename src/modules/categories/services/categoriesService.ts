import type { Category } from '@/modules/categories/types/categories';
import axiosClient from '@/modules/core/services/axiosClient';

export const getCategories = async (): Promise<Category[]> => {
  const response = await axiosClient.get('categories/categories/');
  return response.data;
};

export const getCategory = async (id: number): Promise<Category> => {
  const response = await axiosClient.get(`categories/categories/${id}/`);
  return response.data;
};

