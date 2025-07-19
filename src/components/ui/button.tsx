import { cn } from "@/utils/classname";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode;
}

export function Button({ className, children, onClick }: ButtonProps) {
	return (
		<button
			type="button"
			className={cn(
				"bg-white",
				"font-bellefair",
				"rounded-full",
				"cursor-pointer",
				"text-lg",
				"sm:text-[2rem]",
				"w-[9rem]",
				"sm:w-[17rem]",
				"text-blue-900",
				"aspect-square",
				"outline-[5rem]",
				"outline-transparent",
				"hover:outline-[#ffffff20]",
				"hover:text-gray-300",
				"transition-colors",
				"duration-300",
				className,
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
