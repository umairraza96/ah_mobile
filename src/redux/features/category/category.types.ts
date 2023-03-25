import {ResponseData} from '../../types';

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string | null;
  created_at: string;
  updated_at: string;
}

export interface CatgoriesResponseData extends ResponseData {
  data: Category[];
}

export interface CategoryResponseData extends ResponseData {
  data: Category;
}
