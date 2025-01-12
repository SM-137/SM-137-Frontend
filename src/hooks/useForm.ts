import { useState } from "react";

interface FormState {
  [key: string]: any;
}

export const useForm = <T extends FormState>(initialState: T) => {
  const [formData, setFormData] = useState<T>(initialState);

  const updateField = (key: keyof T, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleFileChange = (key: keyof T) => (file: File | null) => {
    updateField(key, file);
  };

  return {
    formData,
    updateField,
    handleFileChange,
    setFormData,
  };
};
