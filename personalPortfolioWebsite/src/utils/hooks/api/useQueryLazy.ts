import React from 'react';

interface ApiSuccessResponse<T> {
  success: true;
}
interface ApiFailureResponse<T> {
  success: false;
}
type ApiResponse<T> = ApiSuccessResponse<T> | ApiFailureResponse<T>;

export const useQueryLazy = <T, K>(url: string, config?: Omit<RequestInit, 'method'>) => {
  const [status, setStatus] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const query = React.useCallback(async (): Promise<ApiResponse<K>> => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        credentials: 'same-origin',
        ...config,
        method: 'GET',
        headers: { 'Content-Type': 'application/json', ...(!!config?.headers && config.headers) },
      });
      setStatus(response.status);
      return (await response.json()) as ApiResponse<K>;
    } catch (e) {
      setIsLoading(false);
      setError((e as Error).message);
      return { success: false, data: { message: (e as Error).message } } as ApiResponse<K>;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { query, error, isLoading, status };
};
