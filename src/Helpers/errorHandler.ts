import { toast } from "react-toastify";

export const notifyErrors = (res: any) => {
  const errors = Object.values(res.response?.data.errors).flat() as string[];
  errors.forEach((e) => toast.error(e));
};
