"use client";

import { animate } from "animejs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/utils/classname";

export function Navigation() {
	const pathname = usePathname();
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	animate(".navigation-open", {
		duration: 500,
		left: [{ to: "100%" }, { to: "30%" }],
		right: 0,
	});

	animate(".navigation-close", {
		duration: 500,
		left: "100%",
	});

	return (
		<nav className="relative">
			<button
				type="button"
				className={cn("sm:hidden", "cursor-pointer")}
				onClick={() => setIsDropdownOpen((prev) => !prev)}
			>
				<Image
					src="/assets/shared/icon-hamburger.svg"
					alt="hamburger"
					width={24}
					height={24}
				/>
			</button>
			<ul
				className={cn(
					"flex flex-col",
					"pl-8",
					"gap-8",
					"sm:flex-row",
					"fixed",
					"sm:static",
					"top-0",
					"left-full",
					"right-0",
					"bottom-0",
					"bg-[#0b0d170e]",
					"sm:bg-[#ffffff0a]",
					"backdrop-blur-[1000px]",
					"font-barlow-condensed",
					"tracking-[2px]",
					"[&>li]:text-white",
					"[&>li>a]:flex",
					"[&>li>a]:gap-3",
					"[&>li>a]:h-fit",
					"[&>li>a]:sm:py-[2.5rem]",
					"sm:px-[2.5rem]",
					"sm:pl-[4rem]",
					"sm:gap-[2.5rem]",
					"lg:gap-12",
					"lg:px-[4rem]",
					"lg:pl-[12rem]",
					!isDropdownOpen ? "navigation-open" : "navigation-close",
				)}
			>
				<button
					type="button"
					onClick={() => {
						setIsDropdownOpen(false);
					}}
					className={cn(
						"ml-auto",
						"sm:hidden",
						"py-8",
						"px-6",
						"cursor-pointer",
					)}
				>
					<Image
						src="/assets/shared/icon-close.svg"
						alt="x symbol"
						width={24}
						height={24}
					/>
				</button>
				<li
					className={cn(
						"border-r-4",
						"sm:border-r-0",
						"sm:border-b-4",
						"border-transparent",
						pathname === "/" && "border-white",
						pathname !== "/" && "hover:border-gray-400",
					)}
				>
					<Link href="/">
						<strong className="sm:hidden lg:block">00</strong>
						HOME
					</Link>
				</li>
				<li
					className={cn(
						"border-r-4",
						"sm:border-r-0",
						"sm:border-b-4",
						"border-transparent",
						pathname === "/destination" && "border-white",
						pathname !== "/destination" && "hover:border-gray-400",
					)}
				>
					<Link href="/destination">
						<strong>01</strong>
						DESTINATION
					</Link>
				</li>
				<li
					className={cn(
						"border-r-4",
						"sm:border-r-0",
						"sm:border-b-4",
						"border-transparent",
						pathname === "/crew" && "border-white",
						pathname !== "/crew" && "hover:border-gray-400",
					)}
				>
					<Link href="/crew">
						<strong>02</strong>
						CREW
					</Link>
				</li>
				<li
					className={cn(
						"border-r-4",
						"sm:border-r-0",
						"sm:border-b-4",
						"border-transparent",
						pathname === "/technology" && "border-white",
						pathname !== "/technology" && "hover:border-gray-400",
					)}
				>
					<Link href="/technology">
						<strong>03</strong>
						TECHNOLOGY
					</Link>
				</li>
			</ul>
		</nav>
	);
}
