import clsx from "clsx";
import { type ClassNameValue, twMerge } from "tailwind-merge";

export const cn = (...classNames: ClassNameValue[]) => {
	return twMerge(clsx(classNames));
};
