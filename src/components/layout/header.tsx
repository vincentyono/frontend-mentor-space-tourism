import { Logo } from "@/components/ui/logo";
import { Navigation } from "@/components/ui/navigation";
import { cn } from "@/utils/classname";

export function Header() {
	return (
		<header
			className={cn(
				"flex",
				"justify-between",
				"p-6",
				"sm:p-0",
				"sm:pl-[2.25rem]",
				"sm:min-w-[48px]",
				"sm:items-center",
				"lg:pt-4",
				"lg:pl-[4rem]",
			)}
		>
			<Logo />
			<div
				className={cn(
					"hidden",
					"lg:inline-block",
					"lg:h-[1px]",
					"lg:ml-16",
					"lg:w-[120%]",
					"lg:z-50",
					"lg:bg-[#979797a0]",
				)}
			/>
			<Navigation />
		</header>
	);
}
