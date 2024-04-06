export type Token = string | undefined | null;

export type FilterParams = {
  limit?: number | string;
  page?: number | string;
  filter?: string;
  type?: string;
  status?: string;
  user_id?: string;
  product_id?: string;
  product_slug?: string;
  product_category?: string;
  days?: string | number;
  search_term?: string;
};

export type ProductCategory = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: any;
  created_at: string;
  updated_at: string;
};
