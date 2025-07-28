"use client";

import { useEffect, useState } from "react";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { Toast as ToastType, useToast } from "@/contexts/ToastContext";

const toastIcons = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

const toastColors = {
  success: "bg-white border-[#E2DFCF] text-[#160D05] shadow-lg",
  error: "bg-white border-red-200 text-red-800 shadow-lg",
  warning: "bg-white border-yellow-200 text-yellow-800 shadow-lg",
  info: "bg-white border-blue-200 text-blue-800 shadow-lg",
};

const iconColors = {
  success: "text-[#D3744A]",
  error: "text-red-500",
  warning: "text-yellow-500",
  info: "text-blue-500",
};

interface ToastProps {
  toast: ToastType;
}

export function Toast({ toast }: ToastProps) {
  const { removeToast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const Icon = toastIcons[toast.type];

  useEffect(() => {
    // Animate in
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => removeToast(toast.id), 300);
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 max-w-sm w-full transform transition-all duration-300 ease-in-out ${
        isVisible && !isLeaving
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
      }`}>
      <div
        className={`${
          toastColors[toast.type]
        } border rounded-lg shadow-lg p-4 flex items-start gap-3`}>
        <Icon
          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${iconColors[toast.type]}`}
        />

        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm">{toast.title}</h4>
          {toast.message && (
            <p className="text-sm mt-1 opacity-90">{toast.message}</p>
          )}
        </div>

        <button
          onClick={handleClose}
          className="text-[#8F7D6A] hover:text-[#160D05] transition-colors duration-200 flex-shrink-0">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export function ToastContainer() {
  const { toasts } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
}
