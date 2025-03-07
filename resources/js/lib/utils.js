import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { usePage } from "@inertiajs/react";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const checkIfItemsExist = (array) => {
  const { auth } = usePage().props;
  if (array === undefined) return true;
  return auth.role.some((item) => array.includes(item));
};

export const checkIfUserIsAdmin = () => {
  const { auth } = usePage().props;
  return auth.role.includes("admin");
};
