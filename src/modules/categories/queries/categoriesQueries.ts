import { getCategories, getCategory } from '@/modules/categories/services/categoriesService';
import type { Category } from '@/modules/categories/types/categories';
import { useQuery } from '@tanstack/react-query';

export const useCategoriesQuery = () => {
  const categoriesQuery = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  return {
    categoriesQuery,
  };
};

export const useCategoryQuery = (id: number) => {
  const categoryQuery = useQuery<Category>({
    queryKey: ['category', id],
    queryFn: () => getCategory(id),
    enabled: !!id,
  });

  return {
    categoryQuery,
  };
};

