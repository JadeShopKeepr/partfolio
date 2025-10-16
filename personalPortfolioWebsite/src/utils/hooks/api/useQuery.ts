import React from 'react';

interface ApiSuccessResponse<T> {
  data: T;
  success: true;
}
interface ApiFailureResponse<T> {
  data: { message: string };
  success: false;
}

type ApiResponse<T> = ApiSuccessResponse<T> | ApiFailureResponse<T>;
export const useQuery = <K>(url: string, config?: Omit<RequestInit, 'method'>) => {
  const [status, setStatus] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, seIsError] = React.useState('');
  const mutation = React.useCallback(async (): Promise<ApiResponse<K>> => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        credentials: 'same-origin',
        ...config,
        method: 'GET',
        headers: { 'Content-Type': 'application/json', ...(!!config?.headers && config.headers) },
      });
      setStatus(response.status);
      return await response.json();
    } catch (e) {
      setIsLoading(false);
      seIsError((e as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { mutation, isLoading, isError, status };
};
