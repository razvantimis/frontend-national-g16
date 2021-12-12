import { format } from "date-fns";

export const getCurrentDate = () => new Date();

export const getCurrentDateWithFormat = () => {
  const today = new Date();

  return format(today, "do, MMMM yyyy");
};
