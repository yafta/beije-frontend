import React, { createContext, useContext, useState } from "react";

type ToastContextType = {
  showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextType>({ showToast: () => null });

export const useToast = () => useContext(ToastContext);

function ToastProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState("");

  const showToast = (toastMessage: string) => {
    setMessage(toastMessage);
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {message && (
        <div
          style={{
            position: "absolute",
            top: "120px",
            right: "20px",
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "opacity 0.3s ease-in-out",
          }}>
          {message}
        </div>
      )}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
