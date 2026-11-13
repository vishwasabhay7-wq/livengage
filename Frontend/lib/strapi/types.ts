/**
 * Generic types for Strapi v5 Responses.
 * Note: Strapi v5 simplified responses by flattening the `attributes` wrapper.
 */

export interface StrapiMeta {
  pagination?: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface StrapiResponse<T> {
  data: T | null;
  meta?: StrapiMeta;
  error?: {
    status: number;
    name: string;
    message: string;
    details: unknown;
  };
}
