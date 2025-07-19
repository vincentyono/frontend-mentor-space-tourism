import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/classname";

export default function Home() {
	return (
		<div className="background-home h-full">
			<Header />
			<div
				className={cn(
					"flex",
					"flex-col",
					"lg:flex-row",
					"lg:justify-around",
					"lg:items-end",
					"gap-6",
					"py-6",
					"pt-[22rem]",
					"items-center",
				)}
			>
				<div
					className={cn(
						"flex",
						"flex-col",
						"gap-[0.75rem]",
						"text-white",
						"text-center",
						"lg:text-left",
						"px-6",
						"w-[325px]",
						"sm:w-[512px]",
						"lg:w-[540px]",
					)}
				>
					<span
						className={cn(
							"font-barlow-condensed",
							"tracking-widest",
							"sm:text-[1.75rem]",
							"lg:mt-[-1rem]",
						)}
					>
						SO YOU WANT TO TRAVEL TO
					</span>
					<h2 className={cn("font-bellefair", "text-[5rem]", "sm:text-[9rem]")}>
						SPACE
					</h2>
					<p
						className={cn(
							"font-barlow",
							"text-[0.9rem]",
							"sm:text-[1rem]",
							"leading-[180%]",
						)}
					>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</div>
				<Button className={cn("self-center")}>EXPLORE</Button>
			</div>
		</div>
	);
}
