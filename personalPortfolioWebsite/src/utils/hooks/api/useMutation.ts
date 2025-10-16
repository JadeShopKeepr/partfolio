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
type MutationTypes = 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export const useMutation = <T, K>(url: string, method: MutationTypes, config?: Omit<RequestInit, 'method'>) => {
  const [status, setStatus] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, seIsError] = React.useState('');
  const mutation = React.useCallback(async (body: T): Promise<ApiResponse<K>> => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        credentials: 'same-origin',
        ...config,
        method,
        headers: { 'Content-Type': 'application/json', ...(!!config?.headers && config.headers) },
        ...(!!body && { body: JSON.stringify(body) }),
      });
      setStatus(response.status);
      return (await response.json()) as ApiResponse<K>;
    } catch (e) {
      setIsLoading(false);
      seIsError((e as Error).message);
      return { success: false, data: { message: (e as Error).message } } as ApiResponse<K>;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { mutation, method, isLoading, isError, status };
};
