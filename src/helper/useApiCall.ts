import { useState, useCallback, useRef, useEffect } from "react";

type ApiCallProps = {
  service: (params?: any) => Promise<any>;
  params?: any | null;
  onError?: (error: Error) => void;
  onSuccess?: (data: any) => void;
  showToastOnError?: boolean;
  errorMessage?: string;
};

const apiCaller = async (props: ApiCallProps) => {
  try {
    const response = await props.service(props.params);
    const isSuccess = response?.data?.success || response?.status === 200;

    if (isSuccess) {
      props.onSuccess?.(response?.data?.data);
      return response?.data?.data;
    }

    throw new Error(response?.data?.message || "Unknown error");
  } catch (error: any) {
    props.onError?.(error);

    if (props.showToastOnError) {
      // showToast("error", props.errorMessage || "Ops!", error?.message);
    }

    throw error;
  }
};

const useApiCall = () => {
  const [serviceLoad, setServiceLoad] = useState(0);
  const isMounted = useRef(true);

  // Ensures stable function reference
  const apiCall = useCallback(async (props: ApiCallProps) => {
    setServiceLoad((prev) => prev + 1);

    try {
      return await apiCaller(props);
    } finally {
      if (isMounted.current) {
        setServiceLoad((prev) => (prev > 0 ? prev - 1 : 0));
      }
    }
  }, []);

  // Cleanup effect to avoid state updates on unmounted component
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return {
    resetServiceLoad: () => setServiceLoad(0),
    serviceLoad: serviceLoad > 0,
    apiCall,
  };
};

export default useApiCall;
