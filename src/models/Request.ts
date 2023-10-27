export enum RequestStatus {
  IDLE,
  FETCHING,
  SUCCESS,
  FAILURE,
}

export type APIResponse<T> = {
  data: T;
  message?: string;
};

export type APIListResponse<T> = APIResponse<{
  items: T[];
  pages: number;
  total: number;
}>;

export type GenericError = {
  message: string;
};

export type PaginationQuery = {
  field: string;
  query: string;
};

export type PaginationPayload = {
  filter?: PaginationQuery;
  relations?: string[];
  skip?: number;
  take?: number;
};
