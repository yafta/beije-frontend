import { useToast } from "storage/context/ToastProvider";
import { useState, useCallback, useRef, useEffect } from "react";

type ApiCallProps = {
  service: (params?: any) => Promise<any>;
  params?: any | null;
  onError?: (error: Error) => void;
  onSuccess?: (data: any) => void;
  showToastOnError?: boolean;
  errorMessage?: string;
};

export const apiCaller = async (props: ApiCallProps & { showToast?: Function }) => {
  try {
    const response = await props.service(props.params);
    const isSuccess = response?.data?.success || response?.status === 200;
    if (isSuccess) {
      props.onSuccess?.(response?.data?.data);
      return response?.data?.data;
    }
    return new Error(response?.data?.message || "Unknown error");
  } catch (error: any) {
    props.onError?.(error?.response);
    if (props.showToastOnError && typeof props.showToast === "function") {
      props.showToast(props.errorMessage || "Ops!");
    }
    return error;
  }
};

const useApiCall = () => {
  const { showToast } = useToast();
  const [serviceLoad, setServiceLoad] = useState(0);
  const isMounted = useRef(true);

  // Ensures stable function reference
  const apiCall = useCallback(
    async (props: ApiCallProps) => {
      setServiceLoad((prev) => prev + 1);

      try {
        return await apiCaller({ ...props, showToast });
      } finally {
        if (isMounted.current) {
          setServiceLoad((prev) => (prev > 0 ? prev - 1 : 0));
        }
      }
    },
    [showToast]
  );

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
