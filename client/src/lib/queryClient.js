import { QueryClient } from "@tanstack/react-query";

async function throwIfResNotOk(res) {
  if (!res.ok) {
    throw new Error(`${res.status}: ${await res.text()}`);
  }
  return res;
}

export async function apiRequest(endpoint, options = {}) {
  const url = endpoint.startsWith('http') ? endpoint : `/api${endpoint}`;
  
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  if (config.body && typeof config.body !== 'string') {
    config.body = JSON.stringify(config.body);
  }

  const response = await fetch(url, config);
  await throwIfResNotOk(response);
  
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json();
  }
  
  return response.text();
}

export const getQueryFn = (options = {}) => {
  const { on401 = "throw" } = options;
  
  return async ({ queryKey }) => {
    const endpoint = Array.isArray(queryKey) ? queryKey.join('/') : queryKey;
    
    try {
      return await apiRequest(endpoint);
    } catch (error) {
      if (error.message.includes('401') && on401 === "returnNull") {
        return null;
      }
      throw error;
    }
  };
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn(),
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: (failureCount, error) => {
        if (error.message.includes('401') || error.message.includes('403')) {
          return false;
        }
        return failureCount < 3;
      },
    },
  },
});