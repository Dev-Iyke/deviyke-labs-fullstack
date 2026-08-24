
export type ApiSuccessResponse<TData> = {
  success: boolean;
  message: string;
  data: TData;
}

export type MutationResponse<TData> = {
  success: boolean;
  message: string;
  data: TData;
}

export type MutationResponseWithoutData = {
  success: boolean;
  message: string;
}

export type QueryResponse<TData> = {
  success: boolean;
  message: string;
  data: TData;
}

export type PaginatedQueryResponse<TData> = {
  success: boolean;
  message: string;
  results: {
    data: TData[];
    page: number;
    pageSize: number;
    count: number;
    total: number;
    next: string | null;
    previous: string | null;
  };
}